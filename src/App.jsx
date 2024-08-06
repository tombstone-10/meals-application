import "./App.css";
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Meals from "./components/Meals";

const App = () => {
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </main>
  );
};

export default App;
