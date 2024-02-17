function scrollToBottom() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

function scrollToTop() {
window.scrollTo({
top: document.body.scrollHeight,
behavior: 'smooth'
});
}
