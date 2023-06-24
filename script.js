//your JS code here. If required.
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from submitting in the default way

  // Get the input values
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');
  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  // Check if inputs are empty
  if (!age || !name) {
    alert('Please enter both age and name.');
    return;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  promise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });

  // Reset the form
  ageInput.value = '';
  nameInput.value = '';
}

// Add event listener to the form's submit button
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
