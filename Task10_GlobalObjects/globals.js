console.log('📍 __dirname:', __dirname);
console.log('📄 __filename:', __filename);

console.log('🔔 Program started');

setTimeout(() => {
    console.log('⏱️ setTimeout: This message appears after 2 seconds');
}, 2000);

let count = 0;
const interval = setInterval(() => {
    count++;
    console.log(`🔁 setInterval count: ${count}`);
    if (count === 3) {
        clearInterval(interval);
        console.log('🛑 Interval cleared');
    }
}, 1000);

// Accessing environment info
console.log('🖥️ Platform:', process.platform);
console.log('📂 Current Directory:', process.cwd());
console.log('📦 Node Version:', process.version);
