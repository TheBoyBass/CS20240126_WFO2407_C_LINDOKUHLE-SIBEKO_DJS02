const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  

  //Input validation
  if (!dividend || !divider) {
    result.innerText = "Error 224: Division not performed. Both values are required in inputs. Try again";
    return;
  }

    // Check if inputs are numbers
    const numDividend = Number(dividend);
    const numDivider = Number(divider);

  //Zero Dividion Error handling
  if(numDivider === 0){
      result.innerText = "Error 457:Division not performed---Division by zero is not allowed.Try again";
      console.trace()
      return;
  }

  //Check if any of the inputs are not numbers
  if (isNaN(numDividend) || isNaN(numDivider)) {
    // Replace entire screen with critical error message
    document.body.innerHTML = "<h1>Error 876: Something critical went wrong. Please reload the page</h1>";
    console.error("Invalid input: One or both inputs are not valid numbers.");
    console.trace();
    return;
  }
    
  result.innerText = Math.floor(numDividend / numDivider); //Added math.floor to make sure the result is always rounded of to nearest interger
});