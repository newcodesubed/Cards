import React from "react";
import Skill from "./Skill";

function SkillList(){
    return(
        <div className="skill-list">
            <Skill skill="html+css" emoji="👌" />
            <Skill skill="Node Js" emoji="👌" />
            <Skill skill="React" emoji="👌" />
            <Skill skill="Postgresh" emoji="👌" />
        </div>
    );
}
export default SkillList;