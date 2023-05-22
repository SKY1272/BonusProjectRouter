import React from "react";
function Home({ handleLocalStorage }) {
  return (
    <div>
      <h1>Task page</h1>
      <button onClick={handleLocalStorage}>Clear</button>
    </div>
  );
}
export default Home;
