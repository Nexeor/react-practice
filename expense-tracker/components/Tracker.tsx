interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface props {
  items: item[];
  selectedCategory: string;
  onDeleteItem: (itemIndex: number) => void;
}

const Tracker = ({ items, selectedCategory, onDeleteItem }: props) => {
  if (items.length === 0)
    return <h1> No items of category: {selectedCategory.toLowerCase()} </h1>;

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>{selectedCategory}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>${item.amount.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {items.reduce((total, item) => total + item.amount, 0).toFixed(2)}
            </td>
            <td />
            <td />
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Tracker;
