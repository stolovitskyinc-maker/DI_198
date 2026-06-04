/*
HTML5 Geolocation Tracking Engine
Instructions:
1. Target the action trigger button.
2. Verify browser compatibility support parameters using 'navigator.geolocation'.
3. Prompt for location access securely and render resulting coordinates onto the screen workspace.
*/

// 1. Target interface layout interaction elements
let geoBtn = document.getElementById("geoBtn");
let outputDiv = document.getElementById("output");

// 2. Attach click event listener execution routing path
geoBtn.addEventListener("click", getLocation);

function getLocation() {
    // Clear out any previous layout texts
    outputDiv.innerHTML = "Fetching position data...";
    outputDiv.className = "";

    // 3. Structural Validation: Verify if browser supports Geolocation API features
    if (navigator.geolocation) {
        // request permissions and execute target handler functions asynchronously
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        outputDiv.innerHTML = "Error: Geolocation is not supported by this browser version.";
        outputDiv.className = "error";
    }
}

// 4. Core Success Handler Callback
function showPosition(position) {
    // Extract exact latitude and longitude numerical parameters
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Format and render results straight onto layout panels matching assignment requirements
    outputDiv.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
}

// 5. Error Handler Callback (Handles denials or hardware timeout connection errors)
function showError(error) {
    outputDiv.className = "error";
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            outputDiv.innerHTML = "User denied the request for Geolocation access permissions.";
            break;
        case error.POSITION_UNAVAILABLE:
            outputDiv.innerHTML = "Location status information is completely unavailable on this device connection network.";
            break;
        case error.TIMEOUT:
            outputDiv.innerHTML = "The request to get user location timed out under local device parameters.";
            break;
        case error.UNKNOWN_ERROR:
            outputDiv.innerHTML = "An unknown processing error occurred.";
            break;
    }
}
