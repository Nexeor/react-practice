import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.tsx";
import Button from "./components/Button.tsx";

function App() {
  const [buttonPresses, setButtonPresses] = useState(0);
  const handlePressButton = () => {
    setButtonPresses(buttonPresses + 1);
    console.log(buttonPresses + 1);
  };

  return (
    <>
      <Banner>
        <h1>You pressed the button: {buttonPresses} times</h1>
      </Banner>
      <Button color="primary" onClickButton={handlePressButton}>
        Big Button
      </Button>
    </>
  );
}

export default App;
