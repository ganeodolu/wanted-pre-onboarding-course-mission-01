import React from "react";
import IssueList from "../Components/IssueList";
import IssuesProvider from "../lib/states/IssuesProvider";

const IssueListPage = () => {
  return (
    <IssuesProvider>
      <IssueList />
    </IssuesProvider>
  );
};

export default IssueListPage;
