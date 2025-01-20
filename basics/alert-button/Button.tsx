interface buttonProps {
  children: string;
  // ?: Optional prop
  color?: string;
  onClickButton: () => void;
}

// Default color is set to secondary, but we pass in overide color from app
function Button({ children, color = "primary", onClickButton }: buttonProps) {
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
