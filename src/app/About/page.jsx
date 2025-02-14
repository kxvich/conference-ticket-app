import styles from "@/app/styles/About.module.scss";
function page() {
	return (
		<div className={styles.Container}>
			<p className={styles.marginbottommedium}>
				Event Ticket Booking UI – Open Source Practice Project 🎟️
			</p>{" "}
			<p className={styles.marginbottommedium}>Overview</p>{" "}
			<p className={styles.marginbottommedium}>
				This is a beginner-friendly yet practical Event Ticket Booking UI
				designed for developers to clone, explore, and build upon. The design
				focuses on a seamless, login-free ticket reservation flow, allowing
				users to book event tickets quickly and efficiently.
			</p>{" "}
			<p>
				The project consists of a three-step ticket booking flow, and developers
				can extend it further by integrating payment solutions, user
				authentication (optional), and ticket validation systems.
			</p>{" "}
			<p className={styles.marginbottommedium}>Flow & Features</p>
			<p className={styles.marginbottomsmall}>1️⃣ Ticket Selection</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Users can browse available tickets (Free & Paid).
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Ticket options are displayed in a list or card view.
			</p>
			<p className={styles.marginbottomsmall}>
				{" "}
				• For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
				details.
			</p>{" "}
			<p className={styles.marginbottommedium}>
				• For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
				payment modal.
			</p>{" "}
			<p className={styles.marginbottomsmall}>2️⃣ Attendee Details Form</p>
			<p className={styles.marginbottomsmall}>
				{" "}
				• Users input their Name, Email, and optional Phone Number.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Profile picture upload option with preview functionality.
			</p>{" "}
			<p className={styles.marginbottommedium}>
				• Ticket summary is visible to ensure users review their details before
				submission.
			</p>
			<p className={styles.marginbottomsmall}> 3️⃣ Payment or Success Page </p>
			<p className={styles.marginbottomsmall}>
				• If the ticket is free, the user is taken directly to the Ticket
				Confirmation Page.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• If the ticket is paid, developers can integrate Stripe, Paystack, or
				Flutterwave to process payments before showing the confirmation page.
			</p>
			<p className={styles.marginbottomsmall}>
				• Upon successful booking, users should receive: • A visual ticket
				preview with a unique QR Code.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• An option to download the ticket as PDF or save it to their device.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• An email confirmation containing ticket details.
			</p>
			<p className={styles.marginbottommedium}>How to Build This 🚀</p>
			<p className={styles.marginbottommedium}>
				This UI can be implemented using: 📌 Frontend (Next.js or React)
			</p>{" "}
			<p className={styles.marginbottomsmall}>• Component Breakdown:</p>{" "}
			<p className={styles.marginbottomsmall}>
				• TicketCard.tsx → Displays ticket details
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• AttendeeForm.tsx → Captures user details
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• PaymentModal.tsx → Handles payment processing
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• SuccessScreen.tsx → Shows the final ticket preview • State Management:
				React’s Context API, Zustand, or Redux (if needed).
			</p>{" "}
			<p className={styles.marginbottommedium}>
				• File Handling: Users should be able to upload images (profile picture
				for ticket) using Firebase Storage, Cloudinary, or local preview with
				URL.createObjectURL().
			</p>{" "}
			<p className={styles.marginbottomsmall}>📌 Backend (Optional)</p>{" "}
			<p className={styles.marginbottomsmall}>
				• If persistence is required, a backend can be built using:
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Node.js & Express or Firebase Functions
			</p>{" "}
			<p className={styles.marginbottommedium}>
				• Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
				records
			</p>{" "}
			<p className={styles.marginbottomsmall}>📌 Payment Integration</p>{" "}
			<p className={styles.marginbottomsmall}>
				• For paid events, developers should integrate:
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Stripe Checkout (for international transactions)
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Paystack or Flutterwave (for African users)
			</p>{" "}
			<p className={styles.marginbottomsmall}>What You’ll Learn 🧑‍💻</p>
			<p className={styles.marginbottomsmall}>
				• File handling & validation (profile picture uploads).
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Dynamic UI updates based on ticket selection.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Persisting bookings using local state or a backend.
			</p>
			<p className={styles.marginbottomsmall}>
				• Integrating payment gateways for ticket purchases.
			</p>{" "}
			<p className={styles.marginbottomsmall}>
				• Generating & validating QR Codes for event check-in (Advanced).
			</p>{" "}
			<p className={styles.marginbottomsmall}>Need Help? Reach Out!</p> 💬 💛
			Enjoy Design File Github code
			<div className={styles.ButtonContainer}>
				<button>Design File</button>
				<button>Github Code</button>
			</div>
		</div>
	);
}

export default page;
