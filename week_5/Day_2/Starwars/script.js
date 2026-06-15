// 1. Retrieve elements from the DOM
const fetchBtn = document.getElementById('fetch-btn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorText = document.getElementById('error-text');
const cardDiv = document.getElementById('character-card');

const charName = document.getElementById('char-name');
const charHeight = document.getElementById('char-height');
const charGender = document.getElementById('char-gender');
const charBirth = document.getElementById('char-birth');
const charHomeworld = document.getElementById('char-homeworld');

// Helper to manage UI visibility states
function setUIState(state) {
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    cardDiv.classList.add('hidden');

    if (state === 'loading') loadingDiv.classList.remove('hidden');
    if (state === 'error') errorDiv.classList.remove('hidden');
    if (state === 'success') cardDiv.classList.remove('hidden');
}

// 2. Get data from the API via AJAX
async function getCharacterData() {
    setUIState('loading');
    
    // Generate a random ID between 1 and 83
    const randomId = Math.floor(Math.random() * 83) + 1;
    const characterUrl = `https://swapi.tech{randomId}`;

    try {
        const response = await fetch(characterUrl);
        if (!response.ok) throw new Error(`Character ID ${randomId} not found.`);
        
        const result = await response.json();
        const character = result.result.properties;

        // Fetch homeworld name from its specific URL
        const homeworldName = await getHomeworldName(character.homeworld);
        
        // 3. Display the info on the DOM
        displayCharacter(character, homeworldName);
    } catch (err) {
        errorText.innerText = `Error: ${err.message}`;
        setUIState('error');
    }
}

// Helper to fetch the Homeworld name string instead of leaving it as a URL
async function getHomeworldName(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) return "Unknown";
        const data = await response.json();
        return data.result.properties.name;
    } catch {
        return "Unknown";
    }
}

// Populates the DOM nodes with data
function displayCharacter(char, homeworld) {
    charName.innerText = char.name;
    charHeight.innerText = char.height;
    charGender.innerText = char.gender;
    charBirth.innerText = char.birth_year;
    charHomeworld.innerText = homeworld;
    
    setUIState('success');
}

// Event Listener for the action button
fetchBtn.addEventListener('click', getCharacterData);
