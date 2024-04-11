let startX, scrollLeft;

scrollable.addEventListener('mousedown', function(e) {
    startX = e.pageX - scrollable.offsetLeft;
    scrollLeft = scrollable.scrollLeft;

    window.addEventListener('mouseup', mouseUpHandler);
    window.addEventListener('mousemove', mouseMoveHandler);
});

function mouseUpHandler() {
    window.removeEventListener('mouseup', mouseUpHandler);
    window.removeEventListener('mousemove', mouseMoveHandler);
}

function mouseMoveHandler(e) {
    const x = e.pageX - scrollable.offsetLeft;
    const deltaX = x - startX;
    scrollable.scrollLeft = scrollLeft - deltaX;
}
