import React from "react";
import ProgramingSkilles from "./ProgramingSkill";
import LengSkill from "./LengSkilles";
import CompSkill from "./CompSkill";
import "./style.scss";


export default function skills() {
  return (
    <>
      <h1>Skill</h1>
      <div className="skillDiv">
        <LengSkill />
        <ProgramingSkilles />
        <CompSkill />
      </div>
    </>
  );
}
