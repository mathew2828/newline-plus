import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import ledImage from "./assets/LED.png";
import displayImage from "./assets/Display.png";
import tarpImage from "./assets/Tarp.png";
import { motion } from "framer-motion";

const Products: React.FC = () => {
	const products = [
		{
			title: "LED WALL",
			description:
				"High-resolution LED displays perfect for large-scale advertising and events. Stunning visual impact with vibrant colors and exceptional clarity for both indoor and outdoor applications.",
			image: ledImage,
			features: [
				"4K Resolution",
				"Outdoor Ready",
				"Modular Design",
				"Energy Efficient",
			],
			specifications: [
				"Pixel Pitch: 1.25mm - 10mm",
				"Brightness: Up to 6,000 nits",
				"Viewing Angle: 160°H/160°V",
				"Refresh Rate: 3840Hz",
			],
		},
		{
			title: "KIOSK",
			description:
				"Interactive digital kiosks for customer engagement and self-service solutions. Modern touch interface technology with robust hardware designed for continuous operation.",
			image: displayImage,
			features: [
				"Touch Screen",
				"24/7 Operation",
				"Custom Software",
				"Weather Resistant",
			],
			specifications: [
				'Screen Size: 32" - 75"',
				"Touch Technology: PCAP Multi-touch",
				"Operating System: Android/Windows",
				"Connectivity: WiFi, 4G, Ethernet",
			],
		},
		{
			title: "TARPAULIN PRINTER",
			description:
				"Professional large-format printing solutions for banners, signage, and promotional materials. Premium quality output with fast production capabilities for all your printing needs.",
			image: tarpImage,
			features: [
				"Large Format",
				"Weather Resistant",
				"Fast Production",
				"Eco-Friendly Inks",
			],
			specifications: [
				"Max Width: 3.2m",
				"Resolution: Up to 1440 DPI",
				"Speed: Up to 150 sqm/hour",
				"Media: PVC, Fabric, Mesh, Canvas",
			],
		},
	];

	return (
		<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		transition={{ duration: 0.5 }}
	>
		<Box
			sx={{
				minHeight: "100vh",
				paddingTop: "4rem",
				px:0
			}}
		>
			<Container maxWidth="xl" sx={{ pt: 8 , px: 0}}>
				{/* Page Header */}
				<Box sx={{ textAlign: "center", mb: 8 }}>
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
						Innovative solutions for your digital display and printing needs
					</Typography>
				</Box>

				{/* Products */}
				{products.map((product, index) => (
					<Box key={index} sx={{ mb: 12, px: "8rem" }}>
						<Grid
							container
							size={6}
							spacing={8}
							alignItems="center"
							sx={{ placeContent: "center" }}
						>
							{/* Image */}
							<Grid item xs={12} md={6}>
								<Box
									sx={{
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
											height: { xs: 300, md: 400 },
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
							<Grid container size={6} item xs={12} md={6}>
								<Box sx={{ pl: { md: 4 } }}>
									<Typography
										variant="h3"
										sx={{
											fontWeight: 300,
											mb: 3,
											color: "#333",
											fontSize: { xs: "2rem", md: "2.5rem" },
										}}
									>
										{product.title}
									</Typography>

									<Typography
										variant="body1"
										sx={{
											color: "#666",
											mb: 4,
											lineHeight: 1.8,
											fontSize: "1.1rem",
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
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontWeight: 500,
												mb: 2,
												color: "#333",
											}}
										>
											Specifications
										</Typography>
										<Box>
											{product.specifications.map((spec, idx) => (
												<Typography
													key={idx}
													variant="body2"
													sx={{
														color: "#666",
														mb: 1,
														fontSize: "0.95rem",
													}}
												>
													• {spec}
												</Typography>
											))}
										</Box>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
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
								}}
							>
								09875645632 | 09875645632 | 09875645632
							</Typography>
						</Box>
					</Container>
				</Box>
			</Container>
		</Box>
	</motion.div>
		
	);
};

export default Products;
