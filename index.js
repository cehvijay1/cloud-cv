const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// Function to change the job title with typewriter animation
function changeJobTitle() {
  const jobTitleElement = document.getElementById('job-title');
  const jobTitles = ['Cloud Engineer','DevOps Engineer', 'Software Developer'];
  let currentJobTitleIndex = 0;

  // Function to initiate typing and erasing animations
  function typeAndErase() {
    setTimeout(typeText, 1000); // Delay before typing starts
  }

  // Function to type out the text
  function typeText() {
    const currentJobTitle = jobTitles[currentJobTitleIndex];
    const currentText = currentJobTitle.slice(0, jobTitleElement.textContent.length + 1);

    jobTitleElement.textContent = currentText;

    if (currentText === currentJobTitle) {
      // If the full job title is typed out, start erasing
      setTimeout(eraseText, 2000); // Delay before erasing starts
      } else {
       // Continue typing the current text
        setTimeout(typeText, 100);
      }
    }

    // Function to erase the text
    function eraseText() {
      const currentText = jobTitleElement.textContent;

      if (currentText.length > 0) {
        jobTitleElement.textContent = currentText.slice(0, currentText.length - 1);
        setTimeout(eraseText, 50);
      } else {
       // After erasing, switch to the next job title
        currentJobTitleIndex++;
        if (currentJobTitleIndex >= jobTitles.length) {
          currentJobTitleIndex = 0; // Loop back to the first job title
        }
        setTimeout(typeAndErase, 1000); // Delay before typing the next job title
      }
    }

    // Start the typewriter animation
    typeAndErase();
}

setTimeout(changeJobTitle, 2000);

