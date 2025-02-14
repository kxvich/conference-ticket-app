"use client";

import styles from "../styles/AttendeeDetails.module.scss";
import Image from "next/image";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../components/Loader";

function AttendeeDetails() {
	const router = useRouter();
	const [preview, setPreview] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("imageUrl") || "";
		}
	});
	const [formData, setFormData] = useState(() => {
		if (typeof window !== "undefined") {
			const storedData = localStorage.getItem("formData");
			return storedData ? JSON.parse(storedData) : {};
		}
		return {};
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({});
	const [isHovered, setIsHovered] = useState(false);
	const onDrop = useCallback(async function (acceptedFiles) {
		const file = acceptedFiles[0];
		if (file) {
			setIsLoading(true);
			const cloudinaryUrl = await uploadToCloudinary(file);
			setPreview(cloudinaryUrl);
			setIsLoading(false);
			if (typeof window !== "undefined") {
				localStorage.setItem("imageUrl", cloudinaryUrl);
			}
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/png": [".png"],
			"image/jpeg": [".jpg", ".jpeg"],
			"image/webp": [".webp"],
		},
		maxFiles: 1,
	});

	useEffect(() => {
		if (preview) {
			if (typeof window !== "undefined") {
				localStorage.setItem("imageUrl", preview);
			}
		}
	}, [preview]);

	async function uploadToCloudinary(file) {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ticketer");

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/da3k8jw6j/image/upload`,
				{ method: "POST", body: formData }
			);
			const data = await response.json();

			return data.secure_url;
		} catch (error) {
			console.error("Cloudinary Upload Error:", error);

			return null;
		}
	}

	function removeImage() {
		if (typeof window !== "undefined") {
			localStorage.removeItem("imageUrl");
			setPreview(localStorage.getItem("imageUrl"));
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prevFormData) => {
			const updatedData = { ...prevFormData, [name]: value };
			if (typeof window !== "undefined") {
				localStorage.setItem("formData", JSON.stringify(updatedData));
			}
			return updatedData;
		});
	}

	function handleValidation() {
		let newErrors = {};

		if (!preview || preview.trim() === "") {
			newErrors.preview = "image is required";
		}
		if (!formData?.name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!formData?.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Enter a valid email";
		}
		if (formData?.request.length > 200) {
			newErrors.request = "Special request must be under 200 characters";
		}

		setError(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	function handleSubmit() {
		if (preview && handleValidation()) {
			router.push("/Ticket");
		} else {
			handleValidation();
		}
	}

	return (
		<div className={styles.Container}>
			<div className={styles.topContainer}>
				<div className={styles.topContainerContent}>
					<h2>Attendee Details</h2>
					<p>Step 2/3</p>
				</div>
				<div className={styles.progressBar}>
					<div style={{ width: "66.6%" }} className={styles.innerLine}></div>
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.mainContentTop}>
					<h3>Upload Profile Photo</h3>
					<div className={styles.dropZone}>
						<div
							{...getRootProps()}
							role="button"
							tabIndex="0"
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									document.getElementById("preview").click();
								}
							}}
							style={{
								backgroundImage: `url(${preview})`,
								backgroundSize: "cover",
							}}
							className={styles.imageContainer}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{preview ? (
								isHovered ? (
									<div
										style={{
											position: "absolute",
											top: "0",
											left: "0",
											width: "100%",
											height: "100%",
											backgroundColor: "rgba(0, 0, 0, 0.5)",
										}}
									></div>
								) : (
									""
								)
							) : (
								""
							)}
							{!preview || isHovered ? (
								<Image
									style={{ zIndex: "1" }}
									src={"/cloud-download.svg"}
									height={50}
									width={50}
									alt="cloudimage"
									priority
								/>
							) : (
								""
							)}
							{isLoading && <LoadingSpinner />}
							<input
								id="preview"
								aria-describedby="preview-error"
								{...getInputProps()}
							/>
							{isDragActive ? (
								<p>Drop the image here...</p>
							) : (
								<p style={{ zIndex: "1" }}>
									{!preview || isHovered
										? "Drag & drop an image here, or click to select one"
										: ""}
								</p>
							)}
						</div>
						{error?.preview && !preview && (
							<p
								id="preview-error"
								aria-live="polite"
								style={{
									color: "red",
									fontSize: "1.5rem",
									fontFamily: "roboto, serif",
								}}
							>
								{error.preview}
							</p>
						)}
						{preview && <button onClick={removeImage}>remove image</button>}
					</div>
				</div>
				<div className={styles.MainLine}></div>
				<div className={styles.mainContentCenter}>
					<form action="">
						<div className={styles.formGroup}>
							<label htmlFor="name">Enter your name</label>
							<input
								onInput={handleChange}
								value={formData?.name}
								type="text"
								name="name"
								id="name"
								aria-describedby={error.name ? "name-error" : undefined}
							/>
							{error.name && (
								<p
									id="name-error"
									aria-live="polite"
									style={{
										color: "red",
										fontSize: "1.5rem",
										fontFamily: "roboto, serif",
									}}
								>
									{error.name}
								</p>
							)}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="email">Enter your email</label>
							<input
								onInput={handleChange}
								value={formData?.email}
								name="email"
								type="email"
								placeholder="hello@gmail.com"
								id="email"
								aria-describedby={error.email ? "email-error" : undefined}
							/>
							{error.email && (
								<p
									id="name-error"
									aria-live="polite"
									style={{
										color: "red",
										fontSize: "1.5rem",
										fontFamily: "roboto, serif",
									}}
								>
									{error.email}
								</p>
							)}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="request">Special request</label>
							<input
								style={{ height: "10rem" }}
								onInput={handleChange}
								value={formData?.request}
								type="text"
								name="request"
								id="request"
								aria-describedby={error.request ? "request-error" : undefined}
							/>
							{error.request && (
								<p
									id="name-error"
									aria-live="polite"
									style={{
										color: "red",
										fontSize: "1.5rem",
										fontFamily: "roboto, serif",
									}}
								>
									{error.request}
								</p>
							)}
						</div>
					</form>
				</div>
				<div className={styles.MainButtonContainer}>
					<button onClick={() => router.back()}>Back</button>
					<button
						onClick={handleSubmit}
						onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
					>
						Get My Free Ticket
					</button>
				</div>
			</div>
		</div>
	);
}

export default AttendeeDetails;
