import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import { Form } from './components/Form';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '3rem'
      }}
    >
      <CssBaseline />
      <Typography variant="h4" component="h1" color="primary" gutterBottom>
        MAKE A DIFFERENCE
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Donate Today
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        Our intensive courses have boosted our students' confidence, and increased their critical thinking and entrepreneurial skills.
        With your support, we can help refugees like 16-year old Taza become future business and community leaders.
        Thank you for your commitment to our students.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <img
            src="/students.jpeg"
            alt="students"
            loading="lazy"
            style={{
              maxWidth: '425px'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
