import ListGroup from "./components/list-app/ListGroup";
import Banner from "./components/list-app/Banner";
import { useState } from "react";

function App() {
  const [bannerText, setBannerText] = useState("Color Selected: ");
  const colors = ["White", "Blue", "Black", "Red", "Green"];

  const handleSelectItem = (item: string) => {
    setBannerText("Color Selected: " + item);
  };

  return (
    <>
      <Banner bannerText={bannerText} />
      <ListGroup colors={colors} onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
