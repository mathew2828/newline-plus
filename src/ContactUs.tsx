import { Box, Button, Container, Typography, Zoom } from "@mui/material";
import React from "react";

const ContactUs: React.FC = () => {
	return (
		<Box
			sx={{
				width: "100vw",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* Main Contact Section */}
			<Box
				sx={{
					flex: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pt: "10rem",
					pb: "7rem",
                    px: {xs: '3rem', sm: '5rem',md: '7rem', lg: '10rem'},
                    transition: "transform 0.3s ease",
				}}
			>
				<Box sx={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
					<Zoom in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
						<Typography
							variant="h5"
							sx={{
								color: "#666",
								fontFamily: "Disolve_regular",
								fontSize: {
									xs: "0.9rem",
									sm: "1rem",
									md: "1.1rem",
									lg: "1.2rem",
								},
								transition: "transform 0.3s ease",
								mb: 2,
							}}
						>
							NEWLINE PLUS
						</Typography>
					</Zoom>
					<Zoom in={true} timeout={1000} style={{ transitionDelay: "400ms" }}>
						<Typography
							variant="h2"
							sx={{
								fontWeight: "bold",
								mb: 3,
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
							Contact Us
						</Typography>
					</Zoom>
					<Zoom in={true} timeout={1000} style={{ transitionDelay: "600ms" }}>
						<Typography
							variant="h6"
							sx={{
								color: "#666",
								mb: "3rem",
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
							Have a question, suggestion, or need support? Hit the button and
							send us an email—we'll get back to you as soon as we can.
						</Typography>
					</Zoom>

					<Zoom in={true} timeout={1000} style={{ transitionDelay: "800ms" }}>
						<Button
							variant="contained"
							size="large"
							onClick={() => 
								

								//Add Email Address Receiver Here
								window.open("mailto:add_email_here", "_blank")
							}
							sx={{
								backgroundColor: "#046CCEFF",
								color: "white",
								px: 4,
								py: 1.5,
								borderRadius: 2,
								fontFamily: "Poppins-SemiBold",
								fontSize: {
									xs: "0.85rem",
									sm: "0.9rem",
									md: "0.95rem",
									lg: "1rem",
								},
								transition: "all 0.3s ease",
								"&:hover": {
									backgroundColor: "#0056b3",
									transform: "translateY(-2px)",
									boxShadow: "0 8px 25px rgba(4, 108, 206, 0.3)",
								},
							}}
						>
							Send Email
						</Button>
					</Zoom>
				</Box>
			</Box>

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
		</Box>
	);
};

export default ContactUs;
