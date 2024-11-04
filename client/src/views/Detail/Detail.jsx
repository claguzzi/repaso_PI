import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserById, resetUsers } from "../../redux/userSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch, id]);

  const user = useSelector((state) => state.user);
  const userDetails = Array.isArray(user) ? user[0] : user;

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Detalle</h1>
      {userDetails ? (
        <>
          <h2 className="text-lg font-semibold">Nombre: {userDetails.name}</h2>
          <h2 className="text-lg font-semibold">Usuario: {userDetails.username}</h2>
          <h2 className="text-lg font-semibold">Email: {userDetails.email}</h2>
          <h2 className="text-lg font-semibold">Teléfono: {userDetails.phone}</h2>
          <h2 className="text-lg font-semibold">Sitio web: {userDetails.website}</h2>
        </>
      ) : (
        <p className="text-lg">Cargando detalle del usuario...</p>
      )}
    </div>
  );
};

export default Detail;
