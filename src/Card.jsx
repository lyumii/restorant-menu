import React, { useState } from "react";

export default function Card(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={isActive ? "hovered" : ""}
    >
      <h3>
        {props.tittel}
        <span>{props.pris}</span>
      </h3>
      <h4>{props.ingredienser}</h4>
    </article>
  );
}
