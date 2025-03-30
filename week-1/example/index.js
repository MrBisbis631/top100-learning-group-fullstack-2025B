document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display success message
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = `
      <p>Thank you, ${name}! Your message has been sent.</p>
  `;

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});