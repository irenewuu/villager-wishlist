import React from 'react'
import { Route } from 'react-router-dom'

export default function privateRoute({ component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      retner = {props => {
        
      }}
    >

    </Route>
  )
}
