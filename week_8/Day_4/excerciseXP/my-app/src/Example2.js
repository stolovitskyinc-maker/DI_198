import React from "react";
import data from "./data.json";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skillGroup, index) => (
          <div key={index}>
            <h3>{skillGroup.Area}</h3>
            <ul>
              {skillGroup.SkillSet.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  {skill.Name} {skill.Hot ? "🔥" : ""}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;