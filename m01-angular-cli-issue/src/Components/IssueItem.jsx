import React from "react";

const IssueItem = ({ issueItem }) => {
  const { number, title, user, updated_at, comments } = issueItem;

  return (
    <>
      <div>
        <div>
          {`#${number} ${title}`}
        </div>
        <div>
          {`${user.login} ${updated_at}`}
        </div>
      </div>
      {comments}
    </>
  );
};

export default IssueItem;
