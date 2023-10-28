import React, { useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [items, setItem] = useState([]);
  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    setItem([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={handleClear}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
