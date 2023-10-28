import React from "react";

function Item({ item, onDelete, onToggle }) {
  const { id, packed } = item;
  // console.log(id);
  return (
    <li className="flex flex-row space-x-2 ">
      <input type="checkbox" value={packed} onChange={() => onToggle(id)} />
      <span>
        {item.quantity} {item.description}
      </span>
      <button
        className="bg-red text-red-400 font-semibold"
        onClick={() => onDelete(id)}
      >
        x
      </button>
    </li>
  );
}

export default Item;
