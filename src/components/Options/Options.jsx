import css from "./Options.module.css";
const Options = ({ handlLogButton, resetButton, totalFeedback }) => {
  return (
    <div>
      <button className={css.button} onClick={() => handlLogButton("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => handlLogButton("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => handlLogButton("bad")}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button className={css.button} onClick={resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
