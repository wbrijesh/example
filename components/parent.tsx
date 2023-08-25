import Child from "@/components/child";

const Parent = ({
  buttonClicks,
  setButtonClicks,
}: {
  buttonClicks: number;
  setButtonClicks: (x: number) => void;
}) => {
  return (
    <div className="border border-gray-500 p-5">
      <p>Parent</p>
      <Child buttonClicks={buttonClicks} setButtonClicks={setButtonClicks} />
    </div>
  );
};

export default Parent;
