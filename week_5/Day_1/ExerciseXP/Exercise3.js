async function getStarshipData() {
  const url = "https://www.swapi.tech/api/starships/9/";

  try {
    // 1. Wait for the fetch request to resolve
    const response = await fetch(url);

    // 2. Explicitly check the HTTP response status
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
    }

    // 3. Wait for the JSON data body to parse
    const objectStarWars = await response.json();

    // 4. Log the result data to the console
    console.log(objectStarWars.result);

  } catch (error) {
    // 5. Handle both network errors and explicit throw statements
    console.error("An error occurred during the SWAPI fetch operation:", error.message);
  }
}

// Execute the async function
getStarshipData();
