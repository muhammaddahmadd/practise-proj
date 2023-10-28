import React from "react";

function Stats() {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return <div>Stats</div>;
}

export default Stats;
