function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('issue') || input.includes('problem')) {
        return "Please describe your IT issue. I will try to help!";
    } else if (input.includes('wifi')) {
        return "Try restarting your router. If that doesn't work, contact network support.";
    } else if (input.includes('email')) {
        return "Check if you're connected to the internet. Also, verify email credentials.";
    } else if (input.includes('bye')) {
        return "Goodbye! Have a nice day.";
    } else {
        return "Sorry, I didn't understand that. Can you rephrase?";
    }
}

module.exports = getBotResponse;
