$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');
    
    var obj = {
        init: function () {
            this.aos();
        },

        //aos
        aos: function () {
            AOS.init({
                startEvent: 'DOMContentLoaded',
                offset: 0,
                duration: 800,
                delay: '200',
                easing: 'ease-in-sine',
                once: true,
                mirror: true,
                disable: function () {
                    return $(window).width() <= 768;
                },
            });
        },
    }

    obj.init();
});