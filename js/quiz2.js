// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});
})(jQuery);

$(document).ready(function() {
	var items = $("#orderedItems li");
	var num = document.createElement("li");
	$(num).css("color", "Green");
	items.each(function(index) {
		this.style.color = "Green";
		$(this).html('I CHANGED ALL OF THE THESE!!!');
	});

	$("#accordion").click(function() {
		if ($("#mainSection").is(':visible')) {
			$("#mainSection").hide(800);
		} else {
			$("#mainSection").show(800);
		}
	});

	$("#exit").click(function() {
		$("body").fadeOut("slow", function() {
			var goodbye = document.createElement("h1");
			goodbye.innerHTML = 'Goodbye! Hopefully I ace this quiz.';
			$(goodbye).css("color", "Blue");
			$(goodbye).css("font-size", "3em");
			$("html").append(goodbye);
		});
	});

	var interval = null;
	$("h1")
	.on("mouseover", function() {
		interval = setInterval(function() {
			var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$("body").css("background-color", color);
		}, 1000);
	})
	.on("mouseout", function() {
		clearInterval(interval);
		$("body").css("background-color", "White");
	});
});
