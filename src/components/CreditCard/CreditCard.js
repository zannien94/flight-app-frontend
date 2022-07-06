import React, { useState } from 'react'
import { Stack } from '@mui/material'
import CreditCardCard from './CreditCardCard'
import CreditCardForm from './CreditCardForm'

export default function BasicCard() {
  const [isCardBackground, setIsCardBackground] = useState(false)
  const [nameCard, setNameCard] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [dateCard, setDateCard] = useState(new Date())
  const [cardCVV, setCardCVV] = useState('')

  const renderBackgroundCard = () => setIsCardBackground((prev) => !prev)

  const handleChangeCardName = (event) => {
    const { value } = event.target
    setNameCard(value)
  }
  const handleChangeCardNumber = (event) => {
    const { value } = event.target
    setCardNumber(value)
  }
  const handleChangeDateCard = (value) => {
    console.log(value)
    setDateCard(value)
  }
  const handleChangeCardCVV = (event) => {
    const { value } = event.target
    setCardCVV(value)
  }
  return (
    <Stack direction='column' alignItems='center' spacing={3}>
      <CreditCardCard
        isCardBackground={isCardBackground}
        nameCard={nameCard}
        cardNumber={cardNumber}
        dateCard={dateCard}
        cardCVV={cardCVV}
      />
      <CreditCardForm
        renderBackgroundCard={renderBackgroundCard}
        nameCard={nameCard}
        onChangeCardName={handleChangeCardName}
        cardNumber={cardNumber}
        onChangeCardNumber={handleChangeCardNumber}
        dateCard={dateCard}
        onChangeDateCard={handleChangeDateCard}
        cardCVV={cardCVV}
        onChangeCardCVV={handleChangeCardCVV}
      />
    </Stack>
  )
}
