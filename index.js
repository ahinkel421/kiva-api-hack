let state = {
	requested: -1,
	funded: -1,
	remaining: -1,
	name: ''
};

$(document).ready(function() {

	function getDataFromApi(state) {
		let requestData = {
			format: 'json',
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
					let currentLoan = loans[i],
					requestedLoanAmount = currentLoan.loan_amount,
					amountFunded = currentLoan.funded_amount,
					amountRemaining = requestedLoanAmount-amountFunded;
					if (amountRemaining <= 100) {
						state.requested = requestedLoanAmount;
						state.funded = amountFunded;
						state.remaining = amountRemaining;
						state.name = currentLoan.name;
					}
					console.log(`${state.name} only has $${state.remaining} left to go!`);
				}
			}
		});
	}

	$('.data').click(function(event) {
		$(this).html('Check the console!');
		getDataFromApi(state);
	});
});
