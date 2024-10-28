const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  

  //Input validation
  if (!dividend || !divider) {
    result.innerText = "Error: Division not performed. Both values are required in inputs. Try again";
    return;
  }

  //Zero Dividion Error handling
  if(divider === 0){
      result.innerText = "Error: Division by zero is not allowed. Please enter a non-zero value for the divisor.";
      console.trace()
      return;
  }
    
  result.innerText = Math.floor(dividend / divider); //Added math.floor to make sure the result is always rounded of to nearest interger
});