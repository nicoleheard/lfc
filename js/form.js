$(function() {
	$('form input[type=text]').add('form input[type=email]').add('form textarea')

	.focus(function() {
		var $this = $(this);

		if (!$this.data('default')) {
			$this.data('default', $this.val());
		}

		if($this.val() == $this.data('default')) {
			$this.val('')
			.css('color', '#4e424c');
		}
	})

	.blur(function() {
		var $this = $(this);

		 if($this.val() == '') {
			$this.val($this.data('default'))
			.css('color', '#666');
		}
	})

	.css('color', '#666')

});

jQuery(window).load(function() {

	$('#contact-form').submit(function(event) {
		event.preventDefault();

		var valid = "",
		name = $('#contact-form #name').val(),
		email = $('#contact-form #email').val(),
		msg = $('#contact-form #message').val();

		if(name == "Name" || name.length < 2) {
			valid += '<p class="red">*Your name is required</p>';
		}

		if(!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4})$/)) {
			valid += '<p class="red">*Your email is required</p>';
		}

		if(msg == 'Message' || message.length <= 5) {
			valid += '<p class="red">*A message is required</p>';
		}

		if(valid != '') {
			$('#form-response').html(valid).fadeIn('fast');
		} else {
			$('#form-response').html('').fadeIn('fast');
			var formData = $('form').serialize();
			console.log(formData);
			submitForm(formData);
		}
	});
});

function submitForm(formData) {

	$.ajax({

		type: 'POST',
		url: 'php/mail.php',
		data: formData,
		dataType: 'json',
		timeout: 7000,
		success: function(data) {
			console.log(data.msg);
			$('#form-response').html(data.msg).fadeIn('fast');
		},
		error: function(XMLHttpRequest, testStatus, errorThrown) {
			$('#form-response').html('<p class="red">There was an ' + errorThrown + ' error.').fadeIn('fast');
		},
		complete: function(XMLHttpRequest, status) {
			$('form')[0].reset();
		}

	});
};
