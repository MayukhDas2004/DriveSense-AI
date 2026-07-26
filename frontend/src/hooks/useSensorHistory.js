import { useEffect, useState } from "react";

export default function useSensorHistory(currentValue) {
  const [history, setHistory] = useState(
    Array(10).fill(currentValue)
  );

  useEffect(() => {
    setHistory((prev) => {
      const updated = [...prev, currentValue];

      if (updated.length > 10) {
        updated.shift();
      }

      return updated;
    });
  }, [currentValue]);

  return history;
}