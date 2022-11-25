import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import EditBurger from './EditBurger'
export default function FormEditBurger({setState,display}) {
    
  return (
    <Stack display={!display ? 'flex' : 'none'} spacing={1}>
        <EditBurger />
        <Button onClick={setState} variant='outlined'>Check Out</Button> 
    
        </Stack>
  )
}
