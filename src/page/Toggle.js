import React, { useState } from "react";

function Toggle() {
  // 1개의 토글 사용시 prev => !prev
  const [toggle, setToggle] = useState(false);
  // 여러개의 토글 사용시
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    if (activeButton === id) {
      setActiveButton(null);
    } else {
      setActiveButton(id);
    }
  };

  return (
    <div style={{ width: "500px", height: "800px", margin: "0 auto" }}>
      <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
        <h3>하나의 toggle사용시</h3>
        <button type="button" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <>close</> : <>open</>}
        </button>
        {toggle && <div>toggle open</div>}
      </div>
      <div>
        <h3>여러개의 toggle 개별 관리</h3>
        <button type="button" onClick={() => handleClick(0)}>
          {activeButton === 0 ? <>close</> : <>open</>}
        </button>
        {activeButton === 0 && <dlv>1번 toggle open</dlv>}
      </div>
      <div>
        <button type="button" onClick={() => handleClick(1)}>
          {activeButton === 1 ? <>close</> : <>open</>}
        </button>
        {activeButton === 1 && <dlv>2번 toggle open</dlv>}
      </div>
      <div>
        <button type="button" onClick={() => handleClick(2)}>
          {activeButton === 2 ? <>close</> : <>open</>}
        </button>
        {activeButton === 2 && <dlv>3번 toggle open</dlv>}
      </div>
    </div>
  );
}

export default Toggle;
