/*!
 *  script.js  –  Al Sharq Flexible Packaging
 *  Brand-aligned animation + UI helpers
 *  2025-06-13  |  Refactor by ChatGPT
 *  ---------------------------------------------------
 *  Palette
 *  --clr-primary:  #1F2674;  /* dark indigo  */
 *  --clr-accent :  #F7931E;  /* orange       */
 *  --clr-green  :  #39B54A;  /* leaf green   */
 *  ---------------------------------------------------
 */

/* eslint-env jquery */
/* global Swiper, Waypoint, bootstrap, Masonry, AOS */

(function ($) {
  "use strict";

  /* ============================================================
     Utility: brand CSS variables (for easy future skin swaps)
  ============================================================ */
  const root = document.documentElement;
  root.style.setProperty('--clr-primary', '#1F2674');
  root.style.setProperty('--clr-accent',  '#F7931E');
  root.style.setProperty('--clr-green',   '#39B54A');

  /* ============================================================
     1) Number Rotator  (Intersection Observer version)
  ============================================================ */
  const numElems = document.querySelectorAll('[data-appear-animation]');
  if ('IntersectionObserver' in window && numElems.length) {
    const numObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const self      = $(entry.target);
        if (self.hasClass('completed')) return;

        const from      = +self.data('from') || 0;
        const to        = +self.data('to')   || 0;
        const interval  = +self.data('interval') || 1;
        const duration  = +self.data('speed') || 2000; // optional custom speed

        /* numinate replacement (tiny) */
        $({ Counter: from }).animate(
          { Counter: to },
          {
            duration,
            easing: 'swing',
            step(now) {
              self.text(Math.floor(now));
            },
            complete() {
              self.text(to);
              self.addClass('completed');
              obs.unobserve(entry.target);
            }
          }
        );
      });
    }, { rootMargin: '0px 0px -15% 0px' });

    numElems.forEach(el => {
      el.innerHTML = '0';
      numObserver.observe(el);
    });
  }

  /* ============================================================
     2) Swiper Sliders
  ============================================================ */
  let swiperCount = 1;
  $('.swiper-slider').each(function () {
    const $carousel   = $(this);
    const headerArea  = $carousel.closest('section').find('.pbmit-ele-header-area');

    // Basic dataset extraction
    const columns       = +$carousel.data('columns')  || 1;
    const loop          = !!$carousel.data('loop');
    const autoplayRaw   = $carousel.data('autoplay');
    const speed         = +$carousel.data('autoplayspeed') || 3000;
    const arrows        = !!$carousel.data('arrows');
    const arrowsClass   = $carousel.data('arrows-class');
    const dots          = !!$carousel.data('dots');
    const center        = !!$carousel.data('center');
    const effect        = $carousel.data('effect') || 'slide';
    const margin        = ($carousel.data('margin') !== undefined) ? +$carousel.data('margin') : 30;

    $carousel.addClass(`pbmit-element-viewtype-carousel-${swiperCount}`);

    /* Responsive column map */
    const resp = (() => {
      switch (columns) {
        case 1:  return [1, 1, 1, 1, 1];
        case 2:
        case 2.3: return [columns, 2, 2, 1, 1];
        case 3:
        case 3.5: return [columns, 2, 2, 1, 1];
        case 4:
        case 4.5: return [columns, 4, 3, 1, 1];
        case 5:  return [5, 4, 2, 1, 1];
        case 6:  return [6, 4, 3, 3, 1];
        default: return [3, 3, 1, 1, 1];
      }
    })();

    /* Autoplay config */
    const autoplay = autoplayRaw ? { delay: speed, disableOnInteraction: false } : false;

    /* Dots */
    let pagination = false;
    if (dots) {
      $carousel.append('<div class="swiper-pagination"></div>');
      pagination = { el: '.swiper-pagination', clickable: true };
    }

    /* Arrows */
    let navigation = false;
    if (arrows) {
      if (arrowsClass) {
        $(`.${arrowsClass}`)
          .append(`<div class="swiper-button-next swiper-button-next-${swiperCount}"></div>`)
          .append(`<div class="swiper-button-prev swiper-button-prev-${swiperCount}"></div>`);
      } else {
        $carousel.append('<div class="swiper-buttons"></div>');
        $carousel.find('.swiper-buttons')
          .append(`<div class="swiper-button-next swiper-button-next-${swiperCount}"></div>`)
          .append(`<div class="swiper-button-prev swiper-button-prev-${swiperCount}"></div>`);
      }
      navigation = {
        nextEl: `.swiper-button-next-${swiperCount}`,
        prevEl: `.swiper-button-prev-${swiperCount}`
      };
    }

    /* Initialize Swiper */
    const swiper = new Swiper(`.pbmit-element-viewtype-carousel-${swiperCount}`, {
      loop,
      effect,
      autoplay,
      speed: 900, // slide transition speed
      slidesPerView: columns,
      centeredSlides: center,
      spaceBetween: margin,
      pagination,
      navigation,
      breakpoints: {
        1199: { slidesPerView: resp[0] },
        991 : { slidesPerView: resp[1] },
        767 : { slidesPerView: resp[2] },
        575 : { slidesPerView: resp[3] },
        0   : { slidesPerView: resp[4] }
      }
    });

    /* Testimonial-specific circular counter */
    if ($carousel.hasClass('pbmit-element-testimonial-style-2')) {
      const totalSlides = $carousel.find('article:not(".swiper-slide-duplicate")').length;
      const calcPercent = Math.round((1 * 100) / totalSlides);

      headerArea.append(
        `<div class="pbmit-fld-contents">
          <div class="pbmit-circle-outer"
               data-digit="${calcPercent}"
               data-fill="var(--clr-accent)"
               data-emptyfill="#f6f6f6"
               data-thickness="2"
               data-size="100">
              <div class="pbmit-circle"><div class="pbmit-fid-inner"></div></div>
          </div>
        </div>`
      );
      pbmit_circle_progressbar(); // init (defined later)

      swiper.on('slideChange', () => {
        const current = swiper.realIndex + 1;
        const $circle = $carousel.closest('section').find('.pbmit-circle');
        updatecircle($circle, current, totalSlides);
      });
    }

    ++swiperCount;
  });

  function updatecircle($elm, current, total) {
    const percent = getpercentage(total, current, $elm);
    $elm.circleProgress('value', percent / 100);
  }

  function getpercentage(total, current /*, $elm */) {
    return Math.round((current * 100) / total);
  }

  /* ============================================================
     3) Circle Progress Bars  (brand defaults)
  ============================================================ */
  function pbmit_circle_progressbar() {
    $('.pbmit-circle-outer').each(function () {
      const $outer = $(this);
      const emptyFill = $outer.data('emptyfill') || 'rgba(0,0,0,0)';
      const thickness = +$outer.data('thickness') || 10;
      const digit     = +$outer.data('digit') || 0;
      const size      = +$outer.data('size') || 110;
      let fillVal     = $outer.data('fill') || 'var(--clr-accent)';

      /* gradient option */
      if ($outer.data('filltype') === 'gradient') {
        fillVal = {
          gradient: [$outer.data('gradient1'), $outer.data('gradient2')],
          gradientAngle: Math.PI / 4
        };
      }

      if ($.fn.circleProgress) {
        $outer.find('.pbmit-circle').circleProgress({
          value: 0,
          size,
          startAngle: -Math.PI / 2,
          thickness,
          emptyFill,
          fill: fillVal
        });
      }

      /* animate on view */
      new Waypoint({
        element: this,
        handler(direction) {
          if (direction === 'down' && !$outer.hasClass('completed')) {
            if ($.fn.circleProgress) {
              $outer.find('.pbmit-circle').circleProgress({ value: digit / 100 });
            }
            $outer.addClass('completed');
          }
        },
        offset: '85%'
      });
    });
  }
  pbmit_circle_progressbar();

  /* ============================================================
     4) Back-to-top with brand accent stroke
  ============================================================ */
  const backToTop = () => {
    const $wrap = $('.pbmit-progress-wrap');
    if (!$wrap.length) return;

    const path   = $wrap.find('path')[0];
    const length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.stroke = 'var(--clr-accent)';
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const update = () => {
      const scroll = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const progress = length - (scroll * length / height);
      path.style.strokeDashoffset = progress;
    };
    update();
    $(window).scroll(update);

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $wrap.addClass('active-progress');
      } else {
        $wrap.removeClass('active-progress');
      }
    });

    $wrap.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  };
  backToTop();

  /* ============================================================
     5) AOS (Animate On Scroll) global init (once)
  ============================================================ */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      offset: 120,
      duration: 700
    });
  }

  /* ============================================================
     6) Header Search Overlay
  ============================================================ */
  $('.pbmit-header-search-btn a').on('click', function () {
    $('.pbmit-search-overlay').addClass('st-show');
    $('body').addClass('st-prevent-scroll');
    return false;
  });
  $('.pbmit-search-close').on('click', function () {
    $('.pbmit-search-overlay').removeClass('st-show');
    $('body').removeClass('st-prevent-scroll');
    return false;
  });
  $('.pbmit-site-searchform').on('click', function (e) { e.stopPropagation(); });

  /* ============================================================
     7) Mobile menu toggle
  ============================================================ */
  $('.navbar-toggler,.closepanel').on('click', () => $('header').toggleClass('active'));

  /* ============================================================
     8) Tooltip bootstrap init
  ============================================================ */
  (() => {
    const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map(el => new bootstrap.Tooltip(el));
  })();

  /* ============================================================
     9) Masonry grids
  ============================================================ */
  $('.pbmit-element-viewtype-masonry').each(function () {
    const $grid = $('.pbmit-element-posts-wrapper', this).masonry({
      itemSelector: '.pbmit-blog-style-4, .pbmit-portfolio-style-2',
      columnWidth: '.pbmit-blog-style-4, .pbmit-portfolio-style-2',
      gutter: 0,
      percentPosition: true,
      stagger: 30,
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle : { transform: 'translateY(100px)', opacity: 0 },
      horizontalOrder: true
    });
    $(this).data('masonryGrid', $grid);
  });

  /* ============================================================
     10) Isotope Sortables
  ============================================================ */
  $('.pbmit-sortable-yes').each(function () {
    const $wrapper = $('.pbmit-element-posts-wrapper', this);
    const $links   = $('.pbmit-sortable-list a', this);

    $wrapper.isotope({ animationEngine: 'best-available' });

    $links.on('click', function (e) {
      e.preventDefault();
      const sort = $(this).data('sortby');
      const filter = sort === '*' ? '*' : `.${sort}`;
      $wrapper.isotope({ filter });
      $links.removeClass('pbmit-selected');
      $(this).addClass('pbmit-selected');
    });
  });

  /* ============================================================
     11) Accordion icon helpers
  ============================================================ */
  $('.accordion .accordion-item').on('click', function () {
    const $group = $(this).parent();
    $group.find('.accordion-item').removeClass('active');
    if (!$(this).find('.accordion-button').hasClass('collapsed')) {
      $(this).addClass('active');
    }
  });

  /* ============================================================
     12) Bootstrap tooltip refresh on AJAX load, etc.
  ============================================================ */
  $(document).ajaxComplete(() => {
    $('[data-bs-toggle="tooltip"]').tooltip('dispose').tooltip();
  });

  /* ============================================================
     13) Placeholder: contact form validation & AJAX mailer
  ============================================================ */
  if ($.isFunction($.fn.validate)) {
    $('#contact-form').validate();
  }
  $('#contact-form').on('submit', function () {
    if ($('#contact-form .doing-via-ajax').length === 0) {
      $(this).prepend('<input class="doing-via-ajax" type="hidden" name="doing-via-ajax" value="yes" />');
    }
    if (!$('#contact-form').valid()) return false;

    $('.contact-form .message-status').empty();
    $('.form-btn-loader').removeClass('d-none');
    $('.contact-form button.pbmit-btn span').hide();
    $('.contact-form button.pbmit-btn').prop('disabled', true);

    $.post('send.php', $(this).serialize(), (resp) => {
      $('.form-btn-loader').addClass('d-none');
      $('.contact-form button.pbmit-btn span').show();
      $('.contact-form button.pbmit-btn').prop('disabled', false);
      $('.contact-form .message-status').html(resp);
    });

    return false;
  });

  /* ============================================================
     14) End – console welcome
  ============================================================ */
  // eslint-disable-next-line no-console
  console.info('%c Al Sharq Flexible Packaging scripts loaded. ', 'background: #1F2674; color: #fff; padding: 2px 6px;');
})(jQuery);
