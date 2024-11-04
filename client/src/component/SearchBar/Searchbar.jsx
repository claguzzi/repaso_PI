import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserByName } from "../../redux/userSlice";



const SearchBar = () => {

  const dispatch = useDispatch();

  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUserByName(nombre));

  };



  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Buscar por nombre..."
        value={nombre}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!nombre}>Buscar</button>
    </form>
  )
}


export default SearchBar;
