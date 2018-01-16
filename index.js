let state = {
	requested: -1,
	raised: -1,
}

function getDataFromApi() {
	let requestData = {
		status: 'fundraising',
		sort_by: 'amount_remaining',
		per_page: 50
	}
	$.ajax({
		url: 'https://api.kivaws.org/v1/loans/search.json',
		data: requestData,
		success: function(result) {
			let loans = result.loans;
			for (let i = 0; i < loans.length; i++) {
				let 
			}
			console.log(result.loans);
		}
	});
}

$(document).ready(function() {
	$('.data').click(function(event) {
		$(this).html('Check the console!');
		getDataFromApi();
	});
});
