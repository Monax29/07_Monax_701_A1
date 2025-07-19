const fs = require('fs');
const unzipper = require('unzipper');

const zipPath = 'output.zip';            // Zip file name (place your zip here)
const extractTo = 'extracted_files';     // Folder to extract into

fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: extractTo }))
    .on('close', () => {
        console.log(`✅ Extracted successfully to ./${extractTo}`);
    })
    .on('error', (err) => {
        console.error('❌ Error while extracting:', err);
    });

    