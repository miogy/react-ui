import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CountDown() {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if (Response.error) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, []);
  return (
    <>
      <p>
        {seconds}
        <span>초 후</span>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </button>
        <span>으로 이동됩니다.</span>
      </p>
    </>
  );
}

export default CountDown;
