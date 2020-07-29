import React from "react";

export default function ButtonLink(props) {
  const { className, href, children } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
