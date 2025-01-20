interface Props {
  isExpanded: boolean;
  onClickExpandButton: () => void;
}

const ExpandButton = ({ isExpanded, onClickExpandButton }: Props) => {
  return (
    <button onClick={onClickExpandButton}>
      {isExpanded ? "Show Less" : "Show More"}
    </button>
  );
};

export default ExpandButton;
