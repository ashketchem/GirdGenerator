const girdSizeInput = documemt.querySelector("#gird-size");
const generateGridButton = document.querySelector("#generate-grid");
const girdContainer = document.querySelector(".grid-container");
generateGridButton.addEventListener("click", () => {
  const girdSize = parseInt(girdSizeInput.value);
  const numGirdItems = girdSize * girdSize;
  if ( numGirdItems < 10 || numGirdItems > 100 ) { return alret("invalid input, enter a number between 10 to 100.")  } else {
  girdContainer.innerHTML = '';
  for (let i = 0; i < numGirdItems; i++) {
    const girdItem = document.creatElement('div');
    girdItem.classList.add("grid-item");} }
girdContainer.appendChild(girdItem);
  const girdItemWidth = `calc(100 / ${girdSize})`;
    const girdItemHeight = `calc(100% / ${girdSize})`;
    girdContainer.style.setproperty = ('--gird-item-width', girdItemWidth);
    girdContainer.style.setproperty = ('--gird-item-height', girdItemHeight);
});
generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
girdItem.addEventListener("click", () => {
  const girdItem = document.querySelector(".grid-item");
  const color = genrateRandomColor();
  .girdi.style.backgroundColor = color;
})