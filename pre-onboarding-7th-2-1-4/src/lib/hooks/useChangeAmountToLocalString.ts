import { useState } from "react";

const useChangeAmountToLocalString = () => {
  const [amountLocalString, setAmountToLocalString] = useState("");

  const changeLocalString = (amount: number, local = "ko-KR") => {
    setAmountToLocalString(amount.toLocaleString(local));
    return amount.toLocaleString(local);
  };

  return { amountLocalString, changeLocalString };
};

export default useChangeAmountToLocalString;
