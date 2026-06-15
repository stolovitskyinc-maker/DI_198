// Centralized API Base URL configuration
const BASE_API_URL = "https://www.swapi.tech/api";

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

// Local cache memory to avoid duplicate planet network calls
const homeworldCache = {};

// UI State Controller
function setUIState(state) {
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    cardDiv.classList.add('hidden');

    if (state === 'loading') loadingDiv.classList.remove('hidden');
    if (state === 'error') errorDiv.classList.remove('hidden');
    if (state === 'success') cardDiv.classList.remove('hidden');
}

// 2. Optimized AJAX Request Function
async function getCharacterData() {
    setUIState('loading');
    
    // Array of valid character IDs to avoid hitting missing indexes (404s)
    const validIds = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 
        73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83
    ];
    
    const randomIdx = Math.floor(Math.random() * validIds.length);
    const selectedId = validIds[randomIdx];
    
    // ATTACHED HERE: Concatenating the base URL with the resource endpoint
    const characterUrl = `${BASE_API_URL}/people/${selectedId}`;

    try {
        const response = await fetch(characterUrl);
        
        if (!response.ok) {
            throw new Error(`Server returned status ${response.status} for Character ID ${selectedId}`);
        }
        
        const result = await response.json();
        const character = result.result.properties;

        // Fetch homeworld utilizing the cache layer
        const homeworldName = await getHomeworldName(character.homeworld);
        
        // 3. Render content safely
        displayCharacter(character, homeworldName);
    } catch (err) {
        errorText.innerText = `Fetch Error: ${err.message}`;
        setUIState('error');
    }
}

// Optimized caching homeworld fetcher
async function getHomeworldName(url) {
    if (homeworldCache[url]) {
        return homeworldCache[url];
    }

    try {
        const response = await fetch(url);
        if (!response.ok) return "Unknown";
        const data = await response.json();
        const name = data.result.properties.name;
        
        homeworldCache[url] = name;
        return name;
    } catch {
        return "Unknown";
    }
}

function displayCharacter(char, homeworld) {
    charName.innerText = char.name;
    charHeight.innerText = char.height;
    charGender.innerText = char.gender;
    charBirth.innerText = char.birth_year;
    charHomeworld.innerText = homeworld;
    
    setUIState('success');
}

fetchBtn.addEventListener('click', getCharacterData);
