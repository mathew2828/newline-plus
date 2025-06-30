import React, { useRef, useEffect, useState } from "react";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Button,
	Chip,
	useTheme,
	useMediaQuery,
	Grow,
	Slide,
} from "@mui/material";
import "./Font.css";
import nlpOffsetLogo from "./assets/nlp_offset.svg";
import ledImage from "./assets/LED.png";
import displayImage from "./assets/Display.png";
import tarpImage from "./assets/Tarp.png";
import interactImage from "./assets/Inter.png";
import Zoom from "@mui/material/Zoom";
import videoSource from "./assets/HomeBG.mp4";
import { useNavigate } from "react-router-dom";

function Home() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.log("Video autoplay failed:", error);
			});
		}
	}, []);

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setChecked(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	// Add to your component's state and refs:
	const logoRef = useRef(null);
	const [logoVisible, setLogoVisible] = useState(false);

	// Extend useEffect to observe logoRef
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target === logoRef.current && entry.isIntersecting) {
						setLogoVisible(true);
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (logoRef.current) observer.observe(logoRef.current);

		return () => {
			if (logoRef.current) observer.unobserve(logoRef.current);
		};
	}, []);

	const navigate = useNavigate();

	const handleSeeProductsClick = () => {
		navigate("/products");
	};

	const products = [
		{
			title: "LED WALL",
			description:
				"High-resolution LED displays perfect for large-scale advertising and events. Stunning visual impact with vibrant colors.",
			image: ledImage,
			features: ["High-resolution wall display", "Outdoor ready", "Modular design", "High luminance"],
		},
		{
			title: "KIOSK",
			description:
				"Interactive digital kiosk for customer engagement and self-service solutions. Modern touch interface technology.",
			image: displayImage,
			features: [
				"43”-65” inch LCD Display",
				"Screen Ratio: 16:9",
				"Intel Core i5 / i7",
				"RAM: up to 16GB",
				"Storage: up to 512GB",
			],
		},
		{
			title: "INTERACTIVE SMARTBOARD",
			description:
				"A UHD display that blends sleek design with smart functionality. Its ultra-thin metal frame and anti-glare toughened glass ensure durability and clear visibility. With high-precision infrared touch, it offers smooth interaction for classrooms or offices",
			image: interactImage,
			features: [
				"Modular design",
				"High-precision infrared touch",
				"Optimized sound design",
				"Ultra-thin design",
				"Built-in smart features"
			],
		},
		{
			title: "TARPAULIN PRINTER",
			description:
				"Professional large-format printing solutions for banners, signage, and promotional materials. Premium quality output.",
			image: tarpImage,
			features: ["High-resolution prints", "Durable materials", "Fast and efficient printing"],
		},
	];

	// Track visibility of each card for Grow animation
	const [visibleCards, setVisibleCards] = useState([]);
	const cardRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.getAttribute("data-index"));
					if (entry.isIntersecting) {
						setVisibleCards((prev) => {
							const updated = [...prev];
							updated[index] = true;
							return updated;
						});
					}
				});
			},
			{ threshold: 0.3 }
		);

		cardRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			cardRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, []);

	return (
		<Box>
			{/* Hero Section */}
			<Box
				sx={{
					position: "relative",
					width: "100vw",
					height: "100vh",
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						zIndex: -2,
					}}
				>
					<source src={videoSource} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background:
							"linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
						zIndex: -1,
					}}
				/>

				<Zoom in={checked} timeout={800}>
					<Container
						maxWidth="lg"
						sx={{ textAlign: "center", zIndex: 1, px: 2 }}
					>
						<Typography
							variant={isMobile ? "h2" : "h1"}
							sx={{
								color: "white",
								fontWeight: "bold",
								textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
								mb: 2,
								fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem" },
								fontFamily: "Disolve_regular",
							}}
						>
							NEWLINE PLUS
						</Typography>
						<Typography
							variant="h4"
							sx={{
								color: "rgba(255,255,255,0.9)",
								mb: 4,
								maxWidth: "700px",
								mx: "auto",
								fontFamily: "Poppins-Light",
								fontSize: {
									xs: "0.8rem",
									sm: "1rem",
									md: "1.5rem",
									lg: "2rem",
								},
								transition: "transform 0.3s ease",
							}}
						>
							Innovation in Digital Display Solutions
						</Typography>
						<Button
							variant="outlined"
							size="large"
							onClick={handleSeeProductsClick}
							sx={{ color: "white", px: 4, py: 1.5, borderRadius: 1.5 }}
						>
							See Products
						</Button>
					</Container>
				</Zoom>
			</Box>

			{/* Featured Products */}
			<Box sx={{ backgroundColor: "white", textAlign: "center" }}>
				<Container
					maxWidth={false}
					disableGutters
					sx={{ px: { xs: "1.4rem", sm: "3rem", md: "4rem" } }}
				>
					<Box sx={{ mb: 6, paddingTop: "6rem" }}>
						<Typography
							variant="h2"
							sx={{
								fontWeight: "bold",
								mb: 2,
								color: "#333",
								fontFamily: "Poppins-SemiBold",
								fontSize: {
									xs: "2.5rem",
									sm: "3rem",
									md: "3.8rem",
									lg: "4.2rem",
								},
								transition: "transform 0.3s ease",
							}}
						>
							Featured Products
						</Typography>
						<Typography
							variant="h6"
							sx={{
								color: "#666",
								maxWidth: "800px",
								mx: "auto",
								fontFamily: "Poppins-Light",
								fontSize: {
									xs: "0.8rem",
									sm: "1rem",
									md: "1.2rem",
									lg: "1.3rem",
								},
								transition: "transform 0.3s ease",
							}}
						>
							Discover our comprehensive range of digital display and printing
							solutions designed to elevate your business presence
						</Typography>
					</Box>

					<Grid
						container
						spacing={4}
						sx={{
							paddingBottom: { xs: "6rem", md: "9rem" },
							px: { xs: "1rem", lg: "10rem" },
							placeContent: "center",
						}}
					>
						{products.map((product, index) => (
							<Grid item key={index} sx={{ display: "flex" }} textAlign="left">
								<div
									ref={(el) => (cardRefs.current[index] = el)}
									data-index={index}
									style={{ width: "100%" }}
								>
									<Grow in={visibleCards[index]} timeout={1000}>
										<Card
											sx={{
												maxWidth: { sm: "800px", md: "380px", lg: "480px" },
												height: "100%",
												borderRadius: 3,
												overflow: "hidden",
												transition: "all 0.4s ease",
												"&:hover": {
													transform: "translateY(-8px)",
													boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
												},
											}}
										>
											<CardMedia
												component="img"
												image={product.image}
												alt={product.title}
												sx={{
													width: "100%",
													height: { xs: 200, sm: 300, md: 300 },
													objectFit: "cover",
													transition: "transform 0.3s ease",
													"&:hover": { transform: "scale(1.05)" },
												}}
											/>
											<CardContent>
												<Box
													sx={{ display: "flex", alignItems: "center", mb: 2 }}
												>
													<Typography
														variant="h5"
														sx={{
															ml: 2,
															fontWeight: "bold",
															fontFamily: "Poppins-SemiBold",
															fontSize: {
																xs: "1.2rem",
																sm: "1.5",
																md: "1.6rem",
																lg: "1.7rem",
															},
															transition: "all 0.4s ease",
														}}
													>
														{product.title}
													</Typography>
												</Box>
												<Typography
													variant="body1"
													sx={{
														color: "#666",
														mb: 3,
														lineHeight: 1.6,
														fontFamily: "Poppins-Regular",
														paddingX: "1rem",
														fontSize: {
															xs: "0.75rem",
															sm: "0.9rem",
															md: "0.95rem",
															lg: "1rem",
														},
														transition: "all 0.4s ease",
													}}
												>
													{product.description}
												</Typography>
												<Box sx={{ mb: 3, marginX: 2 }}>
													{product.features.map((feature, idx) => (
														<Chip
															key={idx}
															label={feature}
															size="medium"
															sx={{
																fontFamily: "Poppins-Light",
																py: "1rem",
																borderRadius: 2,
																backgroundColor: "#4BA8FF",
																color: "#ffffff",
																mr: 2,
																mb: 1,
																fontSize: {
																	xs: "0.65rem",
																	sm: "0.75rem",
																	md: "0.8rem",
																	lg: "0.9rem",
																},
																transition: "all 0.4s ease",
															}}
														/>
													))}
												</Box>
											</CardContent>
										</Card>
									</Grow>
								</div>
							</Grid>
						))}
					</Grid>

					{/* company logo */}
					<Box
						ref={logoRef}
						sx={{
							paddingBottom: 20,
							backgroundColor: "#ffffff",
							textAlign: "center",
							px: 2,
						}}
					>
						<Slide direction="up" in={logoVisible} timeout={1200}>
							<Box>
								<Box
									component="img"
									src={nlpOffsetLogo}
									alt="Triangle Logo"
									sx={{ height: { xs: 90, sm: 100, md: 150, lg: 200 }, mb: 3 }}
								/>
								<Typography
									variant="h1"
									sx={{
										fontFamily: "Disolve_regular",
										fontWeight: 400,
										mb: 3,
										fontSize: {
											xs: "2.1rem",
											sm: "3rem",
											md: "3.8rem",
											lg: "3.9rem",
										},
										transition: "all 0.4s ease",
									}}
								>
									NEWLINE PLUS
								</Typography>
								<Typography
									variant="body1"
									sx={{
										color: "#666",

										lineHeight: 1.6,
										fontFamily: "Poppins-Regular",
										paddingX: { md: "8rem", lg: "20rem" },
										fontSize: {
											xs: "0.75rem",
											sm: "0.9rem",
											md: "0.95rem",
											lg: "1rem",
										},
										transition: "all 0.4s ease",
									}}
								>
									Newline Plus aims to revolutionize the way businesses
									communicate visually. By offering cutting-edge digital display
									and large-format printing solutions, we empower brands to make
									bold, lasting impressions in both physical and digital spaces.
									<br />
									<br />
									Discover our comprehensive range of digital display and
									printing solutions designed to elevate your business presence.
									Whether you're showcasing a product, guiding customers, or
									broadcasting key information, Newline Plus provides the tools
									to do it with clarity, style, and impact.
								</Typography>
							</Box>
						</Slide>
					</Box>
				</Container>
			</Box>

			{/* Call to Action */}
			<Box sx={{ background: "#00519C", color: "white" }}>
				<Container
					maxWidth="lg"
					sx={{ px: 2, py: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" } }}
				>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="h6"
							sx={{
								fontFamily: "Poppins-Regular",
								mb: 2,
								fontSize: {
									xs: "1.2rem",
									sm: "1.5rem",
									md: "1.8rem",
									lg: "2rem",
								},
							}}
						>
							Ready to Transform Your Visual Communication?
						</Typography>
						<Typography
							variant="body1"
							sx={{
								px: "4rem",
								mb: 4,
								opacity: 0.9,
								fontFamily: "Poppins-Regular",
								fontSize: {
									xs: "0.7rem",
									sm: "0.85rem",
									md: "0.95rem",
									lg: "1rem",
								},
							}}
						>
							Contact us today to discuss your digital display and printing
							needs
						</Typography>
						<Typography
							variant="body1"
							sx={{
								px: "4rem",
								mb: 0,
								opacity: 0.9,
								fontFamily: "Poppins-Light",
								fontSize: {
									xs: "0.7rem",
									sm: "0.85rem",
									md: "0.95rem",
									lg: "1rem",
								},
								pt: '2rem'
							}}
						>
							684 Shibei Industrial Road, Dashi Street, Panyu District, Guangzhou, Guangdong, China
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}

export default Home;
