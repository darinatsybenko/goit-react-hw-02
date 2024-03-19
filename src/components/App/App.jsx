import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const App = () => {
  const ititialFeedback = { good: 0, neutral: 0, bad: 0 };
  const [counterNumber, setCounterNumber] = useState(() => {
    const feedbackLocalStorage = localStorage.getItem("feedback");
    const parsFeedback = JSON.parse(feedbackLocalStorage) ?? ititialFeedback;
    return parsFeedback;
  });

  const updateFeedback = (buttonName) => {
    console.log("buttonName: ", buttonName);
    setCounterNumber({
      ...counterNumber,
      [buttonName]: counterNumber[buttonName] + 1,
    });
  };
  const resetButton = () => {
    setCounterNumber(ititialFeedback);
  };
  const totalFeedback =
    counterNumber.good + counterNumber.neutral + counterNumber.bad;

  const positiveFeedback = Math.round(
    ((counterNumber.good + counterNumber.neutral) / totalFeedback) * 100
  );
  useEffect(() => {
    localStorage.setIrem("feedback", JSON.stringify(counterNumber));
  }, [counterNumber]);
  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        resetButton={resetButton}
        handlLogButton={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          positiveFeedback={positiveFeedback}
          counterNumber={counterNumber}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
