
function changeMode(size, weight, transform, background, color) {
  return function () {
      const Body = document.querySelector('body');
      Body.style.fontSize = `${size}px`;
      Body.style.fontWeight = `${weight}`;
      Body.style.textTransform = `${transform}`;
      Body.style.backgroundColor = `${background}`;
      Body.style.color = `${color}`;
  }
};

function main() {
  const spooky = changeMode("9", "bold", "uppercase", "pink", "green");
  const darkMode = changeMode("12", "bold", "capitalize", "black", "white");
  const screamMode = changeMode("12", "normal", "lowercase", "white", "black");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);


  const spookyBtn = document.createElement("button");
  spookyBtn.textContent = "Spooky";
  document.body.appendChild(spookyBtn);
  
  const darkModeBtn = document.createElement("button");
  darkModeBtn.textContent = "Dark Mode";
  document.body.appendChild(darkModeBtn);

  const screamModeBtn = document.createElement("button");
  screamModeBtn.textContent = "Scream Mode";
  document.body.appendChild(screamModeBtn);

  spookyBtn.onclick = spooky;

  darkModeBtn.onclick = darkMode;

  screamModeBtn.onclick = screamMode;
};

main();
