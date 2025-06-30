import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
	Box,
	styled,
	Grid,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontWeight: "bold",
	backgroundColor: "#f5f5f5",
	borderRight: "1px solid #ddd",
	fontFamily: "Poppins-SemiBold",
}));

const RedHeaderCell = styled(TableCell)(({ theme }) => ({
	backgroundColor: "#00519C",
	color: "white",
	fontWeight: "bold",
	textAlign: "center",
	fontFamily: "Poppins-SemiBold",
}));

const SizeHeaderCell = styled(TableCell)(({ theme }) => ({
	backgroundColor: "#e3f2fd",
	fontWeight: "bold",
	textAlign: "center",
	borderRight: "1px solid #ddd",
	fontFamily: "Poppins-SemiBold",
}));

const DataCell = styled(TableCell)(({ theme }) => ({
	textAlign: "center",
	borderRight: "1px solid #ddd",
	fontFamily: "Poppins-Regular",
}));

const ProductSpecsTable: React.FC = () => {
	return (
		<Box sx={{ padding: 2 }}>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					mb: 2,
					fontWeight: "bold",
					background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
                    fontFamily: 'Poppins-SemiBold',
                     color: '#8b5cf6'
				}}
			>
				Kiosk Specifications
			</Typography>

			<Grid
				container
				justifyContent="start"
				sx={{ textAlign: "start", width: "100%" }}
			>
				<Box
					sx={{
						width: "100%",
						overflowX: "auto",
						textAlign: "start",
						display: "grid",
					}}
				>
					<TableContainer
						component={Paper}
						sx={{ maxWidth: "100%", overflow: "auto" }}
					>
						<Table
							sx={{ minWidth: 650 }}
							aria-label="product specifications table"
						>
							<TableHead>
								<TableRow>
									<StyledTableCell>PRODUCT SIZE</StyledTableCell>
									<SizeHeaderCell>43 INCHES</SizeHeaderCell>
									<SizeHeaderCell>49 INCHES</SizeHeaderCell>
									<SizeHeaderCell>55 INCHES</SizeHeaderCell>
									<SizeHeaderCell>65 INCHES</SizeHeaderCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<StyledTableCell>APPEARANCE LENGTH</StyledTableCell>
									<DataCell>619mm</DataCell>
									<DataCell>697mm</DataCell>
									<DataCell>768mm</DataCell>
									<DataCell>893mm</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>APPEARANCE WIDTH</StyledTableCell>
									<DataCell>1800mm</DataCell>
									<DataCell>1856mm</DataCell>
									<DataCell>1870mm</DataCell>
									<DataCell>2065mm</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>APPEARANCE THICKNESS</StyledTableCell>
									<DataCell>88mm</DataCell>
									<DataCell>90mm</DataCell>
									<DataCell>90mm</DataCell>
									<DataCell>88mm</DataCell>
								</TableRow>
								<TableRow>
									<RedHeaderCell colSpan={5}>
										PRODUCT CONFIGURATION INSTRUCTIONS
									</RedHeaderCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>DISPLAY PARAMETER</StyledTableCell>
									<DataCell colSpan={4} sx={{ textAlign: "left", padding: 2 }}>
										<Typography
											variant="body2"
											component="div"
											sx={{ fontFamily: "Poppins-Regular" }}
										>
											43"-65" LCD Display
											<br />
											The Size Chart Is As Follows
											<br />
											Screen Ratio: 16:9
											<br />
											Viewing Angle (Horizontal/vertical): 178/178
											<br />
											Brightness: 300cd, Contrast 3000:1
											<br />
											The Maximum Resolution is 3840*2160(RGB)
										</Typography>
									</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>COMPUTER PARAMETER</StyledTableCell>
									<DataCell colSpan={2} sx={{ textAlign: "left", padding: 2 }}>
										<Typography
											variant="body2"
											component="div"
											sx={{ fontFamily: "Poppins-Regular" }}
										>
											OPTION 1 - CPU: Android quad-core
											<br />
											Memory: up to 16GB
											<br />
											Storage: up to 512GB
											<br />
											Integrated sound card, network card.
										</Typography>
									</DataCell>
									<DataCell colSpan={2} sx={{ textAlign: "left", padding: 2 }}>
										<Typography
											variant="body2"
											component="div"
											sx={{ fontFamily: "Poppins-Regular" }}
										>
											OPTION 2 - CPU: Intel Core i5/i7
											<br />
											Memory: up to 16GB
											<br />
											Storage: up to 512GB
											<br />
											Integrated sound card, network card.
										</Typography>
									</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>OPERATING SYSTEM PARAMETERS</StyledTableCell>
									<DataCell colSpan={2}>Android</DataCell>
									<DataCell colSpan={2}>Windows 11 Home/Pro/IOT</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>TOUCH PARAMETER</StyledTableCell>
									<DataCell colSpan={4} sx={{ textAlign: "left", padding: 2 }}>
										<Typography
											variant="body2"
											component="div"
											sx={{ fontFamily: "Poppins-Regular" }}
										>
											Touch type: infrared touch
											<br />
											Touch points: 10 points
											<br />
											Minimum sensing: 5mm
											<br />
											Transmittance: more than 97%
											<br />
											Resolution: 4096*4096
											<br />
											Response speed: 6ms
											<br />
											Durability: withstand more than 60,000,000 touches
										</Typography>
									</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>INTERFACE</StyledTableCell>
									<DataCell colSpan={4} sx={{ textAlign: "left", padding: 2 }}>
										<Typography
											variant="body2"
											component="div"
											sx={{ fontFamily: "Poppins-Regular" }}
										>
											Power interface 1 piece
											<br />
											USB interface 1 piece
											<br />
											AC interface 1piece
											<br />
											Network cable interface 1 piece
											<br />
											Audio interface 1 piece
										</Typography>
									</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>WORKING ENVIRONMENT</StyledTableCell>
									<DataCell colSpan={4}>Normal indoor environment</DataCell>
								</TableRow>
								<TableRow>
									<StyledTableCell>PACKAGING</StyledTableCell>
									<DataCell colSpan={4}>Carton</DataCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Grid>
		</Box>
	);
};

export default ProductSpecsTable;
