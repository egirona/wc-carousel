$(function() {
  var currentIndex = 0,
      itemCount    = $('.carousel-placeholder > li').length;

  $('.carousel-placeholder > li:eq(' + currentIndex + ')').addClass('active');

  $('.carousel-nav').on('click', function() {
    var $active  = $('.carousel-placeholder > li.active'),
        isNext   = $(this).hasClass('next');
    currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

    /* go back to the last item if we hit -1 */
    if (currentIndex === -1) {
      currentIndex = itemCount - 1;
    }

    var $next = $('.carousel-placeholder > li:eq(' + currentIndex + ')');
    $active.addClass(isNext ? 'next-out' : 'prev-out');
    $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
    setTimeout(function() {
      $active.removeClass('active next-out prev-out');
      $next.removeClass('next-in prev-in');
    }, 500);
    return false;
  });
});