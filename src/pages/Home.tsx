import { Box, Typography, Button, Card, CardContent, CardActions, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export const Home = () => {
  const theme = useTheme();
  const servicesRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      title: 'Massage Suédois',
      description: 'Un massage doux et relaxant qui utilise de longs mouvements pour favoriser la relaxation et soulager les tensions musculaires.',
      icon: '🧖‍♀️',
    },
    {
      title: 'Massage Tissu Profond',
      description: 'Cible les couches profondes des muscles et du tissu conjonctif pour traiter les tensions musculaires chroniques.',
      icon: '💆‍♀️',
    },
    {
      title: 'Massage aux Pierres Chaudes',
      description: 'Combine des pierres chauffées avec des techniques de massage pour une relaxation et une guérison profondes.',
      icon: '🌡️',
    },
  ];

  const testimonials = [
    {
      name: 'Sophie Martin',
      text: 'Une expérience exceptionnelle. Le massage suédois m\'a complètement détendue.',
      rating: 5,
    },
    {
      name: 'Pierre Dubois',
      text: 'Le massage aux pierres chaudes est incroyable. Je me sens comme nouveau.',
      rating: 5,
    },
    {
      name: 'Marie Laurent',
      text: 'Le personnel est très professionnel et l\'ambiance est parfaite pour la relaxation.',
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Background Image */}
        <MotionDiv
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            y,
          }}
        >
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35))`,
              },
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg"
              alt="Peaceful mountain lake at sunset"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </MotionBox>
        </MotionDiv>

        {/* Content Overlay */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
            background: 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 3,
              color: theme.palette.text.primary,
              position: 'relative',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem', xl: '5rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Bienvenue au Spa de Bien-être
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 300,
              fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.8rem', xl: '2rem' },
            }}
          >
            Votre voyage vers le bien-être holistique commence ici
          </Typography>
          <Button
            component={RouterLink}
            to="/services"
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            En Savoir Plus
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box ref={servicesRef} sx={{ 
        minHeight: '100vh',
        py: { xs: 8, md: 12, lg: 16, xl: 20 }, 
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: { xs: 6, md: 8, lg: 10, xl: 12 },
                color: theme.palette.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              }}
            >
              Nos Services
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: { xs: 4, md: 6, lg: 8, xl: 12 },
              flex: 1
            }}>
              {services.map((service, index) => (
                <MotionBox
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Typography variant="h1" sx={{ mb: 2 }}>
                        {service.icon}
                      </Typography>
                      <Typography gutterBottom variant="h4" component="h2">
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        component={RouterLink}
                        to="/services"
                      >
                        En Savoir Plus
                      </Button>
                    </CardActions>
                  </Card>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ 
        minHeight: '100vh',
        py: { xs: 8, md: 12, lg: 16, xl: 20 }, 
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: { xs: 6, md: 8, lg: 10, xl: 12 },
                color: theme.palette.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              }}
            >
              Ce Que Disent Nos Clients
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: { xs: 4, md: 6, lg: 8, xl: 12 },
              flex: 1
            }}>
              {testimonials.map((testimonial, index) => (
                <MotionBox
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Typography key={i} variant="h6">
                            ⭐
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 