import React from "react";

 export default function SkillCard({title, src}) {
  return(
    <div className="card-skill">
      <img src={src} alt={title} />
      <h5> {title}</h5>
    </div>


  )
}
