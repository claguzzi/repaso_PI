import { useEffect } from "react";
import CardsContainer from "../../component/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/userSlice";
import { getPosts } from "../../redux/postSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getUsers());
    dispatch(getPosts());
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
