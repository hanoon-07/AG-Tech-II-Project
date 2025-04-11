import { Link } from "react-router-dom";
import React from "react";

function Button({ children, to, className }) {
  if (to)
    return (
      <Link to={to} className={`${className} inline-block`}>
        {children}
      </Link>
    );

  return <button className={className}>{children}</button>;
}

export default Button;
