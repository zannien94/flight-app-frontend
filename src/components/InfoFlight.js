import * as React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { Typography, Stack, LinearProgress, styled, Box } from '@mui/material'
import Logo from './Logo'

const Accordion = styled(MuiAccordion)`
  border: 1px solid grey;
  border-radius: 50px 10px;
  overflow: hidden;
  background: linear-gradient(
    45deg,
    rgba(0, 112, 255, 1) 0%,
    rgba(0, 160, 255, 1) 50%,
    rgba(0, 112, 255, 1) 100%
  );
`

const AccordionSummary = styled(MuiAccordionSummary)`
  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  }
  border-bottom: 1px solid grey;
  max-width: 100%;
`

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = () => setExpanded((prev) => !prev)

  return (
    <Stack alignItems='center'>
      <Stack direction={'row'} spacing={1}>
        <Typography fontSize='20px' fontWeight={'700'}>
          Outbound
        </Typography>
        <Typography fontSize='18px'>Thu, 25 Aug 2022</Typography>
      </Stack>
      <Accordion square expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          aria-controls='panel1d-content'
          id='panel1d-header'
        >
          <Logo />
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            width='100%'
            spacing={4}
            marginLeft='50px'
          >
            <Stack>
              <Typography variant='body1'>06:15</Typography>
              <Typography variant='body1'>WAW</Typography>
            </Stack>
            <Stack textAlign={'center'}>
              <Typography variant='body3'>2h 30</Typography>

              <Stack
                sx={{
                  height: '40px',
                  width: '200px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                direction='row'
                spacing={1}
              >
                <FlightTakeoffIcon />
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
                <FlightLandIcon />
              </Stack>

              <Typography variant='body3'>Direct</Typography>
            </Stack>
            <Stack>
              <Typography variant='body1'>08:45</Typography>
              <Typography variant='body1'>ORY</Typography>
            </Stack>
          </Stack>
        </AccordionSummary>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Stack>
            <Typography
              paddingLeft={'5'}
              ml='5px'
              fontSize='10px'
              variant='body5'
            >
              2h 30
            </Typography>
          </Stack>
          <Box sx={{ width: '8%', transform: 'rotate(90deg)' }}>
            <LinearProgress />
          </Box>
          <Stack spacing={2}>
            <Typography variant='body1'>06:15 WAW Warsaw Chopin</Typography>
            <Typography variant='body1'>08:45 ORY Paris Orly</Typography>
          </Stack>
        </Box>
        <Stack direction={'row'} spacing={2}>
          <Typography fontSize='10px'>Arrives: Thu,25 Aug 2022</Typography>
          <Typography fontSize='10px'>Journey duration: 2h 30</Typography>
        </Stack>
      </Accordion>
    </Stack>
  )
}
