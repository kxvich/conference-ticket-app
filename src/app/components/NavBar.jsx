"use client";

import Image from "next/image";
import styles from "@/app/styles/NavBar.module.scss";
import { useRouter } from "next/navigation";

function NavBar() {
	const router = useRouter();
	return (
		<div className={styles.navBar}>
			<div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
				<Image src={"/ticklogo.png"} width={50} height={20} alt="logo-image" />
			</div>

			<ul>
				<li>Events</li>
				<li>My Tickets</li>
				<li>About Project</li>
			</ul>

			<button>MY TICKETS &rarr;</button>
		</div>
	);
}

export default NavBar;
