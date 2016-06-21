$(document).ready(function() {
	function heightDetect() {
		$("#main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(window).load(function() {
		$(".loader").fadeOut();
		$(".preloader").fadeOut("slow");

		$(".text_descr h1").addClass("animated fadeInUp");
		$(".text_descr p").addClass("animated zoomIn");
	});
	$(".toggle_mnu").click(function() {
  	$(".sandwich").toggleClass("active");
});
	$(".toggle_mnu").click(function () {
		if ($(".toggle_mnu .sandwich").hasClass("active")) {
			$(".main_mnu").fadeIn(600);
			$(".main_mnu li a").addClass("animated fadeInUp");

		}

		else {
			$(".main_mnu").fadeOut(600);
			$(".main_mnu li a").removeClass("animated fadeInUp");
		}
	});

	$(".main_mnu a").click(function() {
		$(".main_mnu").fadeOut(600);
		$(".sandwich").removeClass("active");
	}).append("<span>");

	$(".main_mnu a").mPageScroll2id({
		highlightClass: "active_nav"
	});

	 $(function () { $("input,select,textarea").jqBootstrapValidation(); } );
})