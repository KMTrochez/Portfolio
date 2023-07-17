// index.js
// Define an array of strings to be displayed
const strings = [
    "full stack web developer",
    "software engineer",
    "front-end developer",
    "back-end developer",
    "program analyst",
    "data analyst",
    "financial analyst",
    "QA tester",
    "UI/UX designer",
  ];

  // Function to change the text inside the <span> element
  function changeText() {
    const changingText = document.getElementById("changingText");
    let index = 0;
    setInterval(() => {
      changingText.textContent = strings[index];
      index = (index + 1) % strings.length;
    }, 1500); // Change the text every 1.5 seconds (adjust as needed)
  }
  
  // Call the function to start changing the text
  changeText();
  
