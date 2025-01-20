import styles from "./Button.module.css";

interface buttonProps {
  children: string;
  state: string;
  onClickButton: () => void;
}

// Default color is set to secondary, but we pass in overide color from app
function Button({ children, state, onClickButton }: buttonProps) {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles["btn" + state]].join(" ")}
        onClick={() => {
          onClickButton();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
