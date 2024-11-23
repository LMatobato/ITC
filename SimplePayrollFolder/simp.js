// Array to store employee data
let employees = [];

function addEmployee() {
    // Get input values
    const empName = document.getElementById('empName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    // Validate inputs
    if (!empName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
        alert('Please fill in all fields with valid values');
        return;
    }

    // Calculate pay
    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    // Add to employees array
    employees.push({
        name: empName,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deduction: deduction,
        netPay: netPay
    });

    // Update table
    updatePayrollTable();

    // Clear form
    document.getElementById('employeeForm').reset();
}

function deleteEmployee() {
    const lineNo = parseInt(document.getElementById('deleteLineNo').value);
    
    // Validate line number
    if (isNaN(lineNo) || lineNo < 1 || lineNo > employees.length) {
        alert('Please enter a valid line number');
        return;
    }

    // Remove employee from array (adjusting for 0-based index)
    employees.splice(lineNo - 1, 1);

    // Update table
    updatePayrollTable();

    // Clear delete input
    document.getElementById('deleteLineNo').value = '';
}

function updatePayrollTable() {
    const tbody = document.querySelector('#payrollTable tbody');
    tbody.innerHTML = '';

    employees.forEach((emp, index) => {
        const row = tbody.insertRow();
        
        // Add cells with data
        row.insertCell(0).textContent = index + 1;  // Line number
        row.insertCell(1).textContent = emp.name;
        row.insertCell(2).textContent = emp.daysWorked;
        row.insertCell(3).textContent = emp.dailyRate.toFixed(2);
        row.insertCell(4).textContent = emp.grossPay.toFixed(2);
        row.insertCell(5).textContent = emp.deduction.toFixed(2);
        row.insertCell(6).textContent = emp.netPay.toFixed(2);
    });
}