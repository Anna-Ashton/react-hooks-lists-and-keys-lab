import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //return <nav>{/* display an <a> tag for each link here */}</nav>;
  //const ref = "#"+link
const navLinks = links.map((link)=>{
  return <a key={link} href={"#"+link}>{link}</a>
})
  return <nav>{navLinks}</nav>
}

export default NavBar;
