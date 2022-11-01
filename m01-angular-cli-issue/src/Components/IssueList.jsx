import React, { useState, useEffect, useMemo } from "react";
import useFakeQuery from "../lib/hooks/useFakeQuery";
import useIntersect from "../lib/hooks/useIntersect";
import { useIssuesActions, useIssuesValue } from "../lib/states/IssuesProvider";
import IssueItem from "./IssueItem";

const IssueList = () => {
  const { issues, setIssues } = useIssuesValue();

  const { data, isLoading, isSuccess, isError, isLastPage, fetchData } =
    useFakeQuery();
  const [page, setPage] = useState(1);

  const issueList = useMemo(
    () => (issues ? issues.map((issue) => issue) : []),
    [issues]
  );

  const observerRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLastPage && !isLoading) {
      fetchData(page);
    }
  });

  useEffect(() => {
    console.log(issues);

    if (isSuccess) {
      setIssues((prev) => [...prev, ...data]);
      setPage((pre) => pre + 1);
    }
  }, [isSuccess]);

  return (
    <>
      {issueList.map((issueItem, idx) => {
        if (idx % 10 === 4) {
          return (
            <div
              onClick={() => window.open("https://www.wanted.co.kr/", "_blank")}
              key={idx}
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                key={idx}
              />
            </div>
          );
        } else {
          return <IssueItem issueItem={issueItem} key={issueItem.id} />;
        }
      })}
      {<div>content loading</div>}
      <div ref={observerRef}></div>
    </>
  );
};

export default IssueList;
