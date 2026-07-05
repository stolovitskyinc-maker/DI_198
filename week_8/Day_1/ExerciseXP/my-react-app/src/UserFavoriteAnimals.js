import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    // Destructure favAnimals from props
    const { favAnimals } = this.props;

    return (
      <ul>
        {/* Map through the array and use the index as a unique key */}
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
