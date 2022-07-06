import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MasterCardIcon from '../icons/MasterCardIcon'

export default function BasicCard({
  isCardBackground,
  nameCard,
  cardNumber,
  dateCard,
  cardCVV,
}) {
  return (
    <Card
      sx={{
        border: '2px solid grey',
        borderRadius: '15px',
        maxWidth: '360px',
        width: '100%',
        height: '160px',
        background: 'linear-gradient(to right, #4092b5 60%, #3580aa 90%)',
        transition: '1s',
        transform: isCardBackground && `rotateY(180deg)`,
      }}
    >
      <CardContent sx={{ padding: '12px' }}>
        {isCardBackground ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              transform: isCardBackground && `rotateY(180deg)`,
            }}
          >
            <Box
              sx={{
                background: 'black',
                height: '24px',
                margin: '24px -12px 36px',
              }}
            />
            <Typography variant='body2' color='white'>
              CVC
            </Typography>
            <Typography variant='body2' color='white'>
              {cardCVV}
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                alignItems: 'right',
              }}
            >
              <MasterCardIcon />
            </Box>

            <CreditCardIcon
              sx={{
                fontSize: '40px',
                color: 'white',
              }}
            />
            <Typography variant='body1' color='white'>
              {cardNumber}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant='body2' color='white'>
                {nameCard}
              </Typography>
              <Typography variant='body2' color='white'>
                {dateCard &&
                  `${dateCard.getMonth()}/${dateCard
                    .getFullYear()
                    .toString()
                    .slice(2, 4)}`}
              </Typography>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  )
}
