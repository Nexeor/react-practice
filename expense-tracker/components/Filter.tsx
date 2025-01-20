import categories from "./categories";

interface props {
  onSelectCategory: (category: string) => void;
}

const Filter = ({ onSelectCategory }: props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.currentTarget.value)}
    >
      <option>Everything</option>
      {categories.map((category, index) => (
        <option key={index}>{category}</option>
      ))}
    </select>
  );
};

export default Filter;
