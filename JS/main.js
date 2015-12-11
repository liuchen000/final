// var pattern = ['R', 'Y'];
// var num = 0;

// $('.panel').on('click', function() {

// 	// Does the panel you clicked match the
// 	// current item in the sequence

// 	var colour = $(this).attr('data-colour');

// 	if ( colour == pattern[num] ) {
// 		console.log("CORRECT!");
		
// 		//Short form of: num = num + 1;
// 		num++;

// 		if (num > pattern.length-1 ) {
// 			console.log("YOU WIN!!!!1");
// 		}
// 	}
// 	else {
// 		console.log("Wrong :(");
// 	}

// });

$(document).ready(function() {
	
	// just a delay
	var dodelay;

	// hold 2 cards that are open
	var cards = [];

	// remove cards that are incorrect
	var hidecard = function() {
		// Flip cards
		$.each(cards, function(i, $card) {
			$card.find('.sq').show();
		});
		clearInterval(dodelay);
		cards = [];
		$('.sq').on('click', doclick)
	};


	var doclick = function(){

		// find the parent
		var c = $(this).hide().parent();
		
		// Add to the array so we can check against the next one
		cards.push(c);

		if (cards.length == 2) {

			$('.sq').off('click')

			// If there is a match
			if (cards[0].attr('data-card') == cards[1].attr('data-card')) {
				console.log("MATCH!!!!");
				cards = [];
				$('.sq').on('click', doclick)
			}
			// If there is NO match
			else {
				dodelay = setInterval(hidecard, 1000);
			}
			
		}
	}

	$('.sq').click(doclick);
	




});




