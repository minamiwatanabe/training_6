$(function () {
  $('.readmore_toggle').on('click', function () {
    const $grid = $('.profile_grid');
    $grid.toggleClass('open');

    const isOpen = $grid.hasClass('open');
    $(this).text(isOpen ? 'Close' : 'Read more');
  });
});

