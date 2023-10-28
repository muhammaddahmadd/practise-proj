import { useState } from "react";

function Form({ onAddItem }) {
  //   const array =
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 w-full bg-stone-200 space-x-4 flex-row justify-center  py-8"
    >
      <span>What do you need for your trip?</span>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-10"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="rounded-2xl bg-yellow-400 px-4 py-1">Add</button>
    </form>
  );
}

export default Form;
