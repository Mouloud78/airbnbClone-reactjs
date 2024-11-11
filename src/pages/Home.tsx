import Categories from "../components/Categories";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CardList from "../components/CardList";
import LinksHome from "../components/LinksHome";
export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
    </>
  );
}
