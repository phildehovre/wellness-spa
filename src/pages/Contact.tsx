import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useState  } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MotionBox = motion(Box);

export const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      content: '123 Wellness Street, San Francisco, CA 94105',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'info@wellnessspa.com',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Hours',
      content: 'Mon-Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 5:00 PM\nSun: Closed',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `linear-gradient(rgba(107, 142, 123, 0.1), rgba(107, 142, 123, 0.2))`,
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            Contact Us
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
            Get in touch with our wellness experts
          </Typography>
        </Box>
      </MotionBox>

      {/* Contact Information */}
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
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: '1fr 1.2fr' }, 
            gap: { xs: 6, md: 8, lg: 12, xl: 16 },
            height: '100%'
          }}>
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{
                backgroundColor: '#fff',
                p: { xs: 4, md: 6, lg: 8 },
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: { xs: 4, md: 6 }, 
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                  }}
                >
                  Send us a Message
                </Typography>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { height: { xs: '56px', md: '64px' } } }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { height: { xs: '56px', md: '64px' } } }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { height: { xs: '56px', md: '64px' } } }}
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: { xs: 2, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 4, md: 6 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </MotionBox>

            {/* Contact Info & Map */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6, lg: 8 } }}>
              {/* Contact Info Cards */}
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }, 
                gap: { xs: 3, md: 4, lg: 6 } 
              }}>
                {contactInfo.map((info, index) => (
                  <MotionBox
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      backgroundColor: '#fff',
                      p: { xs: 3, md: 4, lg: 6 },
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ 
                      color: theme.palette.primary.main, 
                      mb: { xs: 2, md: 3 },
                      '& .MuiSvgIcon-root': {
                        fontSize: { xs: 40, md: 48, lg: 56 },
                      }
                    }}>
                      {info.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: { xs: 1, md: 2 },
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        whiteSpace: 'pre-line',
                        fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
                      }}
                    >
                      {info.content}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>

              {/* Map */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{
                  height: { xs: '300px', md: '400px', lg: '500px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f445b%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MotionBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 