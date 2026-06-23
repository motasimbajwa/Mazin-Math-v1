import re
import json

with open('src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We know courseContent begins with "export const courseContent = ["
# and each element has "id: "chapter-X","
# Let's find all `{ id: "chapter-X"` blocks.

lines = content.split('\n')
unique_ids = set()
cleaned_lines = []

in_object = False
current_id = None
current_obj_lines = []
skip_mode = False

import ast
# Better way: regex to parse the JSON-like structure?
# Actually, since the file just has array elements appended, 
# maybe cut off after the first instance of 'chapter-14-3' closes?

