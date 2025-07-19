import fetch from 'node-fetch';

async function fetchGoogle() {
    try {
        const response = await fetch('https://www.google.com');
        const html = await response.text();

        console.log('✅ Google homepage fetched.');
        console.log(html.substring(0, 500));
    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

fetchGoogle();
