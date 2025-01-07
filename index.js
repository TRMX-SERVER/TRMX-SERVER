function redeemCode() {
    const correctCode = "RLMe";
    const userCode = document.getElementById("redeemCode").value.trim();
    const messageElement = document.getElementById("message");

    if (userCode === correctCode) {
        messageElement.textContent = "ID accepted";
        messageElement.className = "success";
        setTimeout(() => {
            window.location.href = "server.html";
        }, 1000);
    } else {
        messageElement.textContent = "Server ID error !";
        messageElement.className = "error";
    }
}