const planetInfo = document.getElementById("planetinformation");
const name = document.getElementById("name");
const weight = document.getElementById("weight");
const area = document.getElementById("area");
const volume = document.getElementById("volume");
const facts = document.getElementById("facts");
const sunButton = document.getElementById("sunButton");
const mercuryButton = document.getElementById("mercuryButton");
const venusButton = document.getElementById("venusButton");
const earthButton = document.getElementById("earthButton");
const marsButton = document.getElementById("marsButton");
const jupiterButton = document.getElementById("jupiterButton");
const saturnButton = document.getElementById("saturnButton");
const uranusButton = document.getElementById("uranusButton");
const neptuneButton = document.getElementById("neptuneButton");
const closeButton = document.getElementById('closeButton');
const planetImage = document.getElementById('planetImage');

function sunInfo () {
    name.textContent = "Sun";
    planetImage.src = "sun.png"
    weight.textContent = "Weight = 1.989 x 10^30 kilograms";
    area.textContent = "Surface Area = 6.07877 x 10^12 square kilometers";
    facts.textContent = "The Sun is a yellow dwarf star, about 4.6 billion years old. It accounts for 99.86% of the total mass of the Solar System.";
};
function mercuryInfo () {
    name.textContent = "Mercury";
    planetImage.src = "mercury.png"
    weight.textContent = "Weight = 3.285 x 10^23 kilograms";
    area.textContent = "Surface Area = 7.48 x 10^7 square kilometers";
    facts.textContent = "Mercury is the smallest planet in our solar system and the closest to the Sun. It has a heavily cratered surface, similar to the Moon.";
};
function venusInfo () {
    name.textContent = "Venus";
    planetImage.src = "venus.png"
    weight.textContent = "Weight = 4.867 x 10^24 kilograms";
    area.textContent = "Surface Area = 4.6023 x 10^8 square kilometers";
    facts.textContent = "Venus is often called Earth's 'sister planet' due to its similar size and bulk composition. It has a thick, toxic atmosphere and extreme surface temperatures.";
};
function earthInfo () {
    name.textContent = "Earth";
    planetImage.src = "earth.png"
    weight.textContent = "Weight = 5.972 x 10^24 kilograms";
    area.textContent = "Surface Area = 5.10072 x 10^8 square kilometers";
    facts.textContent = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered by water.";
};
function marsInfo () {
    name.textContent = "Mars";
    planetImage.src = "mars.png"
    weight.textContent = "Weight = 6.39 x 10^23 kilograms";
    area.textContent = "Surface Area = 1.448 x 10^8 square kilometers";
    facts.textContent = "Mars is often referred to as the 'Red Planet' due to its reddish appearance from iron oxide. It has two small moons, Phobos and Deimos, and is a major focus for space exploration.";
};
function jupiterInfo () {
    name.textContent = "Jupiter";
    planetImage.src = "jupiter.png"
    weight.textContent = "Weight = 1.898 x 10^27 kilograms";
    area.textContent = "Surface Area = 6.14 x 10^10 square kilometers";
    facts.textContent = "Jupiter is the largest planet in our solar system, more than twice as massive as all the other planets combined. It is a gas giant with a prominent Great Red Spot, a giant storm larger than Earth.";
};
function saturnInfo () {
    name.textContent = "Saturn";
    planetImage.src = "saturn.png"
    weight.textContent = "Weight = 5.683 x 10^26 kilograms";
    area.textContent = "Surface Area = 4.27 x 10^10 square kilometers";
    facts.textContent = "Saturn is famous for its extensive and beautiful ring system, which is made up of billions of ice particles and rocks. It is the second-largest planet in the solar system and a gas giant.";
};
function uranusInfo () {
    name.textContent = "Uranus";
    planetImage.src = "uranus.png"
    weight.textContent = "Weight = 8.681 x 10^25 kilograms";
    area.textContent = "Surface Area = 8.13 x 10^9 square kilometers";
    facts.textContent = "Uranus is an ice giant and has a unique tilt, causing it to effectively orbit the Sun on its side. It has a faint ring system and numerous moons.";
};
function neptuneInfo () {
    name.textContent = "Neptune";
    planetImage.src = "neptune.png"
    weight.textContent = "Weight = 1.024 x 10^26 kilograms";
    area.textContent = "Surface Area = 7.64 x 10^9 square kilometers";
    facts.textContent = "Neptune is the eighth and farthest known planet from the Sun in our solar system. It is an ice giant and known for its strong winds and dynamic storms, like the Great Dark Spot.";
};

sunButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

mercuryButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

venusButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

earthButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

marsButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

jupiterButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

saturnButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});

uranusButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});
neptuneButton.addEventListener('click', () => {
    planetInfo.classList.add('active');
});
closeButton.addEventListener('click', () => {
    planetInfo.classList.remove('active');
});
