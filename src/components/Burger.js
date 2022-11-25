import { Stack } from '@mui/material'
import React from 'react'
import PieceBurger from './PieceBurger'

export default function Burger() {
  return (

        <Stack alignItems='center' spacing={0.5}>
            <PieceBurger background='orange' height='60px' borderRadius='30px'/>
            <PieceBurger background='green' height='30px' borderRadius='30px' text="Salad"/>
            <PieceBurger background='#BD6118' height='20px' borderRadius='0px' text="Bacon"/>
            <PieceBurger background='#F8C246' height='20px' borderRadius='50px' text="Cheese" width='110%'/>
            <PieceBurger background='#6C0B05' height='20px' borderRadius='50px' text="Meat" />
            <PieceBurger background='orange' height='40px' borderRadius='30px'/>
        </Stack>
    
  )
}
