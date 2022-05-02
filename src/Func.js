import { useState, useEffect } from "react";
import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons";
import "./Func.css";

export default function Func({ input }) {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const process = () => {
    if (Array.isArray(input)) {
      return input.map((item, id) => <div key={id}>{item}</div>);
    } else if (!input) {
      return (
        <div className="time">
          <CalendarFilled />
          <div className="calendar">
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })}
          </div>
          <ClockCircleFilled />
          <div className="clock">
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false
            })}
          </div>
        </div>
      );
    } else {
      return input;
    }
  };

  return <div className="Func">{process()}</div>;
}
