import { styled } from '@mui/material/styles';
import {
  Container,
  Divider,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material/';
import { Code, Description } from '@mui/icons-material';

const CustomDivider = styled(Divider)(({ theme }) => ({
  height: '4px',
  width: '60px',
  backgroundColor: theme.palette.primary.main,
}));

interface SkillCategory {
  category: string;
  items: string[];
}

interface AboutData {
  aboutTitle: string;
  aboutItems: string[];
  resumeTitle: string;
  resumeParagraph: string;
  resumeButton: string;
  resumeLink: string;
  skillsTitle: string;
  skills?: SkillCategory[];
}

export default function About({ aboutData: t }: { aboutData: AboutData }) {
  return (
    <Box
      component="section"
      id="about"
      sx={{ pb: 8, pt: 10, bgcolor: (theme) => theme.palette.grey[900] }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.aboutTitle}
            </Typography>
            <CustomDivider />
          </Grid>

          <Grid item md={8} xs={12}>
            <List disablePadding>
              {t.aboutItems.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon>
                    <Code color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.resumeTitle}
            </Typography>
            <CustomDivider />
          </Grid>

          <Grid item md={8} xs={12}>
            <Typography gutterBottom component="h3" variant="h4">
              {t.resumeParagraph}
            </Typography>

            <Button
              color="primary"
              endIcon={<Description />}
              href={t.resumeLink}
              rel="noopener"
              size="large"
              sx={{ m: 2 }}
              target="_blank"
              variant="outlined"
            >
              {t.resumeButton}
            </Button>
          </Grid> */}

          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.skillsTitle}
            </Typography>
            <CustomDivider />
          </Grid>

          <Grid item md={8} xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {t.skills?.map((skillGroup) => (
                <Box key={skillGroup.category}>
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {skillGroup.category}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {skillGroup.items.join(' | ')}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
