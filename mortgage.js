document.getElementById("calculateBtn").addEventListener("click", function() {

    let principal = Number(document.getElementById("loanAmount").value);

    let annualRate = Number(document.getElementById("interestRate").value);

    let years = Number(document.getElementById("loanTerm").value);

    let monthlyRate = annualRate / 100 / 12;

    let payments = years * 12;

    let monthlyPayment;

    if (principal <= 0 || annualRate < 0 || years <= 0 ||
        !Number.isFinite(principal) ||
        !Number.isFinite(annualRate) ||
        !Number.isFinite(years) ||
        document.getElementById("loanAmount").value === "" ||
        document.getElementById("interestRate").value === "" ||
        document.getElementById("loanTerm").value === "") {

        document.getElementById("result").textContent =
            "Please enter valid values.";

        return;
    }

    if (monthlyRate === 0) {
        monthlyPayment = principal / payments;
    } else {
        monthlyPayment = principal *
            (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
            (Math.pow(1 + monthlyRate, payments) - 1);
    }

    document.getElementById("result").textContent =
        "$" + monthlyPayment.toFixed(2);

});// JavaScript Document