import React from "react";

import { SectionWrapper } from "../hoc";
import Modal from "react-modal";

Modal.setAppElement("body");

const Resume = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="flex justify-around">
        <button className="custom-button" onClick={() => setIsOpen(true)}>
          View Resume
        </button>
        <button className="custom-button">Download Resume</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="resume-modal"
      >
        <div className="flex flex-col justify-around h-full">
          <button onClick={() => setIsOpen(false)}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SectionWrapper(Resume, "");
