import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCards, setCards } from "../slice/cardSlice";

import data from "../data/data.json";

import Card from "./Card";

const CardList: React.FC = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: any) => selectCards(state));

  useEffect(() => {
    dispatch(setCards(data));
  }, [dispatch]);

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-6
        p-4
        sm:p-6
        md:p-10
        lg:px-20
        border-b
      "
    >
      {cards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
