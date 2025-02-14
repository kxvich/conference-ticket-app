"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function useAppContext() {
	return useContext(AppContext);
}

export function AppProvider({ children }) {
	const [ticketType, setTicketType] = useState("Regular");
	const [ticketNumber, setTicketNumber] = useState(1);
	const [progressBar, setProgressBar] = useState(1);
	const [currentPage, setCurrentPage] = useState("ticketSelection");

	return (
		<AppContext.Provider
			value={{
				ticketType,
				setTicketType,
				ticketNumber,
				setTicketNumber,
				progressBar,
				setProgressBar,
				currentPage,
				setCurrentPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
