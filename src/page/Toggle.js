import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ width: "200px", height: "300px", margin: "0 auto" }}>
      <button type="button" onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <>open</> : <>close</>}
      </button>
      {toggle && <div>toggle open</div>}
    </div>
  );
}

export default Toggle;
