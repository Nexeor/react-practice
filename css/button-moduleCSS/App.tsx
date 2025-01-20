import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.tsx";
import Button from "./components/Button.tsx";

function App() {
  const [buttonState, setButtonState] = useState("Primary");
  const handlePressButton = () => {
    if (buttonState === "Primary") {
      setButtonState("Secondary");
    } else {
      setButtonState("Primary");
    }
  };

  return (
    <>
      <Banner>
        <h1>Press to swap button styles</h1>
      </Banner>
      <Button state={buttonState} onClickButton={handlePressButton}>
        The Button
      </Button>
    </>
  );
}

export default App;
