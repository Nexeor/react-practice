import ListGroup from "./components/ListGroup";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["White", "Blue", "Black", "Red", "Green"];

  const handleSelectItem = (item: string) => {
    setSelectedColor(item);
  };

  return (
    <>
      <Banner>Select Your MTG Color</Banner>
      <Banner>Color Selected: {selectedColor}</Banner>
      <ListGroup colors={colors} onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
