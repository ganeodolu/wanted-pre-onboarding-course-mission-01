import React, { useState } from "react";
import * as issue from "../api/issue";
import { CONSTANTS } from "../constants/constants";

const useFakeQuery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (page = 0) => {
    setIsSuccess(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const issues = await issue.getIssues(page);
      setIsSuccess(true);
      setIsLoading(false);
      setData(issues);
      if (issues.length < CONSTANTS.PER_PAGE) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
      return;
    } catch (e) {
      setIsError(true);
      setIsSuccess(true);
      setIsLoading(false);
      setData([]);
    }
  };
  return { data, isLoading, isSuccess, isError, isLastPage, fetchData };
};

export default useFakeQuery;
