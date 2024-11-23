function calculateAll() {
  const n = parseInt(document.getElementById("nlimit").value);
  if (n <= 0) {
      alert("Please enter a positive number");
      return;
  }

  // Calculate factorial using while loop
  let factorial = 1;
  let i = 1;
  while (i <= n) {
      factorial *= i;
      i++;
  }
  document.getElementById("factorial").innerHTML = 
      `Factorial of ${n} is: ${factorial}`;

  // Calculate sum using do-while loop
  let sum = 0;
  i = 1;
  do {
      sum += i;
      i++;
  } while (i <= n);
  document.getElementById("sum").innerHTML = 
      `Sum of first ${n} natural numbers is: ${sum}`;

  // Calculate average using for loop
  let total = 0;
  for (i = 1; i <= n; i++) {
      total += i;
  }
  const average = total / n;
  document.getElementById("average").innerHTML = 
      `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
}