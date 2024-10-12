import { GameController } from "@/core/controllers/GameController";
import { formatClock } from "@/lib/formatClock";
import React, { useEffect, useState } from "react";

interface StopwatchProps {
  gameController: GameController;
  yourTimeIsOver: (item: boolean) => void;
}

const Stopwatch = ({ gameController, yourTimeIsOver }: StopwatchProps) => {
  const [timer, setTimer] = useState(gameController.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timer <= 0) {
    yourTimeIsOver(true);
  }

  return (
    <span className={`${timer < 180 ? "text-red-500" : "text-primary"}`}>
      {formatClock(timer)}
    </span>
  );
};

export default Stopwatch;
