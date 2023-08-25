const Child = ({
  buttonClicks,
  setButtonClicks,
}: {
  buttonClicks: number;
  setButtonClicks: (x: number) => void;
}) => {
  return (
    <div className="border border-gray-500 p-5">
      <p>Child</p>
      <button
        onClick={() => setButtonClicks(buttonClicks + 1)}
        className="bg-gray-300 p-2"
      >
        Click me to update uncle !!
      </button>
    </div>
  );
};

export default Child;
