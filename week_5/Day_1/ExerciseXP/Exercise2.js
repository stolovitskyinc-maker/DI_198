function fetchSunGifs() {
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  const query = "sun";
  const limit = 10;
  const offset = 2;

  // Constructing the paginated URL
  const url = `https://giphy.com{apiKey}&q=${query}&limit=${limit}&offset=${offset}`;

  fetch(url)
    .then((response) => {
      // Check if the response status is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((jsonObject) => {
      // Console log the complete received JavaScript Object
      console.log("Successfully retrieved 10 'sun' GIFs starting at offset 2:", jsonObject);
      
      // To inspect the 10 data records explicitly in your console:
      // console.log(jsonObject.data);
    })
    .catch((error) => {
      console.error("An error occurred during the GIPHY fetch operation:", error.message);
    });
}

// Run the script
fetchSunGifs();
