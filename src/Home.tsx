// // Home.tsx
// import DrawerAppBar from "./components/AppBar";
// import { Grid, Box } from "@mui/material";

// const videoSource = "./assets/HomeBG.mp4";

// function Home() {
// 	return (
// 		<DrawerAppBar>
// 			<Grid container padding={20}>
// 				<Box
// 					sx={{
// 						width: "100vw", // Full viewport width
// 						height: "100vh", // Optional: full screen height
// 						overflow: "hidden",
// 					}}
// 				>
// 					<video
// 						autoPlay
// 						muted
// 						loop
// 						playsInline
// 						style={{
// 							width: "100%",
// 							height: "100%",
// 							objectFit: "cover", // Ensures it fills the box
// 						}}
// 					>
// 						<source src={videoSource} type="video/mp4" />
// 						Your browser does not support the video tag.
// 					</video>
// 				</Box>
// 			</Grid>
// 		</DrawerAppBar>
// 	);
// }

// export default Home;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Chip,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DrawerAppBar from "./components/AppBar";
import {
  DisplaySettings,
  Computer,
  Tv,
  Print,
  ArrowForward,
  Business,
  Star,
  TrendingUp
} from '@mui/icons-material';

const videoSource = "./assets/HomeBG.mp4";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const products = [
    {
      title: "LED WALL",
      description: "High-resolution LED displays perfect for large-scale advertising and events. Stunning visual impact with vibrant colors.",
      icon: <Tv sx={{ fontSize: 60, color: '#1976d2' }} />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      features: ["4K Resolution", "Outdoor Ready", "Modular Design"]
    },
    {
      title: "KIOSK",
      description: "Interactive digital kiosks for customer engagement and self-service solutions. Modern touch interface technology.",
      icon: <Computer sx={{ fontSize: 60, color: '#1976d2' }} />,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      features: ["Touch Screen", "24/7 Operation", "Custom Software"]
    },
    {
      title: "DIGITAL DISPLAY",
      description: "Versatile digital signage solutions for retail, corporate, and hospitality environments. Smart content management.",
      icon: <DisplaySettings sx={{ fontSize: 60, color: '#1976d2' }} />,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      features: ["Cloud Based", "Real-time Updates", "Multi-format Support"]
    },
    {
      title: "TARPAULIN PRINTER",
      description: "Professional large-format printing solutions for banners, signage, and promotional materials. Premium quality output.",
      icon: <Print sx={{ fontSize: 60, color: '#1976d2' }} />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      features: ["Large Format", "Weather Resistant", "Fast Production"]
    }
  ];

  return (
    <DrawerAppBar>
      <Box sx={{ width: '100%' }}>
        {/* Hero Section with Video Background */}
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -2
            }}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
              zIndex: -1
            }}
          />

          {/* Hero Content */}
          <Container maxWidth="lg" sx={{ textAlign: 'center', zIndex: 1 }}>
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                letterSpacing: '0.1em',
                mb: 2,
                fontSize: isMobile ? '3rem' : '4.5rem'
              }}
            >
              NEWLINE PLUS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Innovation in Digital Display Solutions
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#1565c0',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(25,118,210,0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              See Products
            </Button>
          </Container>
        </Box>

        {/* Company Introduction Section */}
        <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: '#1976d2',
                      fontSize: '3rem',
                      boxShadow: '0 8px 25px rgba(25,118,210,0.2)'
                    }}
                  >
                    <Business sx={{ fontSize: '4rem' }} />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                    About Newline Plus
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, color: '#333', lineHeight: 1.8 }}>
                    Leading provider of cutting-edge digital display solutions and printing services. 
                    We specialize in transforming visual communication through innovative technology.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}>
                    With years of experience in the industry, Newline Plus delivers comprehensive 
                    solutions from LED walls to interactive kiosks, helping businesses enhance 
                    their visual presence and customer engagement.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip 
                      icon={<Star />} 
                      label="Premium Quality" 
                      sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} 
                    />
                    <Chip 
                      icon={<TrendingUp />} 
                      label="Innovation First" 
                      sx={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }} 
                    />
                    <Chip 
                      icon={<Business />} 
                      label="Trusted Partner" 
                      sx={{ backgroundColor: '#fff3e0', color: '#f57c00' }} 
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Featured Products Section */}
        <Box sx={{ py: 8, backgroundColor: 'white' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Chip 
                label="OUR PRODUCTS" 
                sx={{ 
                  backgroundColor: '#e3f2fd', 
                  color: '#1976d2',
                  fontWeight: 'bold',
                  mb: 3,
                  px: 3,
                  py: 1
                }} 
              />
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                Featured Products
              </Typography>
              <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
                Discover our comprehensive range of digital display and printing solutions 
                designed to elevate your business presence
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {product.icon}
                        <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
                          {product.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#666', mb: 3, lineHeight: 1.6 }}>
                        {product.description}
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {product.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{
                              backgroundColor: '#f0f8ff',
                              color: '#1976d2',
                              mr: 1,
                              mb: 1,
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="outlined"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{
                          borderColor: '#1976d2',
                          color: '#1976d2',
                          '&:hover': {
                            backgroundColor: '#1976d2',
                            color: 'white',
                            transform: 'translateY(-2px)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            py: 8, 
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white'
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Ready to Transform Your Visual Communication?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Contact us today to discuss your digital display and printing needs
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#1976d2',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(255,255,255,0.3)'
                  },
                  transition: 'all 0.3s ease'
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