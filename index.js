let state = {
	requested: -1,
	raised: -1,
}

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
				let currentLoan = loans[i];
				let requestedLoanAmount = currentLoan.loan_amount;
				let amountFunded = currentLoan.funded_amount;
				let amountRemaining = requestedLoanAmount-amountFunded;
				if (amountRemaining <= 100) {
					console.log(currentLoan);
				}
			}
		}
	});
}

$(document).ready(function() {
	$('.data').click(function(event) {
		$(this).html('Check the console!');
		getDataFromApi();
	});
});
