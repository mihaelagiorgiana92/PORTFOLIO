window.onload = function() {
    // JavaScript to display "Welcome to my page" letter by letter
    const welcomeText = "Welcome to my page";
    const animateName = document.querySelector('.animate-name');
    let index = 0;
  
    function typeLetter() {
      if (index < welcomeText.length) {
        animateName.textContent += welcomeText.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Adjust speed by changing the timeout value
      }
    }
  
    typeLetter(); // Start typing the text when the page loads
  
    // JavaScript to update the current date and time in real-time
    function updateDateTime() {
      const dateTimeElement = document.getElementById('date-time');
      const now = new Date();
      const dateString = now.toLocaleString(); // Formats to local date and time
      dateTimeElement.textContent = dateString;
    }
  
    setInterval(updateDateTime, 1000); // Update time every second
  
    // JavaScript to show a thank you message on the page when the form is submitted
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission
      
      // Show thank you message
      const thankYouMessage = document.getElementById('thank-you-message');
      thankYouMessage.style.display = "block"; // Make the message visible
      thankYouMessage.textContent = "Thank you for submitting the form!"; // Set the message text
  
      form.reset(); // Optionally reset the form after submission
    });
  };
  