import React, { useEffect } from "react";
import logo from "./logo.svg";
import "//unpkg.com/mathlive";
import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";
import solve from "./solve";

function Phone({}: any) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<any>(0);
  const [evalTrigger, setEvalTrigger] = useState<any>("init");

  useEffect(() => {
    if (evalTrigger === "init") return;
    (async () => {
      const newResult = await solve(value);
      if (!newResult) return alert("No solution found");
      setResult(newResult);
    })();
  }, [evalTrigger]);

  return (
    <div>
      {/* @ts-ignore */}
      <math-field onInput={(evt: any) => setValue(evt.target.value)}>
        {" "}
        {value} {/* @ts-ignore */}
      </math-field>
      <button
        onClick={() => {
          if (evalTrigger === "init") setEvalTrigger(true);
          else setEvalTrigger(!evalTrigger);
        }}
      >
        Evaluate
      </button>
      <p>Value: {value}</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default Phone;
