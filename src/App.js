import { useState } from "react";
import CatchList from "./components/Catches/CatchList";
import NewCatch from "./components/NewCatch/NewCatch";

const arr1 = [];

const App = () => {
  const [catches, setCatches] = useState(arr1);
  const saveCatchDataHandler = (fish) => {
    setCatches((prevCatches) => {
      return [fish, ...prevCatches];
    });
  };
  return (
    <>
      <NewCatch onAddCatch={saveCatchDataHandler} />
      <CatchList items={catches}></CatchList>
    </>
  );
};

export default App;
