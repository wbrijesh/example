import { useState, useEffect } from "react";

const Uncle = ({ buttonClicks }: { buttonClicks: number }) => {
  const [lastRendered, setLastRendered] = useState<any>(null);
  useEffect(() => {
    setLastRendered(new Date());
  }, []);

  useEffect(() => {
    setLastRendered(new Date());
  }, [buttonClicks]);
  return (
    <div className="border border-gray-500 p-5">
      <p>Uncle</p>
      <div>Last Rendered: {JSON.stringify(lastRendered)}</div>
    </div>
  );
};

export default Uncle;
