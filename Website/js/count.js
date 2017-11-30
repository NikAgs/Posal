(function () {
    var timelineTimer = new TimelineMax({
        repeat: -1
    });
    var counter = 0;
    var $elementTimer = $('.count');

    timelineTimer.to($elementTimer, 1, {
        onUpdate: handlerOnUpdate
    });

    function handlerOnUpdate() {
        counter += 0.4;
        $elementTimer.text(Math.ceil(counter));
    }
})();
