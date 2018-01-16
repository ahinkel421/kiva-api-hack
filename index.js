let state = {
	requested: 0,
	raised: 0
}

// function getDataFromApi(state) {
// 	let requestData = {
// 		format: 'json',
// 	}
// }
$(document).ready(function() {
	$('.data').click(function(event) {
		console.log('working');
		$.ajax({
			url: 'https://api.kivaws.org/v1/loans/newest.json',
			success: function(result) {

				console.log(result.loans);
			}
		});
	});
});
