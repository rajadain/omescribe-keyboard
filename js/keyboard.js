$(function () {
	var $write = $('#write'),
		shift = false,
		capslock = false;

	$('#osk-ul li').click(function () {
		var $this = $(this),
			character = $this.html();

		// Shift
		if ($this.hasClass('shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			shift = !shift;
			capslock = false;
			return false;
		}

		// Capslock
		if ($this.hasClass('caps')) {
			$('.letter').toggleClass('uppercase');
			capslock = !capslock;
			return false;
		}

		// Backspace
		if ($this.hasClass('bksp')) {
			var html = $write.html();
			$write.html(html.substr(0, html.length - 1));
			return false;
		}

		// Special Characters
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = '\t';
		if ($this.hasClass('enter')) character = '\n';

		if ($this.hasClass('uppercase')) character = character.toUpperCase();

		$write.html($write.html() + character);
	});
});