$(document).ready(function () {

	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('.subtitle').find('a').before('<br/>');

		} else {
			$('.subtitle').find('br').remove();
		}
		var api = $("#mobmenu").data("mmenu");
		api.close();
	});

	$(window).load(function () {
		if ($(window).width() < 768) {
			$('.subtitle').find('a').before('<br/>');
			$('nav').addClass('topNav');
		} else {
			$('.subtitle').find('br').remove();
		}
	});
	$('#mobmenu').mmenu();
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

	/*--------- back to top ---------------*/
	$(window).scroll(function () {

		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			$("#backtoTop").fadeIn();
		} else {
			$("#backtoTop").fadeOut();
		}
	});
	$('#backtoTop').click(function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 300);
	});

	/* -------------- dropdown list - Nav ----------------------- */
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

	/* ----------- date picker ------------------*/
	$("#dob").datepicker();
	$("#dob").datepicker("option", "showAnim", 'slideDown');

	/* ------- Tooltip ---------------------*/
	$('.sinPop').click(function () {
		$('.sinDescription').toggle();
	});
	$('.emailPop').click(function () {
		$('.emailDescription').toggle();
	});

	/*--------- form ---------------*/

	$(".fieldWrapper input").blur(function (e) {
		if ($(this).val() == '' && $(this).attr('id') != 'middleinitial') {
			$(this).siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else if ($(this).val() != '' && $(this).attr('id') != 'middleinitial') {
			$(this).siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});
		}
		$("select").change(function () {
			var selectedTitle = $(this).children("option:selected").val();
			if (selectedTitle == '') {
				$(this).siblings('.requiredMsg').css({
					'visibility': 'visible'
				});
			} else {
				$(this).siblings('.requiredMsg').css({
					'visibility': 'hidden'
				});
			}
		});
	});
	$("#sin").ForceNumericOnly();
});

function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test($email);
}

function validateForm() {

	if ($('select').children("option:selected").val() != '' && $('#firstname').val() != '' && $('#lastname').val() != '' && $('#email-address').val() != '' && $('#dob').val() != '' && $('#sin').val() != '') {
		return true;
	} else {

		if ($('select').children("option:selected").val() == '') {
			$('select').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			$('select').siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});

		}

		if ($('#firstname').val() == '') {
			$('#firstname').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			$('#firstname').siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});
		}

		if ($('#lastname').val() == '') {
			$('#lastname').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			$('#lastname').siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});
		}

		if ($('#email-address').val() == '') {
			$('#email-address').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			if (!validateEmail($('#email-address').val())) {
				$('#email-address').siblings('.requiredMsg').css({
					'visibility': 'visible'
				});
			} else {
				$('#email-address').siblings('.requiredMsg').css({
					'visibility': 'hidden'
				});

			}
		}

		if ($('#dob').val() == '') {
			$('#dob').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			$('#dob').siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});
		}

		if ($('#sin').val() == '') {
			$('#sin').siblings('.requiredMsg').css({
				'visibility': 'visible'
			});
		} else {
			$('#sin').siblings('.requiredMsg').css({
				'visibility': 'hidden'
			});
		}
		return false;
	}


}

jQuery.fn.ForceNumericOnly =
	function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.charCode || e.keyCode || 0;
				// allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
				// home, end, period, and numpad decimal
				return (
					key == 8 ||
					key == 9 ||
					key == 13 ||
					key == 46 ||
					key == 110 ||
					key == 190 ||
					(key >= 35 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			});
		});
	};
