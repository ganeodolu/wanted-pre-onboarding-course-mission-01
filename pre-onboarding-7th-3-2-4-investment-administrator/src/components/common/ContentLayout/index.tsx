import { FunctionComponent, PropsWithChildren } from "react";

const ContentLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main className="w-full h-4/5 bg-myGray ">{children} </main>;
};

export default ContentLayout;
