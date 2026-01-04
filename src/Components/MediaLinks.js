import React from "react";

const MediaLinks = ({ href, icon, classTitle }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={classTitle}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default MediaLinks;
