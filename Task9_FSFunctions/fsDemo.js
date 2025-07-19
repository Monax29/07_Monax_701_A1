const fs = require('fs');

// 1. Create a file and write to it
fs.writeFileSync('demo.txt', 'Hello from fs module!');
console.log('✅ File created: demo.txt');

// 2. Read the file
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log('📄 Content:', data);

// 3. Append content
fs.appendFileSync('demo.txt', '\nAppended line.');
console.log('✏️ Appended content.');

// 4. Rename the file
fs.renameSync('demo.txt', 'renamed.txt');
console.log('🔁 File renamed to renamed.txt');

// 5. Check if file exists
if (fs.existsSync('renamed.txt')) {
    console.log('✔️ File exists: renamed.txt');
}

// 6. Delete the file
fs.unlinkSync('renamed.txt');
console.log('🗑️ File deleted: renamed.txt');
