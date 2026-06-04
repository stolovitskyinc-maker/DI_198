/*
Welcome Navbar Engine
Instructions:
1. Target the existing navbar element using its ID.
2. Initialize an Immediately Invoked Function Expression (IIFE) that takes 1 name argument.
3. Programmatically assemble a user profile div containing text and an image node.
4. Inject the finished component straight into the target navbar container.
*/

(function(username) {
    // 1. Target the navbar node element
    const navbar = document.getElementById("mainNavbar");

    // 2. Create the wrapper container div for the user profile layout
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("user-profile-badge");

    // 3. Create the text element to display the username welcome
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("user-name");
    nameSpan.textContent = `Welcome, ${username}`;

    // 4. Create the image element to act as the profile picture avatar
    const avatarImg = document.createElement("img");
    avatarImg.classList.add("user-avatar");
    // Utilizing a placeholder user avatar image URL for live demonstration purposes
    avatarImg.setAttribute("src", "https://pravatar.cc");
    avatarImg.setAttribute("alt", `${username}'s Profile Picture`);

    // 5. Assemble the tree structure hierarchy inside the user profile card element
    profileDiv.appendChild(nameSpan);
    profileDiv.appendChild(avatarImg);

    // 6. Inject the fully finalized layout wrapper into the browser navbar
    navbar.appendChild(profileDiv);

})("John"); // 👈 Passing the variable string parameter target here fires the execution instantly
