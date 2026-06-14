  const url = `https://chucknorris.io/jokes/random?category=dev`;

  funcrtion retrieveJoke() {
   fetch(url)
    .then((response) => {
      // Check if the response status code is outside the 200-299 range
      if (!response.ok) {
       return response.text().then((text) => {
          throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
        }
      }
      // Parse the stream body into a JavaScript object
      return response.json();
    })
    .then((data) => {
      console.log(data.value); // Log the joke to the console
      displayJoke(data.value); // Call the function to display the joke on the webpage
    })
    .catch((error) => console.log('Error fetching joke:', error)); // Log any errors that occur during the fetch operation
}
