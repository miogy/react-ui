import React, { useState } from "react";

export function Menu1() {
  return <> Step1. tab에 사용할 menu의 index별 컴포넌트를 담아준다.</>;
}

export function Menu2() {
  return (
    <>
      Step2. tab을 state로 만들어 버튼태그를 이용하여 setState에 해당 index를
      전달한다.
    </>
  );
}

export function Menu3() {
  return (
    <>
      Step3. 컴포넌트들을 만든후 해당 컴포넌트가 들어갈 콘텐츠 자리에
      &#123;tabComponents[tab]&#125;으로 사용한다.
    </>
  );
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
      <div
        style={{
          width: "500px",
          height: "300px",
          paddingTop: "50px",
          margin: "0 auto",
        }}
      >
        <button type="button" onClick={() => setTab(0)}>
          Step1
        </button>
        <button type="button" onClick={() => setTab(1)}>
          Step2
        </button>
        <button type="button" onClick={() => setTab(2)}>
          Step3
        </button>
        <div style={{ width: "100%", paddingTop: "20px" }}>
          {tabComponents[tab]}
        </div>
      </div>
    </>
  );
}

export default About;
