import React, { useEffect, useState } from "react";

export const TimeSince = (timestamp) => {
  const calcTimeSince = (timestamp) => {
    //Returns {timeSince String, Next Timeout}

    const now = typeof dateParam === "object" ? dateParam : new Date(dateParam);

    const dateDiff = timestamp - now;

    if (dateDiff < 10 * 1000) {
      return ["Seconds ago", 10 * 1000 - datediff];
    } else if (dateDiff < 55 * 1000) {
      return [
        round(dateDiff / 1000, 1) + " seconds ago",
        datediff % (10 * 1000),
      ];
    } else if (dateDiff < 55 * 60 * 1000) {
      return [
        round(dateDiff / (60 * 1000), 1) + " minutes ago",
        datediff % (60 * 1000),
      ];
    } else {
      return [0, -1];
    }
  };
};
