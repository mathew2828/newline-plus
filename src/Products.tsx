import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Products: React.FC = () => {
	return (
		<Box >
			<Container sx={{ paddingTop: 12, px: '2rem', textAlign: 'center'}}>
				<Typography variant="h4" color="black" fontFamily={'Poppins-SemiBold'} gutterBottom>
					Featured Products
				</Typography>
				<Typography variant="body1" sx={{ lineHeight: 1.7, color: "black" }}>
					Newline Plus is a leading provider of digital display and printing
					solutions. We aim to transform the way businesses communicate
					visually.
				</Typography>
			</Container>
		</Box>
	);
};

export default Products;
