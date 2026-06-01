/*
Challenge: Create a solar system
Instructions:
1. Create an array which value is the planets of the solar system (using an array of objects for the bonus).
2. For each planet, create a <div> with the class "planet".
3. Each planet should have a different background color.
4. Append each div to the <section class="listPlanets">.
Bonus: 
- Create moons for each planet based on its moon count.
- Decide how to display them and choose the right data structure (array of objects).
*/

// Array of objects representing the planets, their unique CSS color properties, and moon counts
const solarSystem = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 }, // Scaled down for clean visual representation
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 2 }
];

// Target the section where planets will be listed
const planetSection = document.querySelector(".listPlanets");

// Loop through each planet object to construct the DOM elements
solarSystem.forEach(planet => {
    // 1. Create the planet element
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    
    // Apply the unique background color directly via style or custom class
    planetDiv.style.backgroundColor = planet.color;
    
    // Add text inside the planet to label it
    planetDiv.textContent = planet.name;
    planetDiv.style.color = "white"; // Ensures readability against darker colors

    // 2. Bonus: Generate and append the moons
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // Offset moons visually so they do not stack directly on top of each other
        // Since .moon is absolutely positioned inside a relatively positioned planet
        moonDiv.style.left = `${120 + (i * 40)}px`; 
        moonDiv.style.top = "20px";

        // Append the moon directly inside the parent planet container
        planetDiv.appendChild(moonDiv);
    }

    // 3. Append the finished planet layout to the section
    planetSection.appendChild(planetDiv);
});
