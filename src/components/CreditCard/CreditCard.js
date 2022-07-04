import React, { useState } from 'react'
import { Stack } from '@mui/material'
import CreditCardCard from './CreditCardCard'
import CreditCardForm from './CreditCardForm'

export default function BasicCard() {
  const [isCardBackground, setIsCardBackground] = useState(false)

  const renderBackgroundCard = () => setIsCardBackground((prev) => !prev)

  return (
    <Stack direction='column' alignItems='center' spacing={3}>
      <CreditCardCard isCardBackground={isCardBackground} />
      <CreditCardForm renderBackgroundCard={renderBackgroundCard} />
    </Stack>
  )
}
