import { courseContent } from './data.js';

console.log(courseContent.find(c => c.id === 'chapter-14-4').markdown.substring(2100, 2400));
