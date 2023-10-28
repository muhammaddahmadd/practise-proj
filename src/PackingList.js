import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDelete, onToggle, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <>
      <ul className="flex flex-row space-x-6 p-4  justify-center">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="p-3 flex space-x-9 justify-center ">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className=" bg-orange-200 rounded-2xl px-3 py-2"
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button
          onClick={onClear}
          className="bg-red-400 rounded-2xl px-2 py-1 font-semibold"
        >
          clear list
        </button>
      </div>
    </>
  );
}

export default PackingList;
