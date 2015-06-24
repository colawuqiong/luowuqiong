/**
 * Created by luowuqiong on 11/6/15.
 */

$(document).ready(function () {
  $("body").prepend( "<div id='back_to_top'><div id='back_to_top_inner'><div class='icon-arrow-up'></div><span>To Top</span></div></div>" );

  $(window).scroll(function () {
    var distance_to_top = $(window).scrollTop();
    if (distance_to_top > 1000) {
      $("#back_to_top").show();
    } else {
      $("#back_to_top").hide();
    }
  });
  $("#back_to_top").click(function () {
      $("html, body").animate({ scrollTop: "0px" }, 300);
  });
});