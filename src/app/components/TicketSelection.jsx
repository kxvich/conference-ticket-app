"use client";

import styles from "@/app/styles/TicketSelection.module.scss";
import { useAppContext } from "../contexts/AppContext";
import { useRouter } from "next/navigation";

function TicketSelection() {
	const router = useRouter();
	const { ticketType, setTicketType, setTicketNumber, ticketNumber } =
		useAppContext();

	function reset() {
		setTicketType("regular");
		setTicketNumber(1);
	}
	return (
		<div className={styles.Container}>
			<div className={styles.Header}>
				<div className={styles.HeaderContent}>
					<h2>Ticket Selection</h2>
					<p>Step 1/3</p>
				</div>
				<div className={styles.progressBar}>
					<div style={{ width: "33.3%" }} className={styles.innerLine}></div>
				</div>
			</div>
			<main className={styles.Main}>
				<div className={styles.MainTop}>
					<h1>Techember Fest "25</h1>
					<p>
						Join us for an unforgettable experience at techember! Secure you
						spot now.
					</p>
					<p>📍04 Rumens road, ikoyi, Lagos || March 15 2025 | 7: 00 PM</p>
				</div>
				<div className={styles.MainLine}></div>
				<div className={styles.MainTypeSelection}>
					<h3 className={styles.TypeSelectionHeading}>Select Ticket Type:</h3>
					<div className={styles.MainBoxContainer}>
						<div
							style={{
								backgroundColor: ticketType === "Regular" ? "#12464e" : "",
							}}
							onClick={() => {
								setTicketType("Regular");
								if (typeof window !== "undefined") {
									localStorage.setItem("ticketType", "Regular");
								}
							}}
							className={styles.MainBox}
						>
							<h2>Free</h2>
							<h3>REGULAR ACCESS</h3>
							<h4>20/52</h4>
						</div>
						<div
							style={{
								backgroundColor: ticketType === "VIP" ? "#12464e" : "",
							}}
							onClick={() => {
								setTicketType("VIP");
								if (typeof window !== "undefined") {
									localStorage.setItem("ticketType", "VIP");
								}
							}}
							className={styles.MainBox}
						>
							<h2>$150</h2>
							<h3>VIP ACCESS</h3>
							<h4>20/52</h4>
						</div>
						<div
							style={{
								backgroundColor: ticketType === "VVIP" ? "#12464e" : "",
							}}
							onClick={() => {
								setTicketType("VVIP");
								if (typeof window !== "undefined") {
									localStorage.setItem("ticketType", "VVIP");
								}
							}}
							className={styles.MainBox}
						>
							<h2>$150</h2>
							<h3>VVIP ACCESS</h3>
							<h4>20/52</h4>
						</div>
					</div>
				</div>
				<div className={styles.MainNumberOfTickets}>
					<h3>Number Of Tickets</h3>
					<select
						value={ticketNumber}
						onChange={(e) => {
							setTicketNumber(e.target.value);
							if (typeof window !== "undefined") {
								localStorage.setItem("ticketNumber", e.target.value);
							}
						}}
						name="ticketNumber"
						id="ticketNumber"
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<div className={styles.MainButtonContainer}>
					<button onClick={reset}>Cancel</button>
					<button onClick={() => router.push("/AttendeeDetails")}>Next</button>
				</div>
			</main>
		</div>
	);
}

export default TicketSelection;
