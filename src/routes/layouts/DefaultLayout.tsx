import React from 'react'
import { TheHeader } from '../../components/TheHeader'
import { Outlet } from 'react-router-dom'
import { TheFooter } from '../../components/TheFooter'

export const DefaultLayout = () => {
  return (
    <>
        <TheHeader />
        <Outlet />
        <TheFooter />
    </>
  )
}
