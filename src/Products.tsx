import React, { useState, useEffect, useRef } from "react";
import {
	Box,
	Container,
	Typography,
	Grid,
	Chip,
	Zoom,
	Grow,
} from "@mui/material";
import ledImage from "./assets/ledNoBG.png";
import displayImage from "./assets/kioskNoBG.png";
import tarpImage from "./assets/printerNoBG.png";
import smartImage from "./assets/interNoBG.png";
// Import the ProductSpecsTable component from another file
import ProductSpecsTable from "./components/KioskTable";
// Import the InteractiveSpecsTable component
import InteractiveSpecsTable from "./components/SmartBoardTable";

const Products: React.FC = () => {
	const [visibleProducts, setVisibleProducts] = useState<boolean[]>([]);
	const productRefs = useRef<(HTMLElement | null)[]>([]);

	const products = [
		{
			title: "LED WALL",
			description: (
				<>
					Delivers high-definition clarity and vibrant colors. Perfect for
					corporate settings and indoor advertising
					<br />
					<br />
					Where to use LED Walls?
					<ul
						style={{
							marginTop: 12,
							paddingLeft: "1.2rem",
							color: "#666",
							fontSize: "clamp(0.85rem, 1vw, 1.3rem)",
							lineHeight: 1.6,
							fontFamily: "Poppins-Light",
						}}
					>
						<li>Corporate Offices</li>
						<li>Hotels & Resorts</li>
						<li>Retail Stores & Shopping</li>
						<li>Event Venues</li>
					</ul>
				</>
			),
			image: ledImage,
			features: [
				"High-resolution wall display",
				"Outdoor ready",
				"Modular design",
				"High luminance",
			],
			specifications: [
				"High-resolution Led Wall Displays For Indoor And Outdoor Use",
				"Customized Solutions For Events, Advertising, And Information Dissemination",
				"Its brightness and sharpness deliver stunning visuals, perfect for bright spaces and impactful presentations.",
				"BrightMax's high luminance keeps content sharp and eye-catching, even in direct sunlight, with weather-resistant features for reliable outdoor performance",
			],
		},
		{
			title: "Kiosk",
			description: (
				<>
					The Digital Interactive Display is a modern display device featuring a
					sleek aluminum frame with brushed edges and tempered glass. Its robust
					cold-rolled iron base ensures durability, while an ergonomic design
					enhances usability. Standardized wiring supports reliable performance,
					and customizable color options (e.g., black, silver) are available.
					The ultra-thin profile and narrow frame provide an elegant look, and
					built-in safe power connections ensure efficient operation. Ideal for
					contemporary advertising needs.
					<ul
						style={{
							marginTop: 12,
							paddingLeft: "1.2rem",
							color: "#666",
							fontSize: "clamp(0.85rem, 1vw, 1.3rem)",
							lineHeight: 1.6,
							fontFamily: "Poppins-Light",
						}}
					>
						<li>Novel and aesthetically pleasing design.</li>
						<li>Ergonomic layout with standardized wiring.</li>
						<li>
							Face frame made from aluminum profile with a brushed edge finish.
						</li>
						<li>
							Bottom shell constructed from cold-rolled iron for durability.
						</li>
						<li>Tight integration of cabinet and module components.</li>
						<li>Tempered glass cover for added protection.</li>
						<li>
							High-gloss and matte industrial paint for resistance to peeling
							and rust.
						</li>
						<li>
							Available in various colors (black, silver, etc.) with
							customization options.
						</li>
						<li>
							Built-in safe power external leads and special sockets for
							reliable operation.
						</li>
						<li>Ultra-thin body and narrow frame for an elegant appearance.</li>
					</ul>
				</>
			),
			image: displayImage,
			features: [
				'43"-65" inch LCD Display',
				"Screen Ratio: 16:9",
				"Intel Core i5 / i7",
				"RAM: up to 16GB",
				"Storage: up to 512GB",
			],
			specifications: [],
			showTable: true, // Flag to show table for this product
			tableType: "kiosk", // Specify which table to show
		},
		{
			title: "INTERACTIVE SMARTBOARD",
			description:
				"The Newline Plus interactive smartboard is a UHD display that blends sleek design with smart functionality. Its ultra-thin metal frame and anti-glare toughened glass ensure durability and clear visibility. With high-precision infrared touch, it offers smooth interaction for classrooms or offices. Built-in smart features, dual OS support, and modular connectivity make it a flexible, future-ready solution for modern collaboration.",
			image: smartImage,
			features: [
				"Modular, upgrade-friendly design",
				"High-precision infrared touch",
				"Durable backlight technology",
				"Anti-dazzling toughened glass",
				"Comprehensive connectivity",
				"Optimized sound design",
				"Ultra-thin metal design",
				"Built-in smart features",
			],
			specifications: [""],
			showTable: true, // Flag to show table for this product
			tableType: "interactive", // Specify which table to show
		},
		{
			title: "TARPAULIN PRINTER",
			description:
				"Professional large-format printing solutions for banners, signage, and promotional materials. Premium quality output with fast production capabilities for all your printing needs.",
			image: tarpImage,
			features: [
				"High-resolution prints",
				"Durable materials",
				"Fast and efficient printing",
			],
			specifications: [""],
		},
	];

	useEffect(() => {
		// Initialize visibility state
		setVisibleProducts(new Array(products.length).fill(false));

		// Set up Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = productRefs.current.indexOf(
							entry.target as HTMLElement
						);
						if (index !== -1) {
							setVisibleProducts((prev) => {
								const newState = [...prev];
								newState[index] = true;
								return newState;
							});
						}
					}
				});
			},
			{
				threshold: 0.2, // Trigger when 20% of the element is visible
				rootMargin: "0px 0px -100px 0px", // Trigger slightly before element comes into view
			}
		);

		// Observe all product elements
		productRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, [products.length]);

	return (
		<>
			<Box sx={{ textAlign: "center", mb: 8 , pt: '10rem'}}>
				<Zoom in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
					<Typography
						variant="h5"
						sx={{
							color: "#666",
							maxWidth: { xs: "250px", sm: "400px", lg: "800px" },
							mx: "auto",
							fontFamily: "Disolve_regular",
							fontSize: {
								xs: "0.9rem",
								sm: "1rem",
								md: "1.1rem",
								lg: "1.2rem",
							},
							transition: "transform 0.3s ease",
						}}
					>
						NEWLINE PLUS
					</Typography>
				</Zoom>
				<Zoom in={true} timeout={800}>
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
						Our Products
					</Typography>
				</Zoom>
				<Zoom in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
					<Typography
						variant="h6"
						sx={{
							color: "#666",
							maxWidth: { xs: "250px", sm: "400px", lg: "800px" },
							mx: "auto",
							fontFamily: "Poppins-Light",
							fontSize: {
								xs: "0.9rem",
								sm: "1rem",
								md: "1.2rem",
								lg: "1.3rem",
							},
							transition: "transform 0.3s ease",
						}}
					>
						Innovative solutions for your digital display and printing needs
					</Typography>
				</Zoom>
			</Box>

			{/* Products */}
			{products.map((product, index) => (
				<React.Fragment key={index}>
					<Grow in={visibleProducts[index]} timeout={800}>
						<Box
							ref={(el) => (productRefs.current[index] = el)}
							sx={{
								mb: product.showTable ? 6 : 12,
								px: { xs: "2rem", sm: "4rem", md: "5rem", lg: "8rem" },
							}}
						>
							<Grid
								container
								spacing={{ xs: 3, lg: 7 }}
								alignItems="center"
								sx={{ placeContent: "center" }}
							>
								{/* Image */}
								<Grid item size={{ xs: 12, md: 6 }}>
									<Box
										sx={{
											width: "100%",
											position: "relative",
											overflow: "hidden",
											boxShadow: "0 0px 0px rgba(0,0,0,0.1)",
										}}
									>
										<Box
											component="img"
											src={product.image}
											alt={product.title}
											sx={{
												borderRadius: 2,
												width: "100%",
												height: { xs: 300, sm: 500, md: "100%" },
												objectFit: "cover",
												transition: "transform 0.3s ease",
												"&:hover": {
													transform: "scale(1.02)",
												},
											}}
										/>
									</Box>
								</Grid>

								{/* Content */}
								<Grid item size={{ xs: 12, md: 6 }}>
									<Box sx={{ pl: { md: 4 } }}>
										<Typography
											variant="h3"
											sx={{
												fontWeight: 300,
												mb: 3,
												color: "#00519C",
												fontFamily: "Poppins-SemiBold",
												fontSize: { xs: "1.5rem", md: "2rem" },
												transition: "transform 0.3s ease",
											}}
										>
											{product.title}
										</Typography>

										<Typography
											variant="body1"
											sx={{
												color: "#666",
												mb: 4,
												lineHeight: 1.6,
												fontFamily: "Poppins-Regular",
												fontSize: {
													xs: "0.8rem",
													sm: "0.9rem",
													md: "0.95rem",
													lg: "1rem",
												},
												transition: "transform 0.3s ease",
											}}
										>
											{product.description}
										</Typography>

										{/* Features */}
										<Box sx={{ mb: 4 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: 500,
													mb: 2,
													color: "#333",
													fontSize: {
														xs: "1.1rem",
														sm: "1.2rem",
														md: "1.3rem",
														lg: "1.4rem",
													},
													fontFamily: "Poppins-SemiBold",
													transition: "transform 0.3s ease",
												}}
											>
												Key Features
											</Typography>
											<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
												{product.features.map((feature, idx) => (
													<Chip
														key={idx}
														label={feature}
														sx={{
															borderRadius: 2,
															fontFamily: "Poppins-Regular",
															backgroundColor: "#f5f5f5",
															color: "#333",
															border: "1px solid #e0e0e0",
															"&:hover": {
																backgroundColor: "#4BA8FF",
																color: "white",
															},
															transition: "all 0.2s ease",
														}}
													/>
												))}
											</Box>
										</Box>

										{/* Specifications */}
										{product.specifications.some(
											(spec) => spec.trim() !== ""
										) && (
											<Box>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 500,
														mb: 2,
														color: "#333",
														fontSize: {
															xs: "1.1rem",
															sm: "1.2rem",
															md: "1.3rem",
															lg: "1.4rem",
														},
														fontFamily: "Poppins-SemiBold",
														transition: "transform 0.3s ease",
													}}
												>
													Specifications
												</Typography>
												<Box>
													{product.specifications.map(
														(spec, idx) =>
															spec.trim() !== "" && (
																<Typography
																	key={idx}
																	variant="body2"
																	sx={{
																		color: "#666",
																		mb: 1,
																		lineHeight: 1.4,
																		fontFamily: "Poppins-Regular",
																		fontSize: {
																			xs: "0.8rem",
																			md: "0.95rem",
																			lg: "1rem",
																		},
																		transition: "transform 0.3s ease",
																	}}
																>
																	• {spec}
																</Typography>
															)
													)}
												</Box>
											</Box>
										)}
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Grow>

					{/* Show appropriate specs table based on product type */}
					{product.showTable && (
						<Grow
							in={visibleProducts[index]}
							timeout={1000}
							style={{ transitionDelay: "300ms" }}
						>
							<Box
								sx={{
									mb: 7,
									px: { xs: "2rem", sm: "4rem", md: "5rem", lg: "8rem" },
								}}
							>
								{product.tableType === "kiosk" && <ProductSpecsTable />}
								{product.tableType === "interactive" && (
									<InteractiveSpecsTable />
								)}
							</Box>
						</Grow>
					)}
				</React.Fragment>
			))}

			{/* Call to Action */}
			<Box sx={{ background: "#00519C", color: "white" }}>
				<Container
					maxWidth="lg"
					sx={{
						px: 2,
						py: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
					}}
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
								transition: "all 0.4s ease",
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
								transition: "all 0.4s ease",
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
								transition: "all 0.4s ease",
							}}
						>
							684 Shibei Industrial Road, Dashi Street, Panyu District,
							Guangzhou,Guangdong ,China
						</Typography>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Products;
