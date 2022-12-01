import React, { useState, useRef } from "react";

function Collapse({ collapsedLabel, expandedLabel, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {open ? expandedLabel : collapsedLabel}
      </button>
      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
};
export default Collapse;
