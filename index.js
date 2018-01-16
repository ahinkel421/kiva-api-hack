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
		$(this).html('Check the console!');
		$.ajax({
			url: 'https://api.kivaws.org/v1/loans/search.json',
			data: {
				status: 'fundraising',
				sort_by: 'random'
			},
			success: function(result) {
				console.log(result.loans);
			}
		});
	});
});
