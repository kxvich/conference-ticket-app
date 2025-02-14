import NavBar from "./components/NavBar";
import { AppProvider } from "./contexts/AppContext";
import "./globals.scss";

export const metadata = {
	title: "ticketer",
	description: "a ticket generator",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AppProvider>
					<NavBar />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
