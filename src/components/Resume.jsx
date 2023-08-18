import React from "react";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  return (
    <div className="flex justify-around">
      <button className="custom-button">View Resume</button>
      <button className="custom-button">Download Resume</button>
    </div>
  );
};

export default SectionWrapper(Resume, "");
