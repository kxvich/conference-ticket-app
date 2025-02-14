"use client";

import TicketSelection from "./components/TicketSelection";
import styles from "@/app/page.module.scss";

export default function Home() {
	return <div className={styles.Home}>{<TicketSelection />}</div>;
}
