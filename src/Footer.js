function Footer({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  if (!items.length)
    return (
      <p className="text-xl p-3 font-semibold flex justify-center items-end text-white-300 bg-green-300 h-16">
        Start by adding items
      </p>
    );

  if (items.length > 0)
    return (
      <footer className="text-xl p-3 font-semibold flex justify-center items-end text-white-300 mt-60 bg-cyan-500 h-16">
        <h2>
          You have {items.length} in your cart & {numPacked} items are packed!
        </h2>
        <span className="ml-2">🛒</span>
      </footer>
    );
}

export default Footer;
