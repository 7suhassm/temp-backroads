import React from "react";
const PageLinks = ({ href, text, classTitle }) => {
  return (
    <li>
      <a href={href} className={classTitle}>
        {text}
      </a>
    </li>
  );
};

export default PageLinks;
