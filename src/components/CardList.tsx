import { useEffect } from "react";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { selectCards, setCards } from "../slice/cardSlice";
import data from "../data/data.json";
import Card from "./Card";
import { IoIosHeartEmpty } from "react-icons/io";

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(setCards(data));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 gap-5 justify-center items-center p-10 border-b-2 px-20">
      {cards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
