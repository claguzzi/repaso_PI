import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../SearchBar/Searchbar";





const NavBar = () => {

  return (
    <div className=" bg-slate-600 flex flex-row justify-around rounded-lg">
      <Link to={"/home"}>HOME</Link>
      <SearchBar />
      <Link to={"/create"}>FORM</Link>
    </div>
  )
}



export default NavBar;