import { useState } from "react";
import "./App.css";
import Button from "./components/Button.tsx";
import Alert from "./components/alert.tsx";

function App() {
  const [buttonPresses, setButtonPresses] = useState(0);
  const handlePressButton = () => {
    setButtonPresses(buttonPresses + 1);
    setActiveAlert(true);
  };

  const [activeAlert, setActiveAlert] = useState(false);
  const handleCloseAlert = () => {
    setActiveAlert(false);
  };

  return (
    <>
      <Alert onClickClose={handleCloseAlert} isActive={activeAlert}>
        Alert! You Pressed The Button! Button Pressed {buttonPresses} times!
      </Alert>
      <Button color="danger" onClickButton={handlePressButton}>
        Big Button
      </Button>
    </>
  );
}

export default App;
