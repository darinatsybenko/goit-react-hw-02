import css from "./Feedback.module.css";
const Feedback = ({ counterNumber, total, positiveFeedback }) => {
  return (
    <div>
      <ul className={css.feedback}>
        <li>Good: {counterNumber.good}</li>
        <li>Neutral: {counterNumber.neutral}</li>
        <li>Bad: {counterNumber.bad}</li>
        <li>
          Total: <b>{total}</b>
        </li>
        <li>
          Positive: <b>{positiveFeedback}%</b>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
