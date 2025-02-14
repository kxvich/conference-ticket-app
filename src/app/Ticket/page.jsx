"use client";

import styles from "@/app/styles/Ticket.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMediaQuery from "@/app/Hooks/useMediaQuery";

function Ticket() {
	const [formData, setFormData] = useState(() => {
		if (typeof window !== "undefined") {
			const storedData = localStorage.getItem("formData");
			return storedData ? JSON.parse(storedData) : {};
		}
		return {};
	});

	const [ticketType, setTicketType] = useState(() => {
		if (typeof window !== "undefined") {
			const storedData = localStorage.getItem("ticketType");
			return storedData || "Regular";
		}
	});
	const [ticketNumber, setTicketNumber] = useState(() => {
		if (typeof window !== "undefined") {
			const storedData = localStorage.getItem("ticketNumber");
			return storedData || "1";
		}
	});
	const [imageUrl, setImageUrl] = useState("");
	const isMobile = useMediaQuery("(max-width: 31.25rem)");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setImageUrl(localStorage.getItem("imageUrl") || "");
		}
	}, []);

	return (
		<div className={styles.Container}>
			<div className={styles.topContainer}>
				<div className={styles.topContainerContent}>
					<h2>Ready</h2>
					<p>Step 3/3</p>
				</div>
				<div className={styles.progressBar}>
					<div style={{ width: "100%" }} className={styles.innerLine}></div>
				</div>
			</div>
			<main className={styles.Main}>
				<div className={styles.MainHeader}>
					<h1 className={styles.Heading}>Your Ticket Is Booked!</h1>
					<p>check your email for a copy or you can download</p>
				</div>
				<div className={styles.MainTicketContainer}>
					<Image
						src={"/bg.svg"}
						width={isMobile ? 600 : 520}
						height={isMobile ? 600 : 520}
						alt="ticketContainer"
					/>
					<div className={styles.MainTicketContent}>
						<div className={styles.MainTicketContentHeader}>
							<h2>Techember Fest "25</h2>
							<p>📍 04 Rumens road, ikoyi, Lagos</p>
							<p>📅 March 15, 2025 | 7:00 PM </p>
						</div>
						<div className={styles.MainTicketContentImageContainer}>
							<Image
								style={{ objectFit: "cover" }}
								src={imageUrl}
								width={100}
								height={110}
								
								alt="userImage"
							/>
						</div>
						<div className={styles.MainTicketContentDetails}>
							<div className={styles.MainTicketContentDetailsGroup1}>
								<div
									style={{ borderRight: "1px solid #19768641", width: "50%" }}
								>
									<p> Name</p>
									<p>{formData?.name}</p>
								</div>
								<div
									style={{
										width: "50%",
										paddingLeft: ".5rem",
										paddingRight: ".5rem",
									}}
								>
									<p>Email</p>
									<p>{formData?.email}</p>
								</div>
							</div>
							<div className={styles.MainTicketContentDetailsGroup2}>
								<div
									style={{ borderRight: "1px solid #19768641", width: "50%" }}
								>
									<p> Ticket Type</p>
									<p>{ticketType}</p>
								</div>
								<div style={{ width: "50%", paddingLeft: ".5rem" }}>
									<p>Ticket for:</p>
									<p>{ticketNumber}</p>
								</div>
							</div>
							<div className={styles.MainTicketContentDetailsGroup3}>
								<p>Special request</p>
								<p>{formData?.request}</p>
							</div>
						</div>
					</div>
					<div className={styles.MainBarcodeContainer}>
						<Image
							src={"/barCode.svg"}
							width={ 200}
							height={100}
							alt="barcode"
						/>
					</div>
				</div>
			</main>
			<div className={styles.ButtonContainer}>
				<button>Book Another Ticket</button>
				<button>Download Ticket</button>
			</div>
		</div>
	);
}

export default Ticket;
