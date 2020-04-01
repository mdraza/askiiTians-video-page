$(document).ready(function () {
  $(".view-more1").click(function () {
    $(".upcomming-video-list").toggle();
    $("i", this).toggleClass("fa fa-plus fa fa-minus");
  });
  
});


$('#show-more-content').hide();
$('#show-less').hide();

$('#show-more').click(function () {
  $('#show-more-content').show();
  $('#show-less').show();
  $(this).hide();
});

$('#show-less').click(function () {
  $('#show-more-content').hide();
  $('#show-more').show();
  $(this).hide();
});

$('#show-more-content2').hide();
$('#show-less2').hide();

$('#show-more').click(function () {
  $('#show-more-content2').show();
  $('#show-less2').show();
  $(this).hide();
});

$('#show-less2').click(function () {
  $('#show-more-content2').hide();
  $('#show-more2').show();
  $(this).hide();
});