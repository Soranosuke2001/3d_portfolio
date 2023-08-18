import React from "react";

import { SectionWrapper } from "../hoc";
import Modal from "react-modal";
import { resume } from "../assets";
import { XSquare } from "lucide-react";

Modal.setAppElement("body");

const Resume = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="flex justify-around">
        <button className="custom-button" onClick={() => setIsOpen(true)}>
          View Resume
        </button>
        <a href={resume} download="Resume">
          <button className="custom-button">Download Resume</button>
        </a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="resume-modal"
      >
        <div className="absolute right-3 top-3">
          <button onClick={() => setIsOpen(false)}>
            <XSquare className="h-16 w-16" />
          </button>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="h-[90%] w-5/6">
            <iframe src={resume} className="h-full w-full"></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SectionWrapper(Resume, "");
