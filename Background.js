import React from "react";
import { useEffect, useState } from "react";

const Time = (props) => {
  const [date] = useState("");
  
  const Clock = async () => {
    if (props.weather !== undefined) {
      const res = await fetch(
        `https://api.ipgeolocation.io/timezone?apiKey=f6e8e86b74d444989c4f8ee6eef098ba&lat=${props.weather.lat}&long=${props.weather.lon}`
      );
      const data = await res.json();

      console.log(data);

      var timeapi = data.time_24;``
    }


    // AM PM
    // var ampm = timeapi.split(" ");
    // ampm = ampm[1]

    function realClock() {
      props.setHour = timeapi.slice(0, 2);
      let date = new Date();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      props.hour = props.hour < 10 ? `${props.hour}` : props.hour;
      mm = mm < 10 ? `0${mm}` : mm;
      ss = ss < 10 ? `0${ss}` : ss;
      if (mm === 59 && ss === 59) {
        props.hour++;
      }

      props.setClockface(`${props.hour}:${mm}:${ss}`);
      setTimeout(realClock, 1000);
    }
    realClock();
  };
  useEffect(() => {
    Clock();
  }, [props.search]);

  return (
    <div className="Clockface">
      <span>
        <p>{props.clockface}</p>
        <p>{date}</p>
      </span>
    </div>
  );
};

export default Time;
