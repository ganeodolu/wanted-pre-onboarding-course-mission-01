import { createContext, useContext, useMemo, useState } from "react";
import * as issue from "../api/issue";

const IssuesValueContext = createContext(undefined);
const IssuesActionsContext = createContext(undefined);

const IssuesProvider = ({ children }) => {
	const [issues, setIssues] = useState([]);
	const actions = useMemo(
		() => ({
			async getList() {
				const data = await issue.getIssues();
				console.log(data)
				setIssues(data);
			},
		}),
		[]
	);

	return (
		<IssuesActionsContext.Provider value={actions}>
			<IssuesValueContext.Provider value={issues}>
				{children}
			</IssuesValueContext.Provider>
		</IssuesActionsContext.Provider>
	);
};

export const useIssuesValue = () => {
	const value = useContext(IssuesValueContext);
	if (value === undefined) {
		throw new Error("useIssuesValue should be used within IssuesProvider");
	}
	return value;
};

export const useIssuesActions = () => {
	const value = useContext(IssuesActionsContext);
	if (value === undefined) {
		throw new Error("useIssuesActions should be used within IssuesProvider");
	}
	return value;
};

export default IssuesProvider;