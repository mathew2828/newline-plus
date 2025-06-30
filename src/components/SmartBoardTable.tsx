import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";

const DisplaySpecsTable = () => {
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

	const getCategoryColor = (categoryIndex) => {
		const colors = [
			"from-purple-600 to-purple-700 border-purple-700", // Display
			"from-teal-600 to-teal-700 border-teal-700", // Panel Technology
			"from-orange-600 to-orange-700 border-orange-700", // Build and Power
			"from-green-600 to-green-700 border-green-700", // System
			"from-indigo-600 to-indigo-700 border-indigo-700", // Connectivity
			"from-pink-600 to-pink-700 border-pink-700", // Touch Technology
		];
		return colors[categoryIndex % colors.length];
	};

	const getCategoryBgColor = (categoryIndex) => {
		const bgColors = [
			"bg-purple-100 text-purple-800 border-purple-200", // Display
			"bg-teal-100 text-teal-800 border-teal-200", // Panel Technology
			"bg-orange-100 text-orange-800 border-orange-200", // Build and Power
			"bg-green-100 text-green-800 border-green-200", // System
			"bg-indigo-100 text-indigo-800 border-indigo-200", // Connectivity
			"bg-pink-100 text-pink-800 border-pink-200", // Touch Technology
		];
		return bgColors[categoryIndex % bgColors.length];
	};

	const getSpecBgColor = (categoryIndex) => {
		const specBgColors = [
			"bg-purple-50 border-purple-100", // Display
			"bg-teal-50 border-teal-100", // Panel Technology
			"bg-orange-50 border-orange-100", // Build and Power
			"bg-green-50 border-green-100", // System
			"bg-indigo-50 border-indigo-100", // Connectivity
			"bg-pink-50 border-pink-100", // Touch Technology
		];
		return specBgColors[categoryIndex % specBgColors.length];
	};

	const categoryColors = [
		"#ede7f6",
		"#e0f7fa",
		"#fff3e0",
		"#e8f5e9",
		"#e3f2fd",
		"#fce4ec",
	];
	const borderColors = [
		"#7e57c2",
		"#00897b",
		"#f57c00",
		"#43a047",
		"#1976d2",
		"#d81b60",
	];

	return (
		<Box
			sx={{
				width: "100%",
				overflowX: "auto",
				textAlign: "start",
				display: "grid",
			}}
		>
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

			<TableContainer component={Paper} elevation={6}>
				<Table>
					<TableHead>
						<TableRow
							sx={{ background: "linear-gradient(to right, #00519C, #0F2A6AFF)" }}
						>
							<TableCell
								sx={{
									color: "#fff",
									fontWeight: "bold",
									border: "2px solid #334155",
								}}
							>
								Category
							</TableCell>
							<TableCell
								sx={{
									color: "#fff",
									fontWeight: "bold",
									border: "2px solid #334155",
								}}
							>
								Specification
							</TableCell>
							{screenSizes.map((size, i) => (
								<TableCell
									key={size}
									sx={{
										color: "#fff",
										fontWeight: "bold",
										border: "2px solid #334155",
										textAlign: "center",
                                          fontFamily: 'Poppins-SemiBold'
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
									sx={{
										"&:hover": {
											backgroundColor: "#f1f5f9",
										},
									}}
								>
									{specIndex === 0 && (
										<TableCell
											rowSpan={category.specifications.length}
											sx={{
												writingMode:
													category.specifications.length > 4
														? "vertical-rl"
														: "horizontal-tb",
												backgroundColor:
													categoryColors[catIndex % categoryColors.length],
												border: `2px solid ${
													borderColors[catIndex % borderColors.length]
												}`,
												fontWeight: "bold",
												textAlign: "center",
                                                  fontFamily: 'Poppins-SemiBold'
											}}
										>
											{category.category}
										</TableCell>
									)}
									<TableCell
										sx={{
											backgroundColor: `${
												categoryColors[catIndex % categoryColors.length]
											}80`,
											border: `1px solid ${
												borderColors[catIndex % borderColors.length]
											}50`,
											fontWeight: "bold",
											color: "#00519C",
                                              fontFamily: 'Poppins-SemiBold'
										}}
									>
										{spec.spec}
									</TableCell>
									{spec.values.map((value, idx) => (
										<TableCell
											key={idx}
											sx={{
												border: "1px solid #e2e8f0",
												fontSize: "0.9rem",
												color: value === "N/A" ? "#9ca3af" : "#1f2937",
												fontStyle: value === "N/A" ? "italic" : "normal",
												textAlign: "center",
                                                  fontFamily: 'Poppins-Regular'
											}}
										>
											{value}
										</TableCell>
									))}
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DisplaySpecsTable;
