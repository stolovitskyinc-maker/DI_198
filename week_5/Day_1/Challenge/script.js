const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const clearAllBtn = document.getElementById("clear-all-btn");

// Handle form submission
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stop page from refreshing
  const category = searchInput.value.trim();
  
  if (category) {
    await fetchRandomGif(category);
    searchInput.value = ""; // Clear the input field
  }
});

// Fetch function using async/await and GIPHY Random API
async function fetchRandomGif(tag) {
  // Using the /v1/gifs/random endpoint with tag filter parameter
  const url = `https://giphy.com{API_KEY}&tag=${tag}&rating=g`;

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
  // Create wrapper element card
  const gifCard = document.createElement("div");
  gifCard.classList.add("gif-card");

  // Create image tag element
  const imgElement = document.createElement("img");
  imgElement.src = url;
  imgElement.alt = `${categoryName} gif`;

  // Create unique individual delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "DELETE";

  // Individual Deletion logic closure
  deleteBtn.addEventListener("click", () => {
    gifCard.remove();
  });

  // Assemble the card layout components together
  gifCard.appendChild(imgElement);
  gifCard.appendChild(deleteBtn);

  // Push inside the layout container element grid wrapper on screen
  gifContainer.appendChild(gifCard);
}

// Mass clear button operation functionality handler
clearAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = ""; // Wipes out all children elements immediately
});
