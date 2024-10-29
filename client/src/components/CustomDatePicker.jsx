import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDatePicker = React.forwardRef(({ value, onClick }, ref) => (
  <div className="custom-input" onClick={onClick} ref={ref}>
    <input
      type="text"
      value={value}
      readOnly
      placeholder="Select Date"
      style={{ border: "none", outline: "none", flexGrow: 1 }}
    />
    <FaCalendarAlt style={{ marginLeft: "8px", cursor: "pointer" }} />
  </div>
));

export default CustomDatePicker;
