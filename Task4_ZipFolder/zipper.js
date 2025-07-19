const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const folderToZip = 'myFolder'; // 📁 Folder to be zipped (should exist in same directory)
const outputZipFile = 'output.zip';

// Create a file to stream archive data to
const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', {
    zlib: { level: 9 } // compression level
});

output.on('close', () => {
    console.log(`✅ Zip created: ${outputZipFile} (${archive.pointer()} total bytes)`);
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);
archive.directory(folderToZip, false); // false to zip the content, not folder itself
archive.finalize();
