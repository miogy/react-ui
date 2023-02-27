import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Dashboard() {
  const [loader1, setLoader1] = useState(false);

  useEffect(() => {
    setLoader1(true);
    // button click할때마다 loder적용 => onClick에 prev => !prev로 지정
    // useEffert 적용
    console.log(loader1);
  }, [loader1]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setLoader1((prev) => setLoader1(!prev));
        }}
      >
        Loader1 click
        {loader1 && <Loader />}
      </button>
    </>
  );
}

export default Dashboard;
