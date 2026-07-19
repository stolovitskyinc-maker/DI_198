import React from "react";
import data from "./data.json";

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        <ul>
          {data.SocialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;