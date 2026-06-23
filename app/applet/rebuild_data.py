import re

with open('src/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all `{ id: "chapter-X"` starting indices
matches = [m for m in re.finditer(r'{\s*id:\s*"chapter-(.*?)"', text)]

# We only want to keep the final correct list of chapters: 
# 0, 14-1, 14-2, 14-3, 14-4, 14-5, 14-6, 14-7, 14-8, 14-9, 15-1, 15-2, 15-4.
desired_chapters = [
    "0", "14-1", "14-2", "14-3", "14-4", "14-5", "14-6", "14-7", "14-8", "14-9", "15-1", "15-2", "15-4"
]

chapter_blocks = {}
# We will iterate and grab the content for each chapter.
# To find the end of a chapter block, we look for the start of the NEXT chapter block in the file, OR `];`
for i, match in enumerate(matches):
    chap_id = match.group(1)
    start_idx = match.start()
    
    # End idx is either the start of the NEXT match, or the end of the array
    if i + 1 < len(matches):
        # We need to backtrack to the `  },` before the next match
        next_start = matches[i+1].start()
        block = text[start_idx:next_start]
        # Remove trailing comma and whitespace
        block = re.sub(r',\s*$', '', block)
    else:
        end_idx = text.rfind('];', start_idx)
        block = text[start_idx:end_idx]
        block = re.sub(r'}\s*]$', '}', block).strip()

    # We will just map it in our dict. The latest occurrence in the file is likely the most updated one or the original if not updated!
    # Wait, the LAST occurrence of chapter 0, 14-1, etc in the file.
    chapter_blocks[chap_id] = block

# Now we rebuild
out = "export const courseContent = [\n"
for idx, chap in enumerate(desired_chapters):
    if chap in chapter_blocks:
        out += "  " + chapter_blocks[chap]
        if idx < len(desired_chapters) - 1:
            out += ",\n"
        else:
            out += "\n"
out += "];\n"

with open('src/data.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("Rebuilt src/data.ts")
