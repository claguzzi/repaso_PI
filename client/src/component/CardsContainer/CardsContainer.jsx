// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { deleteUser } from "../../redux/userSlice";


const CardsContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className=" bg-slate-300 border border-black flex flex-row rounded-lg flex-wrap gap-5">
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          phone={user.phone}
          email={user.email}
          onDelete={handleDelete} // Pasar la función de eliminación como prop
        />
      ))}
    </div>
  );
};

export default CardsContainer;
