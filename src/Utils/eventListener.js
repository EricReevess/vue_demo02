export default function ($) {
  $(".nav li a.router-link-active").parent().addClass("active");

  $(".nav li a").on("click", function () {
    $(this).parent().siblings('li').removeClass("active");
    $(this).parent().addClass("active");
  });
}
