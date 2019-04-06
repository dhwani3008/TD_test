$(document).ready(function () {
	$('.mobileNav').append('nav');
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('.subtitle').find('a').before('<br/>');

		} else {
			$('.subtitle').find('br').remove();
		}
	});

	$(window).load(function () {
		if ($(window).width() < 768) {
			$('.subtitle').find('a').before('<br/>');
			$('nav').addClass('topNav');
		} else {
			$('.subtitle').find('br').remove();
		}
	});
	$.validate({
		lang: 'en'
	});

	$(document).click(function (event) {
		if (!$(event.target).closest('.drpBtn').length && !$(event.target).closest('.drp_list').length) {
			$('.drp_list').slideUp();
			$('.drpBtn').removeClass('curr');
			$('.drpBtn').find('i.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		}
		if (!$(event.target).closest('.sinPop').length && !$(event.target).closest('.sinDescription').length) {
			$('.sinDescription').hide();
		}
		if (!$(event.target).closest('.emailPop').length && !$(event.target).closest('.emailDescription').length) {
			$('.emailDescription').hide();
		}
	});
	$(window).scroll(function () {

		if ($(window).scrollTop() > 180) {
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
	});
	$(document).on("click", '.drpBtn a', function (e) {
		e.preventDefault();
	});

	$(document).on("click", '.drpBtn', function (e) {
		$(this).siblings('.drpBtn').find('i.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		$(this).siblings('.drpBtn').find('.drp_list').slideUp();
		$(this).siblings('.drpBtn').removeClass('curr');
		$(this).find('.drp_list').slideToggle();
		if ($(this).find('i.fas').hasClass('fa-chevron-up')) {
			$(this).find('i.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		} else {
			$(this).find('i.fas').addClass('fa-chevron-up').removeClass('fa-chevron-down');
		}
		$(this).toggleClass('curr');
	});
	$("#dob").datepicker();
	$("#dob").datepicker("option", "showAnim", 'slideDown');


	$('.sinPop').click(function () {
		$('.sinDescription').toggle();
	});
	$('.emailPop').click(function () {
		$('.emailDescription').toggle();
	});

});
