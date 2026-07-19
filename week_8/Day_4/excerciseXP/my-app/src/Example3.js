import React from "react";
import data from "./data.json";

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img
              src={experience.logo}
              alt={experience.companyName}
              width="50"
            />
            <h3>
              <a href={experience.url} target="_blank" rel="noreferrer">
                {experience.companyName}
              </a>
            </h3>

            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>
                  {role.startDate} — {role.endDate}
                </p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;