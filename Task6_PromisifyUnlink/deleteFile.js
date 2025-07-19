const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);
const fileToDelete = 'sample.txt';

// Create the file first (for testing purpose)
fs.writeFileSync(fileToDelete, 'Temporary file for deletion');

async function deleteFile() {
    try {
        await unlinkAsync(fileToDelete);
        console.log(`✅ ${fileToDelete} deleted successfully.`);
    } catch (error) {
        console.error('❌ Error deleting file:', error.message);
    }
}

deleteFile();

