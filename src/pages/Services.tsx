import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export const Services = () => {
  const theme = useTheme();
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
      benefits: [
        'Réduit le stress et l\'anxiété',
        'Améliore la circulation sanguine',
        'Soulage les douleurs musculaires',
        'Favorise un sommeil réparateur'
      ],
      price: '85€',
      duration: '60 min',
      icon: '🧖‍♀️'
    },
    {
      title: 'Massage Tissu Profond',
      description: 'Cible les couches profondes des muscles et du tissu conjonctif pour traiter les tensions musculaires chroniques.',
      benefits: [
        'Traite les douleurs chroniques',
        'Améliore la mobilité articulaire',
        'Réduit les inflammations',
        'Accélère la récupération'
      ],
      price: '95€',
      duration: '60 min',
      icon: '💆‍♀️'
    },
    {
      title: 'Massage aux Pierres Chaudes',
      description: 'Combine des pierres chauffées avec des techniques de massage pour une relaxation et une guérison profondes.',
      benefits: [
        'Détente musculaire profonde',
        'Améliore la circulation',
        'Réduit les tensions',
        'Favorise la relaxation mentale'
      ],
      price: '105€',
      duration: '75 min',
      icon: '🌡️'
    },
    {
      title: 'Massage Aromathérapie',
      description: 'Utilise des huiles essentielles thérapeutiques pour une expérience de relaxation et de bien-être unique.',
      benefits: [
        'Améliore le bien-être émotionnel',
        'Renforce le système immunitaire',
        'Favorise la relaxation',
        'Réduit le stress'
      ],
      price: '90€',
      duration: '60 min',
      icon: '🌸'
    },
    {
      title: 'Massage Prénatal',
      description: 'Spécialement conçu pour les femmes enceintes, ce massage doux favorise la relaxation et le bien-être.',
      benefits: [
        'Réduit les douleurs de grossesse',
        'Améliore la circulation',
        'Favorise la relaxation',
        'Soulage les tensions'
      ],
      price: '95€',
      duration: '60 min',
      icon: '👶'
    },
    {
      title: 'Massage Sportif',
      description: 'Idéal pour les athlètes, ce massage cible les zones spécifiques pour améliorer les performances.',
      benefits: [
        'Prévention des blessures',
        'Améliore la récupération',
        'Augmente la flexibilité',
        'Optimise les performances'
      ],
      price: '100€',
      duration: '60 min',
      icon: '🏃‍♀️'
    }
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
                background: `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))`,
              },
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg"
              alt="Serene bamboo forest"
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
            Nos Services
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
            Découvrez notre gamme complète de traitements de bien-être
          </Typography>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box sx={{ 
        minHeight: '100vh',
        py: { xs: 8, md: 12, lg: 16, xl: 20 }, 
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '100%' }}>
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
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                      {service.icon}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="h6" color="primary">
                        {service.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.duration}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Bénéfices:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {service.benefits.map((benefit, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1 }}
                        >
                          {benefit}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      component={RouterLink}
                      to="/contact"
                    >
                      Réserver
                    </Button>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 