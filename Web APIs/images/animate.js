function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        var distance = (target - obj.offsetLeft) / 10;
        distance < 0 ? distance = Math.floor(distance) : distance = Math.ceil(distance);
        obj.style.left = obj.offsetLeft + distance + 'px';
    }, 30)

};