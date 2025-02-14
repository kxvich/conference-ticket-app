"use client";

import Image from "next/image";
import styles from "@/app/styles/NavBar.module.scss";
import { useRouter } from "next/navigation";
import { useAppContext } from "../contexts/AppContext";

function NavBar() {
	const router = useRouter();
	const { isOpen, setIsOpen } = useAppContext();
	
	return (
		<div className={styles.navBar}>
			<div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
				<Image src={"/ticklogo.png"} width={50} height={20} alt="logo-image" />
			</div>

			<div onClick={() => setIsOpen(!isOpen)} className={styles.Menu}>
				{!isOpen && (
					<Image src={"/bars-solid.svg"} width={30} height={30} alt="menu" />
				)}
				{isOpen && (
					<Image
					style={{rotate: "135deg"}}
						src={isOpen ? "plus-solid.svg" : "/bars-solid.svg"}
						width={30}
						height={30}
						alt="menu"
					/>
				)}
			</div>

			<ul className={styles.navBarDesktopList}>
				<li>Events</li>
				<li>My Tickets</li>
				<li onClick={() => router.push("/About")}>About Project</li>
			</ul>

			<button className={styles.navBarDesktopButton}>MY TICKETS &rarr;</button>

			{isOpen && (
				<div className={styles.mobileNav}>
					<ul className={styles.mobileNavList}>
						<li className={styles.mobileNavListItem}>Events</li>
						<li className={styles.mobileNavListItem}>My Tickets</li>
						<li
							className={styles.mobileNavListItem}
							onClick={() => router.push("/About")}
						>
							About Project
						</li>
					</ul>

					<button className={styles.mobileNavTickets}>MY TICKETS &rarr;</button>
				</div>
			)}
		</div>
	);
}

export default NavBar;
