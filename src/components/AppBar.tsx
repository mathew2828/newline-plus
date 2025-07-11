import * as React from "react";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Blue_Horizontal_Logo_NewlinePlus.svg";
import { Link, useLocation } from "react-router-dom";

interface Props {
	window?: () => Window;
	children?: React.ReactNode;
}

const drawerWidth = 240;

const navItems = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "Contact Us", path: "/contactUs" },
];

export default function DrawerAppBar(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const location = useLocation();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box sx={{ my: 2 }}>
				<img src={Logo} alt="newline+ Logo" style={{ height: 30 }} />
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton
							component={Link}
							to={item.path}
							sx={{
								textAlign: "center",
							}}
						>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex", overflow: "hidden", padding: 0 }}>
			<CssBaseline />
			<AppBar
				component="nav"
				position="fixed"
				sx={{
					backgroundColor: "rgba(39, 39, 39, 0.15)",
					boxShadow: "none",
					backdropFilter: "blur(5px)",
					WebkitBackdropFilter: "blur(5px)",
					paddingX: { sm: "2rem", md: "6rem", lg: "15rem" },
					paddingY: "10px",
					zIndex: (theme) => theme.zIndex.drawer + 10,
				}}
			>
				<Toolbar
					sx={{
						px: { xs: 2, sm: 0 },
						display: "flex",
						alignItems: "center",
						justifyContent: { xs: "center", sm: "space-between" },
						position: "relative",
					}}
				>
					{/* Menu Icon */}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{
							display: { xs: "block", sm: "none" },
							position: { xs: "absolute", sm: "static" },
							left: { xs: 16, sm: "auto" },
							zIndex: 1,
						}}
					>
						<MenuIcon />
					</IconButton>

					{/* Logo */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexGrow: { xs: 0, sm: 1 },
							justifyContent: { xs: "center", sm: "flex-start" },
						}}
					>
						<img
							src={Logo}
							alt="newline+ Logo"
							style={{
								height: 32,
								cursor: "pointer",
							}}
						/>
					</Box>

					{/* Nav Items */}
					<Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
						{navItems.map((item) => {
							const isActive = location.pathname === item.path;
							return (
								<Button
									key={item.label}
									component={Link}
									to={item.path}
									sx={{
										color: "inherit",
										mixBlendMode: "difference",
										textTransform: "none",
										fontSize: "16px",
										fontWeight: 400,
										fontFamily: "Poppins-Regular",
										px: 2,
										borderBottom: isActive
											? "2px solid white"
											: "2px solid transparent",
										borderRadius: 0,
										transition: "border-color 0.3s",
										"&:hover": {
											backgroundColor: "rgba(255, 255, 255, 0.1)",
											borderColor: "white",
										},
									}}
								>
									{item.label}
								</Button>
							);
						})}
					</Box>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>

			{/* Page Content */}
			<Box component="main" sx={{ p: 0 }}>
				<Box>{props.children}</Box>
			</Box>
		</Box>
	);
}
