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
  color: white;
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

export default function InfoFlight({
  title,
  dayFlay,
  fromDate,
  toAirport,
  fromAirport,
  fromHour,
  toHour,
  toNameAirport,
  fromNameAirport,
  timeFlay,
  defaultExpanded = false,
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)

  const handleChange = () => setExpanded((prev) => !prev)

  return (
    <Stack alignItems='center'>
      <Stack direction={'row'} spacing={1}>
        <Typography fontSize='20px' fontWeight={'700'}>
          {title}
        </Typography>
        <Typography fontSize='18px'>
          {dayFlay},{fromDate}
        </Typography>
      </Stack>
      <Accordion square expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        >
          <Logo />
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            width='100%'
            spacing={4}
            marginLeft='50px'
            marginRight='20px'
          >
            <Stack>
              <Typography variant='body1'>{fromHour}</Typography>
              <Typography variant='body1'>{fromAirport}</Typography>
            </Stack>
            <Stack textAlign={'center'}>
              <Typography variant='body3'>{timeFlay}</Typography>

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
              <Typography variant='body1'>{toHour}</Typography>
              <Typography variant='body1'>{toAirport}</Typography>
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
              {timeFlay}
            </Typography>
          </Stack>
          <Box sx={{ width: '8%', transform: 'rotate(90deg)' }}>
            <LinearProgress />
          </Box>
          <Stack spacing={2}>
            <Typography variant='body1'>
              {fromHour} {fromAirport} {fromNameAirport}
            </Typography>
            <Typography variant='body1'>
              {toHour} {toAirport} {toNameAirport}
            </Typography>
          </Stack>
        </Box>
        <Stack direction={'row'} spacing={2} marginLeft='20px'>
          <Typography fontSize='10px'>
            Arrives: {dayFlay},{fromDate}
          </Typography>
          <Typography fontSize='10px'>Journey duration: {timeFlay}</Typography>
        </Stack>
      </Accordion>
    </Stack>
  )
}
