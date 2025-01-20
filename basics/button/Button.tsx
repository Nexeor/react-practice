interface buttonProps {
  children: string;
  // ?: Optional prop
  // a | b : Can be either a or b, and no other value
  color?: "primary" | "secondary";
  onClickButton: () => void;
}

// Default color is set to secondary, but we pass in overide color from app
function Button({ children, color = "secondary", onClickButton }: buttonProps) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
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
