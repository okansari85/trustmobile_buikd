/*
Template: Ecofuel - Electric Car & Charging Station HTML Template
Author: peacefulqode.com
Version: 1.1
Design and Developed by: PeacefulQode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Sticky Header
==> Owl Carousel
==> Back To Top


==================================================
[ End table content ]
================================================*/


(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {


        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;


        /*==================================================
        [ Search Button ]
        ==================================================*/
        jQuery('#pq-seacrh-btn').on('click', function () {
            jQuery('.pq-search-form').slideToggle();
            jQuery('.pq-search-form').toggleClass('pq-form-show');
            if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
                jQuery(this).html('<i class="fas fa-times"></i>');
            } else {
                jQuery(this).html('<i class="fas fa-search"></i>');
            }
        });


        /*==================================================
        [ Accordion ]
        ==================================================*/
        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
            if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
                jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
                jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
            }
        });


        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });

        jQuery('.pq-toggle-btn').click(function () {
            jQuery('body').addClass('pq-siderbar-open');

        });

        jQuery('.pq-close').click(function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });


        /*==================================================
        [ Sticky Header ]
        ==================================================*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023) {
            var height = jQuery('header').height();
            jQuery('.pq-breadcrumb').css('padding-top', height * 1.3);
        }
        if (jQuery('header').hasClass('pq-header-default')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }


        /*==================================================
        [ Owl Carousel ]
        ==================================================*/
        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            app_slider.owlCarousel({
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                autoplay: app_slider.data("autoplay"),
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='ion-ios-arrow-back'></i><span></span>", "<span></span><i class='ion-ios-arrow-forward'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1024: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Progressbar ]
        ==================================================*/

        $(".pq-progressbar-content .show-progress").each(function () {
            $(this).animate({
                width: $(this).attr("data-width") + "%",
            },
                2000
            );
        });

        /*==================================================
        [ Form Validation ]
        ==================================================*/

        jQuery(".pq-applyform .form-btn").click(function () {
            var first_name = jQuery('.pq-applyform #first-name').val();
            var email = jQuery('.pq-applyform #e-mail').val();
            var url = jQuery('.pq-applyform #url').val();
            var phone = jQuery('#phone-number').val();
            var venue = jQuery('#venue').val();
            var subject = jQuery('#subject').val();
            var message = jQuery('#message').val();
            var result;

            jQuery('.pq-applyform .pq-message').remove();
            jQuery('.pq-applyform .pq-thank-you-message').remove();

            if (first_name == '' || first_name == undefined) {
                jQuery("<span class='pq-name-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .name-field');
                result = false;
            }
            else {
                jQuery('.pq-name-error-message').remove();
                result = true;
            }

            if (email == '' || email == undefined) {
                jQuery("<span class='pq-email-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .e-mail-field');
                result = false;
            }
            else {
                jQuery('.pq-email-error-message').remove();
                result = true;
            }

            if(url == '' || url == undefined){
                jQuery("<span class='pq-url-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .url-field');
                result = false;
            }
            else {
                jQuery('.pq-url-error-message').remove();
                result = true;
            }
            
            if (phone == '' || phone == undefined) {
                jQuery("<span class='pq-phone-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .phone-number-field');
                result = false;
            }
            else {
                jQuery('.pq-phone-error-message').remove();
                result = true;
            }

            if (venue == '' || venue == undefined) {
                jQuery("<span class='pq-venue-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .venue-field');
                result = false;
            }
            else {
                jQuery('.pq-venue-error-message').remove();
                result = true;
            }
            
            if (subject == '' || subject == undefined) {
                jQuery("<span class='pq-subject-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform .subject-field');
                result = false;
            }
            else {
                jQuery('.pq-subject-error-message').remove();
                result = true;
            }
            
            if (message == '' || message == undefined) {
                jQuery("<span class='pq-msg-error-message pq-message'>Please fill the field</span>").insertAfter('.pq-applyform #message');
                result = false;
            }
            else {
                jQuery('.pq-msg-error-message').remove();
                result = true;
            }
            
            if (result == true) {
                jQuery("<span class='pq-thank-you-message pq-text-primary ms-5'> Thank You For Filling The form</span>").insertAfter('.pq-applyform .pq-button');
            }
        });
    });

    /*==================================================
    [ Back To Top ]
    ==================================================*/
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    jQuery('#top').on('click', function () {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*==================================================
    [ Isotope ]
    ==================================================*/
    if ($('#beer-slider').length > 0) {


        /*==================================================
        [ before-after ]
        ==================================================*/
        new BeerSlider(document.getElementById('slider'));
        $.fn.BeerSlider = function (options) {
            options = options || {};
            return this.each(function () {
                new BeerSlider(this, options);
            });
        };
        $('.beer-slider').BeerSlider({
            start: 50
        });

    }

    jQuery('.pq-masonry').isotope({
        itemSelector: '.pq-masonry-item',
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 0
        }
    });

    jQuery('.pq-grid').isotope({
        itemSelector: '.pq-grid-item',
    });

    jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {

        var filterValue = jQuery(this).attr('data-filter');
        jQuery('.pq-masonry').isotope({
            filter: filterValue
        });
        jQuery('.pq-grid').isotope({
            filter: filterValue
        });
        jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
        jQuery(this).addClass('active');


    });

    var initial_items = 6;
    var next_items = 3;

    if (jQuery('.pq-masonry').length > 0) {
        var initial_items = jQuery('.pq-masonry').data('initial_items');
        var next_items = jQuery('.pq-masonry').data('next_items');
    }

    if (jQuery('.pq-grid').length > 0) {
        var initial_items = jQuery('.pq-grid').data('initial_items');
        var next_items = jQuery('.pq-grid').data('next_items');
    }

    if(jQuery('.pq-grid').initial_items <= 6) {
        jQuery('.d-none').insertAfter('.pq-button');
    }
    else
    {
        jQuery('').insertAfter('.pq-button');
    }

    /*==================================================
    [ counter ]
    ==================================================*/
    jQuery('.timer').countTo();

    /*==================================================
    [ wow ]
    ==================================================*/

    new WOW().init();


    /*==================================================
    [ Video ]
    ==================================================*/
    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

})(jQuery);