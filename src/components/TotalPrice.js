import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function TotalPrice() {
  const totalBill = useSelector(state => state.burger.totalBill)
  return (
    <Stack border='1px solid #1976D2' borderRadius='20px' padding='10px' direction='row' justifyContent='space-between'> 
    <Typography>Total</Typography>
    <Typography>{totalBill} $</Typography>
    </Stack>
  )
}
