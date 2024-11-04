import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, email, phone, onDelete } = props;

  const handleDelete = () => {
    onDelete(id);
  };

  
  return (
    <div className="w-60 h-50 border border-black  rounded-10 bg-gray-100 p-3" >
      <Link to={`/detail/${id}`}className="text-blue-500 hover:underline">
        <p>Id: {id}</p>
      </Link>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      {isNaN(id) && <button onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-1 rounded mt-2"
      >Eliminar</button>}
    </div>
  );
};

export default Card;
