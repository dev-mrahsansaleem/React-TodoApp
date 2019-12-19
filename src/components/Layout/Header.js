//rfc and enter
import React from "react";

function Header() {
  return (
    <header style={headerStyleCSS}>
      <h1>TodoList</h1>
    </header>
  );
}

const headerStyleCSS = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
export default Header;
