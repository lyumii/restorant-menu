import React, { useState } from "react";
import Forretter from "./Forretter";
import Hovedretter from "./Hovedretter";
import Desserter from "./Desserter";

export default function Filterbar() {
  const [state, setState] = useState("alle");

  const alleBtn = () => setState("alle");
  const forretterBtn = () => setState("forretter");
  const hovedretterBtn = () => setState("hovedretter");
  const desserterBtn = () => setState("desserter");

  return (
    <div>
      <div className="filterbar">
        <button onClick={alleBtn}>Alle</button>
        <button onClick={forretterBtn}>Forretter</button>
        <button onClick={hovedretterBtn}>Hovedretter</button>
        <button onClick={desserterBtn}>Desserter</button>
      </div>

      {state === "alle" && (
        <>
          <Forretter />
          <Hovedretter />
          <Desserter />
        </>
      )}
      {state === "forretter" && <Forretter />}
      {state === "hovedretter" && <Hovedretter />}
      {state === "desserter" && <Desserter />}
    </div>
  );
}
