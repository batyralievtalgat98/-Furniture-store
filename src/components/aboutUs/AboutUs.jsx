import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ChatIcon from '@mui/icons-material/Chat';
import AbcIcon from '@mui/icons-material/Abc';



const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    Furniture <AnnouncementIcon />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam quisquam,
                       porro aspernatur iste minima alias nobis quod nostrum magnam minus eos?
                        Asperiores debitis totam, quibusdam qui illo nisi dicta?
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://vobox.ru/upload/iblock/da6/mebel_iz_naturalnogo_rotanga_plyusy_i_minusy-_1_.jpg"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://alterainvest.ru/upload/webp/resize_cache/iblock/bec/1110_530_2/bec9c107459fdd537514d8dcc8e18c12.webp"
                    alt="JAWS"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    sx={{ align: 'center' }}
                    component="h2"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={0}
                  >
                    Leaders in the field <ChatIcon />
                    <Typography variant="h6" color="text.secondary" paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam quisquam,
                       porro aspernatur iste minima alias nobis quod nostrum magnam minus eos?
                        Asperiores debitis totam, quibusdam qui illo nisi dicta?
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    Пreat experience

                    <AbcIcon fontSize="lagre" />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam quisquam,
                       porro aspernatur iste minima alias nobis quod nostrum magnam minus eos?
                        Asperiores debitis totam, quibusdam qui illo nisi dicta?
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://abcbiznes.ru/wp-content/uploads/2015/04/mebelny-_1_.jpg"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        {/* End hero unit */}
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}