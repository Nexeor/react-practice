import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Tracker from "./components/Tracker";
import { FieldValues } from "react-hook-form";
import Filter from "./components/Filter";

interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Everything");

  const [items, setItems] = useState<item[]>([
    { id: 0, description: "Milk", amount: 5, category: "Groceries" },
  ]);

  const handleAddItem = (newItem: FieldValues) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        description: newItem.description,
        amount: newItem.amount,
        category: newItem.category,
      },
    ]);
  };

  const filteredItems = items.filter(
    (item) =>
      selectedCategory === "Everything" || item.category === selectedCategory
  );

  return (
    <>
      <div className="mb-3">
        <Form onSubmit={handleAddItem} />
      </div>

      <div className="mb-3">
        <Filter
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
      </div>

      <div className="mb-3">
        <Tracker
          items={filteredItems}
          selectedCategory={selectedCategory}
          onDeleteItem={(id: number) =>
            setItems(items.filter((item) => item.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
