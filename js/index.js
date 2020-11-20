console.log('====================================');
console.log("INDEX.JS RUNNING...");
console.log('====================================');

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('project-wrapper').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('project-wrapper').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('project-wrapper').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('project-wrapper').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('project-wrapper').attachEvent('onmousewheel', scrollHorizontally);
    }
})();