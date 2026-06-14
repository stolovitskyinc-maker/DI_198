function fetchHilariousGifs() {
  const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  fetch(url)
    .then((response) => {
      // 1. Explicitly check if the server response is successful (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
      }
      // 2. Parse the stream body into a workable JavaScript Object
      return response.json();
    })
    .then((jsonObject) => {
      // 3. Log the root JavaScript Object (this matches your screenshot structure)
      console.log("Successfully retrieved GIPHY data object:", jsonObject);
      
      // OPTIONAL: If you want to log just the 25 items array directly:
      // console.log(jsonObject.data);
    })
    .catch((error) => {
      // 4. Safely intercept and handle network or structural parse errors
      console.error("An error occurred during the GIPHY fetch operation:", error.message);
    });
}

// Execute the program
fetchHilariousGifs();
