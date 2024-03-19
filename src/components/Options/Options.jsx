const Options = ({ handlLogButton, resetButton, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => handlLogButton("good")}>Good</button>
      <button onClick={() => handlLogButton("neutral")}>Neutral</button>
      <button onClick={() => handlLogButton("bad")}>Bad</button>
      {totalFeedback !== 0 && <button onClick={resetButton}>Reset</button>}
    </div>
  );
};

export default Options;
