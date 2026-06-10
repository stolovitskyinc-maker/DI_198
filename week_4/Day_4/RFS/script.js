// PART I: ASSETS
const robots = [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
  { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
  { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
  { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
  { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
  { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
  { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

// DOM Selectors
const robotContainer = document.getElementById('robot-container');
const searchBox = document.getElementById('search-box');

// PART I: Display function (100% Identical to your original version)
function displayRobots(robotsToRender) {
  // Clear out the container first
  robotContainer.innerHTML = '';

  // Handle case where no robots match the filter
  if (robotsToRender.length === 0) {
    robotContainer.innerHTML = '<p class="no-results">No robots found</p>';
    return;
  }

  // Create and append card elements
  robotsToRender.forEach(robot => {
    const card = document.createElement('div');
    card.classList.add('robot-card');

    card.innerHTML = `
      <img src="${robot.image}" alt="${robot.name}">
      <h2>${robot.name}</h2>
      <p class="username">@${robot.username}</p>
      <p class="email">${robot.email}</p>
    `;

    robotContainer.appendChild(card);
  });
}

// PART II: Updated Filter event listener
searchBox.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();

  const filteredRobots = robots.filter(robot => {
    const matchName = robot.name.toLowerCase().includes(searchTerm);
    const matchUsername = robot.username.toLowerCase().includes(searchTerm);
    const matchEmail = robot.email.toLowerCase().includes(searchTerm);
    
    return matchName || matchUsername || matchEmail;
  });

  displayRobots(filteredRobots);
});

// Initial render of all robots when page loads
displayRobots(robots);
