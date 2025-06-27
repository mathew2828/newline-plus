import React, { useRef, useEffect } from "react";
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
} from "@mui/material";
import DrawerAppBar from "./components/AppBar";
import "./Font.css";
import nlpOffsetLogo from "./assets/nlp_offset.svg";
import ledImage from "./assets/LED.png";
import displayImage from "./assets/Display.png"
import tarpImage from "./assets/Tarp.png"


// Updated video import - try different approaches
import videoSource from "./assets/HomeBG.mp4"; // Use import instead of string path

function Home() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const videoRef = useRef<HTMLVideoElement>(null);

	// Ensure video plays on component mount
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.log("Video autoplay failed:", error);
			});
		}
	}, []);

	const products = [
		{
			title: "LED WALL",
			description:
				"High-resolution LED displays perfect for large-scale advertising and events. Stunning visual impact with vibrant colors.",
			image:
				ledImage,
			features: ["4K Resolution", "Outdoor Ready", "Modular Design"],
		},
		{
			title: "KIOSK",
			description:
				"Interactive digital kiosks for customer engagement and self-service solutions. Modern touch interface technology.",

			image:
				displayImage,
			features: ["Touch Screen", "24/7 Operation", "Custom Software"],
		},
		{
			title: "DIGITAL DISPLAY",
			description:
				"Versatile digital signage solutions for retail, corporate, and hospitality environments. Smart content management.",

			image:
				"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
			features: ["Cloud Based", "Real-time Updates", "Multi-format Support"],
		},
		{
			title: "TARPAULIN PRINTER",
			description:
				"Professional large-format printing solutions for banners, signage, and promotional materials. Premium quality output.",

			image:
				tarpImage,
			features: ["Large Format", "Weather Resistant", "Fast Production"],
		},
	];

	return (
		<DrawerAppBar>
			<Box>
				{/* Hero Section with Video Background */}
				<Box
					sx={{
						position: "relative",
						width: "100vw",
						height: "100vh",
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						m: 0,
						p: 0,
					}}
				>
					{/* Video Background */}
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
						onError={(e) => {
							console.error("Video failed to load:", e);
						}}
						onLoadStart={() => {
							console.log("Video started loading");
						}}
						onCanPlay={() => {
							console.log("Video can play");
						}}
					>
						<source src={videoSource} type="video/mp4" />
						<source src="./assets/HomeBG.webm" type="video/webm" />
						<source src="./assets/HomeBG.ogv" type="video/ogg" />
						Your browser does not support the video tag.
					</video>

					{/* Fallback Background */}
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background: "linear-gradient(135deg, #0A1628 0%, #1e3a8a 100%)",
							zIndex: -3,
						}}
					/>

					{/* Overlay */}
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

					{/* Hero Content */}
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
								letterSpacing: "0.1em",
								mb: 2,
								fontSize: isMobile ? "3rem" : "6rem",
								fontFamily: "Disolve_regular",
							}}
						>
							NEWLINE PLUS
						</Typography>
						<Typography
							variant="h4"
							sx={{
								color: "rgba(255,255,255,0.9)",
								textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
								mb: 4,
								maxWidth: "700px",
								mx: "auto",
								fontFamily: "Poppins-Light",
							}}
						>
							Innovation in Digital Display Solutions
						</Typography>
						<Button
							variant="outlined"
							size="large"
							sx={{
								color: "white",
								px: 4,
								py: 1.5,
								borderRadius: 1.5,
								fontSize: "1.1rem",
								"&:hover": {
									backgroundColor: "#4BA8FF",
									transform: "translateY(-2px)",
									boxShadow: "white",
								},
								transition: "all 0.3s ease",
							}}
						>
							See Products
						</Button>
					</Container>
				</Box>

				{/* Featured Products Section */}
				<Box sx={{ backgroundColor: "white", m: 0, p: 0 }}>
					<Container maxWidth={false} disableGutters sx={{ px: 0 }}>
						<Box sx={{ textAlign: "center", mb: 6, paddingTop: "6rem" }}>
							<Typography
								variant="h2"
								sx={{
									fontWeight: "bold",
									mb: 2,
									color: "#333",
									fontFamily: "Poppins-SemiBold",
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
								m: 0,
								width: "100%",
								paddingTop: "3rem",
								paddingBottom: "9rem",
								placeContent: "center",
							}}
						>
							{products.map((product) => (
								<Grid
									item
									xs={12}
									sx={{ display: "flex", justifyContent: "center" }}
								>
									<Card
										sx={{
											width: "650px",
											height: "100%",
											borderRadius: 3,
											overflow: "hidden",
											transition: "all 0.3s ease",
											"&:hover": {
												transform: "translateY(-8px)",
												boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
											},
										}}
									>
										<CardMedia
											component="img"
											height="500"
											image={product.image}
											alt={product.title}
											sx={{
												transition: "transform 0.3s ease",
												"&:hover": {
													transform: "scale(1.05)",
												},
											}}
										/>
										<CardContent>
											<Box
												sx={{ display: "flex", alignItems: "center", mb: 2 }}
											>
												<Typography
													variant="h5"
													sx={{ ml: 2, fontWeight: "bold", fontFamily: 'Poppins-SemiBold' }}
												>
													{product.title}
												</Typography>
											</Box>
											<Typography
												variant="body1"
												sx={{ color: "#666", mb: 3, lineHeight: 1.6, fontFamily: 'Poppins-Regular', paddingX: '1rem' }}
											>
												{product.description}
											</Typography>
											<Box sx={{ mb: 3 }}>
												{product.features.map((feature, idx) => (
													<Chip
														key={idx}
														label={feature}
														size="medium"
														sx={{
                              py: '1rem',
                              borderRadius: 2,
															backgroundColor: "#f0f8ff",
															color: "#1976d2",
															mr: 2,
															mb: 1,
															fontSize: "1.03rem",
														}}
													/>
												))}
											</Box>
										
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>

						<Box
							sx={{
                paddingBottom: 20,
								backgroundColor: "#ffffff",
								textAlign: "center",
								px: 2,
							}}
						>
							<Box
								component="img"
								src={nlpOffsetLogo}
								alt="Triangle Logo"
								sx={{
									height: 200,
									mb: 3,
								}}
							/>

							<Typography
								variant="h1"
								sx={{
									fontFamily: "Disolve_regular", // 👈 ensure this matches your loaded font
									fontSize: "3rem",
									fontWeight: 400,
									mb: 3,
								}}
							>
								NEwLINE PLUS
							</Typography>
							<Typography
								variant="body1"
								sx={{
									maxWidth: "750px",
									mx: "auto",
									color: "#333",
									fontFamily: "Poppins-Light",
									lineHeight: 1.8,
								}}
							>
								Lorem ipsum dolor sit amet consectetur. Suspendisse proin
								interdum egestas augue ultrices pretium diam lorem id. Egestas
								turpis non consectetur a consectetur ut nec diam. Ut nunc vel
								dui donec convallis et amet ornare. Vestibulum placerat
								adipiscing convallis integer.
							</Typography>
						</Box>
					</Container>
				</Box>

				{/* Call to Action Section */}
				<Box
					sx={{
						background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
						color: "white",
						m: 0,
						p: 0,
					}}
				>
					<Container maxWidth="lg" sx={{ px: 2 }}>
						<Box sx={{ textAlign: "center" }}>
							<Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
								Ready to Transform Your Visual Communication?
							</Typography>
							<Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
								Contact us today to discuss your digital display and printing
								needs
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "white",
									color: "#1976d2",
									px: 4,
									py: 1.5,
									borderRadius: 2,
									fontSize: "1.1rem",
									"&:hover": {
										backgroundColor: "#f5f5f5",
										transform: "translateY(-2px)",
										boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
									},
									transition: "all 0.3s ease",
								}}
							>
								Get Quote
							</Button>
						</Box>
					</Container>
				</Box>
			</Box>
		</DrawerAppBar>
	);
}

export default Home;
