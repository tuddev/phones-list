import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ContactItem: React.FC = observer(() => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container>
          <Grid item xs={3}>
            <Typography>Контакт 1</Typography>
          </Grid>
          <Grid item xs={9}>
          <Typography>Почта</Typography>
          </Grid>
        </Grid>
        
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
});
