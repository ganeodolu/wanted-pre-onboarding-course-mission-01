import React, { useEffect } from "react";
import { useIssuesActions, useIssuesValue } from "../lib/states/IssuesProvider";
import IssueItem from "./IssueItem";

const IssueList = () => {
  const issueList = useIssuesValue();
  const { getList } = useIssuesActions();
  console.log(issueList);

  useEffect(() => {
    const getIssues = async () => {
      getList();
    };
    getIssues();
  }, []);
  return (
    <>
      {issueList.map((issueItem) => {
        return <IssueItem issueItem={issueItem} key={issueItem.id} />;
      })}
    </>
  );
};

export default IssueList;
