import React from "react";

export default function ButtonLink(props) {
  const { className } = props;

  return (
    <a href="./" className={className}>
      Novo Vídeo
    </a>
  );
}
