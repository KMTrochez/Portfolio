// index.js
// Define an array of strings to be displayed
const strings = [
    "full stack web developer",
    "software engineer",
    "front-end developer",
    "back-end developer",
    "UI/UX designer",
  ];
  alert("index.js is connected and executed!");
  console.log("Changetext() function is being executed!");
  
  // Function to change the text inside the <span> element
  function changeText() {
    console.log("Changetext() function is being executed!");
    alert("index.js is connected and executed!");
    const changingText = document.getElementById("changingText");
    let index = 0;
    setInterval(() => {
      changingText.textContent = strings[index];
      index = (index + 1) % strings.length;
    }, 2000); // Change the text every 2 seconds (adjust as needed)
  }
  
  // Call the function to start changing the text
  changeText();
  