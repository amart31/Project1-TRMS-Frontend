var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; // January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd
}

if (mm < 10) {
	mm = '0' + mm
}

today = mm + '-' + dd + '-' + yyyy;

document.getElementById("reimbursementcost")
		.addEventListener("change", alerter);
document.getElementById("reimbursementtype")
		.addEventListener("change", alerter);
document.getElementById("currentDate").value = today;

function alerter() {
	document.getElementById("reimbursementcost").value = parseFloat(
			document.getElementById("reimbursementcost").value).toFixed(2);
	var amount = document.getElementById("reimbursementcost").value;

	var event = document.getElementById("reimbursementtype").value;

	switch (event) {
	case "200":
		document.getElementById("reimbursementamount").value = parseFloat(
				(amount * .80)).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(
				(amount * .80)).toFixed(2);
		;
		break;
	case "201":
		document.getElementById("reimbursementamount").value = parseFloat(
				(amount * .60)).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(
				(amount * .60)).toFixed(2);
		break;
	case "202":
		document.getElementById("reimbursementamount").value = parseFloat(
				(amount * .75)).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(
				(amount * .75)).toFixed(2);
		break;
	case "203":
		document.getElementById("reimbursementamount").value = parseFloat(
				amount).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(amount)
				.toFixed(2);
		break;
	case "204":
		document.getElementById("reimbursementamount").value = parseFloat(
				(amount * .90)).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(
				(amount * .90)).toFixed(2);
		break;
	case "205":
		document.getElementById("reimbursementamount").value = parseFloat(
				(amount * .30)).toFixed(2);
		document.getElementById("estReimbAmt").value = parseFloat(
				(amount * .30)).toFixed(2);
		break;
	default:
		console.log("Error caught calculating reimbursement amount in form.js");
	}
}