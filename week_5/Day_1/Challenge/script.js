const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const clearAllBtn = document.getElementById("clear-all-btn");

// Handle form submission
form.addEventListener("submit", async (event) => {
  event.preventDefault(); 
  const category = searchInput.value.trim();
  
  if (category) {
    await fetchRandomGif(category);
    searchInput.value = ""; 
  }
});

// Fetch function using async/await and corrected GIPHY Random API URL
async function fetchRandomGif(tag) {
  // FIXED: Corrected the parameter key naming and base path mapping string structure
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const jsonObject = await response.json();
    
    // Safety check: verify that GIPHY found matching data for that tag
    if (!jsonObject.data || Array.isArray(jsonObject.data)) {
      alert(`No random GIFs found for category: "${tag}"`);
      return;
    }

    // Accessing sub-object hierarchy: data -> images -> fixed_height -> url
    const gifUrl = jsonObject.data.images.fixed_height.url;
    
    // Call function to append elements to the page
    appendGifToDom(gifUrl, tag);

  } catch (error) {
    console.error("Fetch operation failed:", error.message);
    alert("Could not retrieve GIF. Check your connection or console log.");
  }
}

// Function to construct and append items to the DOM
function appendGifToDom(url, categoryName) {
  const gifCard = document.createElement("div");
  gifCard.classList.add("gif-card");

  const imgElement = document.createElement("img");
  imgElement.src = url;
  imgElement.alt = `${categoryName} gif`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "DELETE";

  deleteBtn.addEventListener("click", () => {
    gifCard.remove();
  });

  gifCard.appendChild(imgElement);
  gifCard.appendChild(deleteBtn);
  gifContainer.appendChild(gifCard);
}

// OPTIMIZED: Mass clear button handles high scales without full string re-parsing
clearAllBtn.addEventListener("click", () => {
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
