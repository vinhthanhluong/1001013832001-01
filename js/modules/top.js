// $(function () {
//     "use strict";
//     console.log('( •ิཬ•ั ) Hello!!!');
//     function anchorLink(el) {
//         var p = $(el).offset();
//         var offsetPC = 0;
//         var offsetSP = 0;
//         if ($(window).width() > 750) {
//             $('html,body').animate({ scrollTop: p.top - offsetPC }, 400);
//         } else {
//             $('html,body').animate({ scrollTop: p.top - offsetSP }, 400);
//         }
//     }

//     function loopH(args) {
//         var arrayNew = [];
//         for (let i = 0; i < args.length; i++) {
//             var element = args[i];
//             var _mHeight = $(element).innerHeight();
//             arrayNew.push(_mHeight)
//         }
//         return arrayNew;
//     }

//     var obj = {
//         init: function () {
//             this.tab();
//             this.aos();
//             this.toTop();
//             this.anchorLink();
//             // this.scrollToMail();
//             // this.visual();
//             // this.heightSlider();
//             this.menu();
//             this.accordion();
//         },

//         //Change tab
//         tab: function () {
//             var _group = $(this).data('tab-group');
//             var _index = $(this).data('tab');
//             $('[data-tab][data-tab-group="' + _group + '"].active').removeClass('active');
//             $(this).addClass('active');

//             $('[data-tab-content][data-tab-group="' + _group + '"]').removeClass('active');
//             $('[data-tab-content="' + _index + '"][data-tab-group="' + _group + '"]').addClass('active');
//         },

//         //aos
//         aos: function () {
//             AOS.init({
//                 startEvent: 'DOMContentLoaded',
//                 offset: 0,
//                 duration: 800,
//                 delay: '200',
//                 easing: 'ease-in-sine',
//                 once: true,
//                 mirror: true,
//                 disable: function () {
//                     return $(window).width() <= 768;
//                 },
//             });
//         },

//         toTop: function () {
//             $(".scroll-top").click(function () {
//                 $('html,body').animate({
//                     scrollTop: 0,
//                 }, 1000);
//                 return false;
//             });
            
//             $(window).scroll(function () {
//                 var st = $('html,body').scrollTop();
//                 if (st > 10) {
//                     $('.scroll-top').addClass('--active');
//                 } else {
//                     $('.scroll-top').removeClass('--active');
//                 }
//             });

//             // let lastScrollTop = 0;
//             // $(window).scroll(function () {
//             //     var st = $('html,body').scrollTop();
//             //     if (st < 10) {
//             //         $('.scroll-top').removeClass('--active');
//             //         return;
//             //     }
//             //     if (st > lastScrollTop) {
//             //         $('.scroll-top').removeClass('--active');
//             //     } else {
//             //         $('.scroll-top').addClass('--active');
//             //     }
//             //     lastScrollTop = st <= 0 ? 0 : st;
//             // });
//         },

//         //Anchor Link
//         anchorLink: function () {
//             $(window).on('load', function () {
//                 "use strict";
//                 // ANCHOR FROM OTHER PAGE
//                 var hash = location.hash;
//                 if (hash && $(hash).length > 0) {
//                     anchorLink(hash);
//                 }
//                 // ANCHOR IN PAGE
//                 $('a[href^="#"]').click(function () {
//                     var getID = $(this).attr('href');
//                     if ($(getID).length) {
//                         anchorLink(getID);
//                         // CLOSE SP NAV
//                         if ($('body').hasClass('open-nav')) {
//                             $('#menu-toggle').trigger('click');
//                         }
//                         return false;
//                     }
//                 });
//             });
//         },

//         //scroll to mail form
//         scrollToMail: function () {
//             if ($('#fmail_section').length > 0) {
//                 var x = location.search;
//                 if (x.search('mode') >= 0) {
//                     var _mailFormPos = $('#fmail_section').offset().top;
//                     _mailFormPos = parseInt(_mailFormPos);
//                     if ($(window).width() > 750) {
//                         $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
//                     } else {
//                         $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
//                     }
//                 }
//             }
//         },

//         visual: function () {
//             if ($('#visual').length > 0) {
//                 $('#visual').slick({
//                     dots: false,
//                     infinite: true,
//                     speed: 1000,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     autoplay: true,
//                     autoplaySpeed: 5000,
//                     arrows: false,
//                     centerMode: false,
//                     centerPadding: 0,
//                     pauseOnHover: false,
//                     fade: false,
//                     variableWidth: false,
//                 });
//             }
//         },
        
//         heightSlider: function () {
//             var _w = $(window).width();
//             if (_w < 751) {
//                 var item = $('.treat-item .treat-txt');
//                 var arrayHeight = loopH(item);
//                 var maxHeight = Math.max.apply(Math, arrayHeight)
//                 item.css('min-height', maxHeight);
//             }
//         },

//         menu: function () {
//             $('.hamburger-btn').click(function () {
//                 $(this).toggleClass('--active');
//                 $('body').toggleClass('open-nav');
//             });

//             $('.overplay').click(function () {
//                 $('.hamburger-btn').trigger('click');
//             });

//             // $(document).on('mousedown touchstart', function (e) {
//             //     if ($(e.target).closest(".header-menu, .hamburger-btn").length === 0) {
//             //         if ($('body').hasClass('open-nav')) {
//             //             $('.hamburger-btn').trigger('click');
//             //         }
//             //     }
//             // });

//             if ($('.header-menu').length) {
//                 const _w = $(window).width();
//                 if (_w < 751) {
//                     $('.dropdown > a').click(function () {
//                         $(this).toggleClass('open');
//                         $(this).next('.sub-menu').stop().slideToggle();
//                         $(this).closest('.dropdown').siblings().find('.sub-menu').stop().slideUp();
//                         $(this).closest('.dropdown').siblings().find('a').removeClass('open');
//                     });
//                 }
//             }
//         },

//         //Accordion
//         accordion: function(){
//             $(".accordion-button").click(function (e) {
//                 e.preventDefault();
//                 $(this).toggleClass("open");
//                 var _accordionID = $(this).attr('id');
//                 var accordion_content = $('[data-accordion-for="' + accordionID + '"]');
//                 accordion_content.stop().slideToggle(200);
//             });
//         }

//     }

//     obj.init();
// });