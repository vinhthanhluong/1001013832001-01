$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            this.aos();
            this.wow();
            // this.visual();
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

        wow: function () {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // default
                    animateClass: 'animated', // default
                    offset: 0,          // default
                    mobile: false,
                    live: false,       // default
                }
            )
            wow.init();
        },

        visual: function () {
            if ($('#visual').length > 0) {
                $('#visual').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    fade: false,
                    variableWidth: false,
                });
            }
        },
    }

    obj.init();
});