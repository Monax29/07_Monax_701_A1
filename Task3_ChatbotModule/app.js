const readline = require('readline');
const getBotResponse = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🤖 IT Support Bot\nType 'bye' to exit.\n");

function chat() {
    rl.question('You: ', (input) => {
        const reply = getBotResponse(input);
        console.log('Bot:', reply);

        if (input.toLowerCase() === 'bye') {
            rl.close();
        } else {
            chat();
        }
    });
}

chat();
