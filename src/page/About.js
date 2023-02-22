import React, { useState } from "react";

export function Menu1() {
  return <>Menu 1번 입니다.</>;
}

export function Menu2() {
  return <>Menu 2번 입니다.</>;
}

export function Menu3() {
  return <>Menu 3번 입니다.</>;
}

function About() {
  const [tab, setTab] = useState(0);

  const tabComponents = {
    0: <Menu1 />,
    1: <Menu2 />,
    2: <Menu3 />,
  };
  return (
    <>
      <button type="button" onClick={() => setTab(0)}>
        Menu1
      </button>
      <button type="button" onClick={() => setTab(1)}>
        Menu2
      </button>
      <button type="button" onClick={() => setTab(2)}>
        Menu3
      </button>
      {tabComponents[tab]}
    </>
  );
}

export default About;
