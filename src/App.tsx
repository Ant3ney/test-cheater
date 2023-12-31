import React, { useEffect } from "react";
import logo from "./logo.svg";
import "//unpkg.com/mathlive";
import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";
import solve from "./solve";
import Phone from "./Phone";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<any>(0);
  const [evalTrigger, setEvalTrigger] = useState<any>("init");
  const [hasPhoneOpen, setHasPhoneOpen] = useState<boolean>(false);

  useEffect(() => {
    if (evalTrigger === "init") return;
    (async () => {
      const newResult = await solve(value);
      if (!newResult) return alert("No solution found");
      setResult(newResult);
    })();
  }, [evalTrigger]);
  return (
    <div className="App">
      <h1>Test Cheater!</h1>
      <button onClick={() => setHasPhoneOpen(!hasPhoneOpen)}>
        {hasPhoneOpen ? "Close" : "Open"} Phone
      </button>
      {hasPhoneOpen ? <Phone /> : <></>}
    </div>
  );
}

export default App;
