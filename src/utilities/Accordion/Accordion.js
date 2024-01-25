import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import classes from '../Accordion/Accordion.module.scss';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: '1px solid var(--www-tatanexarc-com-gull-gray-40, rgba(149, 158, 177, 0.40))',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderBottom: '1px solid var(--www-tatanexarc-com-gull-gray-40, rgba(149, 158, 177, 0.40))',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.question} sx={{ fontWeight: 'bold' , fontFamily: "'Poppins', sans-serif"}}>What is Tata nexarc Business Loans?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.answer} sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Tata nexarc Business Loans are unsecured / collateral-free, working capital loans at the best rates and turnaround times from a variety of banks and NBFCs - especially aimed to help emerging businesses on Tata nexarc solve their working capital related needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.question} sx={{ fontWeight: 'bold' , fontFamily: "'Poppins', sans-serif"}}>What is an unsecured business loan?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.answer} sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.question} sx={{ fontWeight: 'bold' ,fontFamily: "'Poppins', sans-serif" }}>Why should I take a business loan?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.answer} sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.question} sx={{ fontWeight: 'bold' ,fontFamily: "'Poppins', sans-serif"}}>Why take a business loan from Tata nexarc?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"aliceblue"}}>
          <Typography className={classes.answer} sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
