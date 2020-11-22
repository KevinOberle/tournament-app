import React, { useEffect, useState, useRef } from "react";
import moment from "moment";

moment.locale();

export const useTimeSince = (timestamp) => {
  const [TimeSinceText, setTimeSinceText] = useState("");
  const [NextTick, setNextTick] = useState(0);
  const NextTickRef = useRef(NextTick);

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  var timer;

  useEffect(() => {
    var timer = {};
    if (NextTick >= 0) {
      timer = setTimeout(() => {
        setNextTick(NextTickTime(timestamp));
        setTimeSinceText(moment(timestamp).fromNow());
      }, NextTick);
    }
  }, [NextTick]);

  useEffect(() => {
    return timer && clearTimeout(timer);
  }, []);

  const NextTickTime = (timestamp) => {
    const dateDiff = Date.now() - timestamp;

    if (dateDiff < 60 * 60 * 1000) {
      return mod(-dateDiff, 60 * 1000);
    } else {
      return mod(-dateDiff, 60 * 60 * 1000);
    }
  };

  return TimeSinceText;
};
