import * as React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  CardActions,
  TextField,
  Button,
  Typography,
  Stack,
} from '@mui/material'

const StylePaper = styled.div`
  height: 300px;
  width: 500px;
  font-size: 15;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 2px solid whitesmoke;
  border-radius: 10%;
`

const StyleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid whitesmoke;
  border-radius: 10%;
`
const ContactForm = () => {
  return (
    <Stack spacing={4}>
      <StylePaper>
        <Typography fontSize='30px' fontWeight={'700'} variant='body1'>
          Get in Touch
        </Typography>

        <StyleBox>
          <TextField label=' Your name' />
          <TextField label=' Email' />
        </StyleBox>

        <StyleBox>
          <TextField label='Subject' />
          <TextField label='Phone No.' />
        </StyleBox>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label='Your message' id='fullWidth' />
        </Box>

        <CardActions>
          <Button variant='outlined'>Submit</Button>
        </CardActions>
      </StylePaper>
    </Stack>
  )
}

export default ContactForm
