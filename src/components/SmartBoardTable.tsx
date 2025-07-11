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
	Button,
	Dialog,
	DialogContent,
	IconButton,
	Box,
	Chip,
	Card,
	CardContent,
	Alert,
	AlertTitle,
	Toolbar,
	AppBar,
} from "@mui/material";
import {
	Download,
	Close,
	Description,
	OpenInNew,
	PictureAsPdf,
} from "@mui/icons-material";
import PDF_ from "../assets/NewlinePlus_.pdf";

const DisplaySpecsTable = () => {
	const [pdfModalOpen, setPdfModalOpen] = React.useState(false);
	const [pdfError, setPdfError] = React.useState(false);

	const tableData = [
		{
			category: "Display",
			specifications: [
				{
					spec: "Active Screen Size",
					values: ['55"', '65"', '75"', '85"', '86"', '98"'],
				},
				{
					spec: "Backlight Type",
					values: [
						"DLED Direct illumination-type",
						"DLED Direct illumination-type",
						"DLED Direct illumination-type",
						"DLED Direct illumination-type",
						"DLED Direct illumination-type",
						"DLED Direct illumination-type",
					],
				},
				{
					spec: "Display Area (mm)",
					values: [
						"1211.6×682.4",
						"1430.5×800.5",
						"1652.2×930.3",
						"1871.4×1053.6",
						"1897×1068",
						"2160.8×1216.4",
					],
				},
				{
					spec: "Native Resolution",
					values: [
						"1080p4K",
						"1080p4K",
						"1080p4K",
						"1080p4K",
						"1080p4K",
						"1080p4K",
					],
				},
				{
					spec: "Display Color",
					values: [
						"16.7 million (8bit)",
						"16.7 million (8bit)",
						"16.7 million (8bit)",
						"16.7 million (8bit)",
						"16.7 million (8bit)",
						"16.7 million (8bit)",
					],
				},
				{
					spec: "Aspect Ratio",
					values: ["16:9", "16:9", "16:9", "16:9", "16:9", "16:9"],
				},
				{
					spec: "Brightness (cd/m2)",
					values: ["350", "350", "350", "350", "350", "350"],
				},
				{
					spec: "Contrast Ratio",
					values: ["1200:1", "1200:1", "1200:1", "1200:1", "1200:1", "1200:1"],
				},
				{
					spec: "Viewing Angle",
					values: ["178°", "178°", "178°", "178°", "178°", "178°"],
				},
				{
					spec: "Response Time",
					values: ["8ms", "8ms", "8ms", "8ms", "8ms", "8ms"],
				},
			],
		},
		{
			category: "Panel Technology",
			specifications: [
				{
					spec: "Construction",
					values: [
						"85mmZero bonding Original brand manufactured",
						"85mmZero bonding Original brand manufactured",
						"85mmZero bonding Original brand manufactured",
						"85mmZero bonding Original brand manufactured",
						"85mmZero bonding Original brand manufactured",
						"85mmZero bonding Original brand manufactured",
					],
				},
			],
		},
		{
			category: "Build and Power",
			specifications: [
				{
					spec: "Glass Type",
					values: [
						"DLED screen 3/4mm tempered glass",
						"DLED screen 3/4mm tempered glass",
						"DLED screen 3/4mm tempered glass",
						"DLED screen 3/4mm tempered glass",
						"DLED screen 3/4mm tempered glass",
						"DLED screen 3/4mm tempered glass",
					],
				},
				{
					spec: "Cooling",
					values: [
						"Active heat dissipation",
						"Active heat dissipation",
						"Active heat dissipation",
						"Active heat dissipation",
						"Active heat dissipation",
						"Active heat dissipation",
					],
				},
				{
					spec: "Mounting",
					values: [
						"Supported (with movable stand)",
						"Supported (with movable stand)",
						"Supported (with movable stand)",
						"Supported (with movable stand)",
						"Supported (with movable stand)",
						"Supported (with movable stand)",
					],
				},
				{
					spec: "Power Supply",
					values: [
						"100-240V, 50/60Hz",
						"100-240V, 50/60Hz",
						"100-240V, 50/60Hz",
						"100-240V, 50/60Hz",
						"100-240V, 50/60Hz",
						"100-240V, 50/60Hz",
					],
				},
				{
					spec: "Power Consumption",
					values: ["72w", "112w", "268w", "360w", "576w", "N/A"],
				},
				{
					spec: "Android",
					values: ["11", "11", "11", "11", "11", "11"],
				},
			],
		},
		{
			category: "System",
			specifications: [
				{
					spec: "CPU (Android)",
					values: [
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
						"64-bit, ARM Cortex-A55 quad-core Mali-G52 MP2",
					],
				},
				{
					spec: "RAM",
					values: ["4GB", "4GB", "4GB", "4GB", "4GB", "4GB"],
				},
				{
					spec: "ROM (Storage)",
					values: [
						"32GB eMMC",
						"32GB eMMC",
						"32GB eMMC",
						"32GB eMMC",
						"32GB eMMC",
						"32GB eMMC",
					],
				},
				{
					spec: "OPS Support",
					values: [
						"Yes (Windows and Linux Supported) i3/i5/i7",
						"Yes (Windows and Linux Supported) i3/i5/i7",
						"Yes (Windows and Linux Supported) i3/i5/i7",
						"Yes (Windows and Linux Supported) i3/i5/i7",
						"Yes (Windows and Linux Supported) i3/i5/i7",
						"Yes (Windows and Linux Supported) i3/i5/i7",
					],
				},
				{
					spec: "Audio",
					values: [
						"Built-in speakers, 10m effective range, noise cancellation",
						"Built-in speakers, 10m effective range, noise cancellation",
						"Built-in speakers, 10m effective range, noise cancellation",
						"Built-in speakers, 10m effective range, noise cancellation",
						"Built-in speakers, 10m effective range, noise cancellation",
						"Built-in speakers, 10m effective range, noise cancellation",
					],
				},
				{
					spec: "Microphone",
					values: [
						"Built-in, 10m effective range, noise cancellation",
						"Built-in, 10m effective range, noise cancellation",
						"Built-in, 10m effective range, noise cancellation",
						"Built-in, 10m effective range, noise cancellation",
						"Built-in, 10m effective range, noise cancellation",
						"Built-in, 10m effective range, noise cancellation",
					],
				},
				{
					spec: "Camera (Optional)",
					values: ["13MP", "13MP", "13MP", "13MP", "13MP", "13MP"],
				},
				{
					spec: "OS Version",
					values: [
						"Windows 10",
						"Windows 10",
						"Windows 10",
						"Windows 10",
						"Windows 10",
						"Windows 10",
					],
				},
				{
					spec: "System (OPS) Processor",
					values: [
						"i5-10th (upgradable)",
						"i5-10th (upgradable)",
						"i5-10th (upgradable)",
						"i5-10th (upgradable)",
						"i5-10th (upgradable)",
						"i5-10th (upgradable)",
					],
				},
				{
					spec: "Graphics Card",
					values: [
						"HD Graphics 3000",
						"HD Graphics 3000",
						"HD Graphics 3000",
						"HD Graphics 3000",
						"HD Graphics 3000",
						"HD Graphics 3000",
					],
				},
				{
					spec: "RAM Usage",
					values: ["8/16GB", "8/16GB", "8/16GB", "8/16GB", "8/16GB", "8/16GB"],
				},
			],
		},
		{
			category: "Connectivity",
			specifications: [
				{
					spec: "Input",
					values: [
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
						"RJ45(x1, VGA audio), VGA audio, TRS1, HDMI, USB2.0",
					],
				},
				{
					spec: "Output",
					values: [
						"Coaxial output, headphone audio output, touch audio interface",
						"Coaxial output, headphone audio output, touch audio interface",
						"Coaxial output, headphone audio output, touch audio interface",
						"Coaxial output, headphone audio output, touch audio interface",
						"Coaxial output, headphone audio output, touch audio interface",
						"Coaxial output, headphone audio output, touch audio interface",
					],
				},
				{
					spec: "Wifi",
					values: ["2.4GHz", "2.4GHz", "2.4GHz", "2.4GHz", "2.4GHz", "2.4GHz"],
				},
				{
					spec: "Bluetooth",
					values: [
						"Supported",
						"Supported",
						"Supported",
						"Supported",
						"Supported",
						"Supported",
					],
				},
				{
					spec: "Hotspot",
					values: [
						"Supported",
						"Supported",
						"Supported",
						"Supported",
						"Supported",
						"Supported",
					],
				},
			],
		},
		{
			category: "Touch Technology",
			specifications: [
				{
					spec: "Touch Type",
					values: [
						"Finger and Pen",
						"Finger and Pen",
						"Finger and Pen",
						"Finger and Pen",
						"Finger and Pen",
						"Finger and Pen",
					],
				},
				{
					spec: "Touch Points",
					values: [
						"Android: 10-20",
						"Android: 10-20",
						"Android: 10-20",
						"Android: 10-20",
						"Android: 10-20",
						"Android: 10-20",
					],
				},
				{
					spec: "Touch Accuracy",
					values: [
						"Windows: 40",
						"Windows: 40",
						"Windows: 40",
						"Windows: 40",
						"Windows: 40",
						"Windows: 40",
					],
				},
				{
					spec: "Pen Support",
					values: ["≤2mm", "≤2mm", "≤2mm", "≤2mm", "≤2mm", "≤2mm"],
				},
				{
					spec: "Embedded Writing Software",
					values: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
				},
			],
		},
	];

	const screenSizes = ['55"', '65"', '75"', '85"', '86"', '98"'];

	const categoryColors = [
		"#e3f2fd", // Light blue
		"#e8f5e9", // Light green
		"#fff3e0", // Light orange
		"#f3e5f5", // Light purple
		"#e0f2f1", // Light teal
		"#fce4ec", // Light pink
	];

	const handlePdfViewer = () => {
		setPdfModalOpen(true);
		setPdfError(false);
	};

	const handleClosePdf = () => {
		setPdfModalOpen(false);
		setPdfError(false);
	};

	const handlePdfError = () => {
		setPdfError(true);
	};

	const handleDownloadPdf = () => {
		const link = document.createElement("a");
		link.href = "/assets/NewlinePlus_.pdf";
		link.download = "NewlinePlus_Specifications.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleOpenInNewTab = () => {
		window.open("/assets/NewlinePlus_.pdf", "_blank");
	};

	return (
		<Box sx={{ width: "100%",}}>
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
				Display Specifications Comparison
			</Typography>

			<Box
				sx={{
					width: "100%",
					overflowX: "auto",
					textAlign: "start",
					display: "grid",
				}}
			>
				{" "}
				<Card elevation={3} sx={{ mb: 3 }}>
					<CardContent sx={{ p: 0 }}>
						<TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
							<Table stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell
											sx={{
												backgroundColor: "#1976d2",
												color: "white",
												fontWeight: "bold",
												minWidth: 120,
											}}
										>
											Category
										</TableCell>
										<TableCell
											sx={{
												backgroundColor: "#1976d2",
												color: "white",
												fontWeight: "bold",
												minWidth: 200,
											}}
										>
											Specification
										</TableCell>
										{screenSizes.map((size) => (
											<TableCell
												key={size}
												align="center"
												sx={{
													backgroundColor: "#1976d2",
													color: "white",
													fontWeight: "bold",
													minWidth: 120,
												}}
											>
												{size}
											</TableCell>
										))}
									</TableRow>
								</TableHead>

								<TableBody>
									{tableData.map((category, catIndex) =>
										category.specifications.map((spec, specIndex) => (
											<TableRow
												key={`${catIndex}-${specIndex}`}
												hover
												sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
											>
												{specIndex === 0 && (
													<TableCell
														rowSpan={category.specifications.length}
														sx={{
															backgroundColor:
																categoryColors[
																	catIndex % categoryColors.length
																],
															fontWeight: "bold",
															textAlign: "center",
															verticalAlign: "middle",
															borderRight: "2px solid #e0e0e0",
															writingMode:
																category.specifications.length > 4
																	? "vertical-rl"
																	: "horizontal-tb",
															textOrientation: "mixed",
														}}
													>
														<Typography variant="body2" fontWeight="bold">
															{category.category}
														</Typography>
													</TableCell>
												)}
												<TableCell
													sx={{
														backgroundColor: `${
															categoryColors[catIndex % categoryColors.length]
														}80`,
														fontWeight: "bold",
														color: "#1976d2",
													}}
												>
													<Typography variant="body2" fontWeight="bold">
														{spec.spec}
													</Typography>
												</TableCell>
												{spec.values.map((value, idx) => (
													<TableCell
														key={idx}
														align="center"
														sx={{
															fontSize: "0.875rem",
															color: value === "N/A" ? "#9e9e9e" : "#333",
														}}
													>
														{value === "N/A" ? (
															<Chip
																label="N/A"
																size="small"
																variant="outlined"
																color="default"
															/>
														) : (
															<Typography variant="body2">{value}</Typography>
														)}
													</TableCell>
												))}
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</Box>

			{/* PDF */}
			<Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
				<Button
					variant="contained"
					size="large"
					onClick={handlePdfViewer}
					startIcon={<PictureAsPdf />}
					sx={{
						background: "linear-gradient(45deg, #1976d2 30%, #1565c0 90%)",
						boxShadow: "0 3px 5px 2px rgba(25, 118, 210, .3)",
						"&:hover": {
							background: "linear-gradient(45deg, #1565c0 30%, #0d47a1 90%)",
							transform: "translateY(-2px)",
							boxShadow: "0 6px 10px 4px rgba(25, 118, 210, .3)",
						},
						transition: "all 0.3s ease",
					}}
				>
					View PDF Specifications
				</Button>
			</Box>

			{/* PDF Viewer Modal */}
			<Dialog
				open={pdfModalOpen}
				onClose={handleClosePdf}
				maxWidth="lg"
				fullWidth
				PaperProps={{
					sx: { height: "90vh" },
				}}
			>
				<AppBar
					position="static"
					sx={{
						background: "linear-gradient(45deg, #1976d2 30%, #1565c0 90%)",
					}}
				>
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Poppins-SemiBold' }}>
							Display Specifications PDF
						</Typography>
						<IconButton
							color="inherit"
							onClick={handleDownloadPdf}
							title="Download PDF"
						>
							<Download />
						</IconButton>
						<IconButton
							color="inherit"
							onClick={handleOpenInNewTab}
							title="Open in New Tab"
						>
							<OpenInNew />
						</IconButton>
						<IconButton color="inherit" onClick={handleClosePdf} title="Close">
							<Close />
						</IconButton>
					</Toolbar>
				</AppBar>

				<DialogContent sx={{ p: 0, height: "100%" }}>
					{!pdfError ? (
						<Box sx={{ width: "100%", height: "100%" }}>
							<iframe
								src={PDF_}
								style={{ width: "100%", height: "100%", border: "none" }}
								title="Display Specifications PDF"
								onError={handlePdfError}
							/>
						</Box>
					) : (
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							sx={{ height: "100%", p: 4 }}
						>
							<Description sx={{ fontSize: 64, color: "#9e9e9e", mb: 2 }} />
							<Typography variant="h5" gutterBottom>
								PDF Not Available
							</Typography>
							<Alert severity="warning" sx={{ mb: 3, maxWidth: 500 }}>
								<AlertTitle>PDF Could Not Be Loaded</AlertTitle>
								This might be due to:
								<ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
									<li>File path is incorrect</li>
									<li>PDF file is missing from the assets folder</li>
									<li>Browser security restrictions</li>
								</ul>
							</Alert>
							<Box display="flex" gap={2}>
								<Button
									variant="contained"
									onClick={handleDownloadPdf}
									startIcon={<Download />}
									color="primary"
								>
									Try Download
								</Button>
								<Button
									variant="outlined"
									onClick={handleOpenInNewTab}
									startIcon={<OpenInNew />}
									color="secondary"
								>
									Open in New Tab
								</Button>
							</Box>
						</Box>
					)}
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default DisplaySpecsTable;
