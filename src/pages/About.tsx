import { Box, Typography, useTheme, Card, CardContent, Button } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export const About = () => {
  const theme = useTheme();
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    {
      title: 'Approche Holistique',
      description: 'Nous croyons en une approche globale du bien-être qui prend en compte l\'esprit, le corps et l\'âme.',
      icon: '🌿',
    },
    {
      title: 'Guérison Naturelle',
      description: 'Nous utilisons des méthodes naturelles et traditionnelles pour favoriser la guérison et le bien-être.',
      icon: '🌱',
    },
    {
      title: 'Soins Personnalisés',
      description: 'Chaque client reçoit un traitement adapté à ses besoins spécifiques et à ses objectifs de bien-être.',
      icon: '💝',
    },
  ];

  const team = [
    {
      name: 'Sophie Martin',
      role: 'Directrice du Spa',
      bio: 'Plus de 15 ans d\'expérience dans le domaine du bien-être et de la relaxation.',
      image: '/images/team/sophie.jpg',
    },
    {
      name: 'Pierre Dubois',
      role: 'Thérapeute Principal',
      bio: 'Spécialiste en massage thérapeutique et en techniques de relaxation avancées.',
      image: '/images/team/pierre.jpg',
    },
    {
      name: 'Marie Laurent',
      role: 'Experte en Méditation',
      bio: 'Guide de méditation certifiée avec une expertise en techniques de réduction du stress.',
      image: '/images/team/marie.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        ref={storyRef}
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
            Notre Histoire
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
            Un voyage de guérison et de bien-être depuis 2010
          </Typography>
        </Box>
      </Box>

      {/* Story Section */}
      <Box ref={storyRef} sx={{ 
        minHeight: '100vh',
        py: { xs: 8, md: 12, lg: 16, xl: 20 }, 
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/about/story-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y,
            opacity,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1.2fr' }, 
            gap: { xs: 6, md: 8, lg: 12, xl: 16 }, 
            alignItems: 'center',
            height: '100%'
          }}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  color: theme.palette.text.primary,
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
                }}
              >
                Notre Histoire
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' },
                }}
              >
                Fondé en 2010, notre spa de bien-être est né d\'une vision simple : créer un espace où les gens peuvent trouver la paix, la guérison et le renouveau. Notre fondatrice, Sophie Martin, a combiné ses années d\'expérience en thérapie holistique avec une passion pour le bien-être naturel.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' },
                }}
              >
                Aujourd\'hui, nous continuons à grandir et à évoluer, toujours fidèles à notre mission de fournir des soins exceptionnels et une expérience de bien-être transformatrice à chaque client qui franchit nos portes.
              </Typography>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '400px', lg: '500px' },
                  backgroundImage: 'url(/images/about/story.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
            </MotionBox>
          </Box>
        </Box>
      </Box>

      {/* Values Section */}
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
              Nos Valeurs
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: { xs: 4, md: 6, lg: 8, xl: 12 },
              flex: 1
            }}>
              {values.map((value, index) => (
                <MotionBox
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                        {value.icon}
                      </Typography>
                      <Typography gutterBottom variant="h4" component="h2">
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Team Section */}
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
              Notre Équipe
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: { xs: 4, md: 6, lg: 8, xl: 12 },
              flex: 1
            }}>
              {team.map((member, index) => (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                    <Box
                      sx={{
                        width: '100%',
                        height: { xs: '200px', md: '250px', lg: '300px' },
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        sx={{ mb: 2 }}
                      >
                        {member.role}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* About Content */}
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
              Notre Histoire
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem', xl: '1.6rem' },
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Depuis plus de 10 ans, nous nous engageons à offrir une expérience de bien-être exceptionnelle à nos clients. Notre spa a été créé avec la vision de créer un havre de paix où chaque personne peut trouver son équilibre intérieur et son bien-être physique.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem', xl: '1.6rem' },
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Notre équipe de thérapeutes expérimentés combine des techniques traditionnelles et modernes pour vous offrir des soins personnalisés qui répondent à vos besoins spécifiques. Nous croyons en l\'approche holistique du bien-être, qui prend en compte le corps, l\'esprit et l\'âme.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
                }}
              >
                Contactez-nous
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 