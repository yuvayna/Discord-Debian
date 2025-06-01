window.api.onMessage((_, text) => {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = text;
    document.getElementById('messages').appendChild(msgDiv);
});
