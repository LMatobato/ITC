document.getElementById("btncompute").addEventListener("click", function() {
    let taxableIncome, bracketIndex, taxAmount;
    const baseTax = [0, 0, 30000, 130000, 490000, 2410000];
    const taxRate = [0, 0.20, 0.25, 0.30, 0.32, 0.35];
    const bracketLimit = [0, 250000, 400000, 800000, 2000000, 8000000];
    
    taxableIncome = parseFloat(document.getElementById("numtax").value);
    
    // Reset label if it was previously showing an error
    document.getElementById("numincomelabel").textContent = "Income Tax";
    
    // Determine tax bracket
    if (taxableIncome > 0 && taxableIncome < 250000) {
        bracketIndex = 0;
    } else if (taxableIncome >= 250000 && taxableIncome <= 400000) {
        bracketIndex = 1;
    } else if (taxableIncome > 400000 && taxableIncome <= 800000) {
        bracketIndex = 2;
    } else if (taxableIncome > 800000 && taxableIncome <= 2000000) {
        bracketIndex = 3;
    } else if (taxableIncome > 2000000 && taxableIncome <= 8000000) {
        bracketIndex = 4;
    } else if (taxableIncome > 8000000) {
        bracketIndex = 5;
    } else {
        bracketIndex = -1; // Invalid input
    }

    if (bracketIndex >= 0) {
        taxAmount = baseTax[bracketIndex] + (taxRate[bracketIndex] * (taxableIncome - bracketLimit[bracketIndex]));
        document.getElementById("numincome").value = taxAmount.toFixed(2);
    } else {
        document.getElementById("numincome").value = "0";
        document.getElementById("numincomelabel").textContent = "Provided value is incorrect!";
    }
});