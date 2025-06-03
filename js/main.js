/*-----------------------------------------------------------------------------------

    Theme Name: Flyweb - Web Design Agency HTML Template
    Description: Web Design Agency HTML Template
    Author: Website Design Templates
    Version: 1.0
    
    ---------------------------------- */

    ! function(s) {
        "use strict";
        var t = s(window);
    
        function o() {
            var e, o;
            e = s(".full-screen"), o = t.height(), e.css("min-height", o), e = s("header").height(), o = s(".screen-height"), e = t.height() - e, o.css("height", e)
        }
        s("#preloader").fadeOut("normall", function() {
            s(this).remove()
        }), t.on("scroll", function() {
            var e = t.scrollTop(),
                o = s(".navbar-brand img"),
                a = s(".navbar-brand.logodefault img");
            e <= 50 ? (s("header").removeClass("scrollHeader").addClass("fixedHeader"), o.attr("src", "img/logos/logo.png")) : (s("header").removeClass("fixedHeader").addClass("scrollHeader"), o.attr("src", "img/logos/logo.png")), a.attr("src", "img/logos/logo.png")
        }), t.on("scroll", function() {
            500 < s(this).scrollTop() ? s(".scroll-to-top").fadeIn(400) : s(".scroll-to-top").fadeOut(400)
        }), s(".scroll-to-top").on("click", function(e) {
            e.preventDefault(), s("html, body").animate({
                scrollTop: 0
            }, 600)
        }), s(".parallax,.bg-img").each(function(e) {
            s(this).attr("data-background") && s(this).css("background-image", "url(" + s(this).data("background") + ")")
        }), s(".story-video").magnificPopup({
            delegate: ".video",
            type: "iframe"
        }), s(".source-modal").magnificPopup({
            type: "inline",
            mainClass: "mfp-fade",
            removalDelay: 160
        }), new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        }).init(), t.resize(function(e) {
            setTimeout(function() {
                o()
            }, 500), e.preventDefault()
        }), 0 !== s(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), s(".copy-clipboard").on("click", function() {
            var e = s(this);
            e.text();
            e.text("Copied"), setTimeout(function() {
                e.text("Copy")
            }, 2e3)
        })), o(), s(document).ready(function() {
            s(".testimonial-carousel1").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                nav: !1,
                navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
                dots: !0,
                margin: 0,
                center: !1,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                items: 1,
                responsive: {
                    992: {
                        dots: !1,
                        nav: !0
                    }
                }
            }), s(".portfolio-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            }), s(".history-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            }), s(".testimonial-carousel2").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                nav: !0,
                navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
                dots: !1,
                margin: 50,
                center: !1,
                autoplay: !1,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                items: 1
            }), s(".service-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !0,
                center: !1,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            }), s(".clients-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            }), s(".clients02-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            }), s(".slider-fade1").owlCarousel({
                items: 1,
                loop: !0,
                dots: !0,
                margin: 0,
                nav: !1,
                autoplay: !0,
                smartSpeed: 1500,
                mouseDrag: !1,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                responsive: {
                    0: {
                        items: 1,
                        dots: !1
                    },
                    576: {
                        items: 1,
                        dots: !1
                    },
                    768: {
                        items: 1,
                        dots: !0
                    }
                }
            }), s(".owl-carousel").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                margin: 0,
                autoplay: !1,
                smartSpeed: 500
            }), s(".slider-fade1").on("changed.owl.carousel", function(e) {
                e = e.item.index - 2;
                s("p").removeClass("animated fadeInUp"), s("h1").removeClass("animated fadeInUp"), s("a").removeClass("animated fadeInUp"), s(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"), s(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), s(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")
            }), s(".countup").counterUp({
                delay: 25,
                time: 2e3
            }), s(".countdown").countdown({
                date: "01 Mar 2026 00:01:00",
                format: "on"
            }), s(".current-year").text((new Date).getFullYear())
        }), t.on("load", function() {
            s(".portfolio-gallery").lightGallery(), s(".portfolio-link").on("click", e => {
                e.stopPropagation()
            })
        })
    }(jQuery);