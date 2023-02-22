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
        Step1. tab에 사용할 menu의 index별 컴포넌트를 담아준다.
      </button>
      <button type="button" onClick={() => setTab(1)}>
        Step2. tab을 state로 만들어 버튼태그를 이용하여 setState에 해당 index를
        전달한다.
      </button>
      <button type="button" onClick={() => setTab(2)}>
        Step3. 컴포넌트들을 만든후 해당 컴포넌트가 들어갈 콘텐츠 자리에
        &#123;tabComponents[tab]&#125;으로 사용한다.
      </button>
      {tabComponents[tab]}
    </>
  );
}

export default About;
