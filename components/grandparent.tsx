import { useState } from "react";
import Parent from "@/components/parent";
import Uncle from "@/components/uncle";

const GrandParent = () => {
  const [buttonClicks, setButtonClicks] = useState<number>(0);
  return (
    <div className="border border-gray-500 p-5">
      <p>Grand Parent</p>
      <Parent buttonClicks={buttonClicks} setButtonClicks={setButtonClicks} />
      <Uncle buttonClicks={buttonClicks} />
    </div>
  );
};

export default GrandParent;
