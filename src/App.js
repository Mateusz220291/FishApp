import { useState } from "react";
import CatchList from "./components/Catches/CatchList";
import NewCatch from "./components/NewCatch/NewCatch";

const arr1 = [{ name: "pike" }, { name: "zander" }];

const App = () => {
  const [catches, setCatches] = useState(arr1);
  const saveCatchDataHandler = (fish) => {
    setCatches((prevCatches) => {
      return [fish, ...prevCatches];
    });
    arr1.push(fish);
  };
  console.log(arr1);
  return (
    <>
      <NewCatch onAddCatch={saveCatchDataHandler} />
      <CatchList items={catches}></CatchList>
    </>
  );
};

export default App;
