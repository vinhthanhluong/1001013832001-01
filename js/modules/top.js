$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            this.aos();
            this.wow();
            this.visual();
            this.sliderTreatments();
            this.sliderFeatures();
            this.sliderGallery();
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
            if ($('#visuals-sm').length > 0) {
                $('#visuals-sm').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4300,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    pauseOnFocus:false,
                });
            }
            if ($('#visuals-bg').length > 0) {
                $('#visuals-bg').slick({
                    dots: false,
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    pauseOnFocus:false,
                });
            }
        },


        sliderTreatments: function () {
            if ($('#sld-treatments').length > 0) {
                $('#sld-treatments').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    pauseOnHover: false,
                    responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                                arrows: true,
                                // autoplay: true,
                                // autoplaySpeed: 5000,
                            }
                        },
                    ]
                });
            }
        },
        sliderFeatures: function () {
            if ($('#sld-features').length > 0) {
                $('#sld-features').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    pauseOnHover: false,
                    responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                                arrows: true,
                                autoplay: true,
                                autoplaySpeed: 4000,
                            }
                        },
                    ]
                });
            }
        },
        sliderGallery: function () {
            if ($('.gallery-slide').length > 0) {
                var gallerySm = new Swiper(".gallery-sm", {
                    slidesPerView: 3,
                    grid: {
                        rows: 3,
                        fill: 'row',
                    },
                    spaceBetween: 10,
                    freeMode: true,
                    watchSlidesProgress: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    // simulateTouch: false, 

                });
                var galleryBg = new Swiper(".gallery-bg", {
                    speed: 800,
                    spaceBetween: 10,
                    thumbs: {
                        swiper: gallerySm,
                    },
                    simulateTouch: false,
                    effect: "creative",
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate: ["-20%", 0, -1],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    },
                });
            }
        },
    }

    obj.init();
});