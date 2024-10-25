function Candy(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
}

const trickOrTreatBag = [
    new Candy("Snicker", Images/Snicker.jpg),
    new Candy("Reese Cups",Images/Reesecups.jpg ),
    new Candy("Cadburry Chocalate", Images/Cadburry.jpg),
    new Candy("M&M",Images/MMs.jpg)
    ];

function getRandomCandy() {
    const randomIndex = Math.floor(Math.random() * trickOrTreatBag.length);
    return trickOrTreatBag[randomIndex];
}

function displayCandy() {
    const chosenCandy = getRandomCandy();
    const candyDisplay = document.getElementById("candyDisplay");

candyDisplay.innerHTML = `
    <h2>${chosenCandy.name}</h2>
    <img src="${chosenCandy.imageUrl}" alt="${chosenCandy.name}" width="200">`;
}
document.getElementById("trickOrTreatButton").addEventListener("click", displayCandy);