console.clear();

document.querySelector('#tack_1').onclick = function (event) {
    if (event.target.tagName == "IMG") {
        event.target.classList.toggle('selected')
    }
};