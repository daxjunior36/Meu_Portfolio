import React from "react";
import SkillCard from "./SkillCard";
import skillsIcons from "../helpers/skill.Icon";
import "../styles/Skills.scss";

 export default function Skills() {
  return(
  <section id="skills">
  <h2>SKILLS</h2>
  <div className="card-skill-list">
    {skillsIcons.map((element) => (
      <SkillCard key={element.title} src={element.src} title={element.title} />
    ))}
  </div>
  </section>

  )
}
