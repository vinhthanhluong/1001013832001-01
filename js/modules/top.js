$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            this.aos();
            this.wow();
            // this.visual();
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
                                autoplay: true,
                                autoplaySpeed: 4000,
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
                        rows: 3
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
                    
                });
                var galleryBg = new Swiper(".gallery-bg", {
                    spaceBetween: 10,
                    thumbs: {
                        swiper: gallerySm,
                    },
                    
                    
                });
            }
        },
    }

    obj.init();
});