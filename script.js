const girdSizeInput = document.querySelector("#gird-size");
const generateGridButton = document.querySelector("#generate-grid");
const girdContainer = document.querySelector(".grid-container");

generateGridButton.addEventListener("click", () => {
  const girdSize = parseInt(girdSizeInput.value);
  
  const numGirdItems = girdSize * girdSize;
  if (girdSize < 4 || girdSize > 100) {
    return alert("invalid input, enter a number between 4 to 100.");
  } else {
    girdContainer.innerHTML = '';
    for (let i = 0; i < numGirdItems; i++) {
      const girdItem = document.createElement('div');
      girdItem.classList.add("grid-item");
      girdContainer.appendChild(girdItem);
      girdItem.addEventListener("click", () => {
        
        const color = generateRandomColor();
        girdItem.style.backgroundColor = color;
      });
    }
    const girdItemWidth = `calc(100 / ${girdSize})`;
    const girdItemHeight = `calc(100 / ${girdSize})`;
    girdContainer.style.setProperty('--gird-item-width', girdItemWidth);
    girdContainer.style.setProperty('--gird-item-height', girdItemHeight);
  }
});
generateRandomColor = () => {
  let r,b,g;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}