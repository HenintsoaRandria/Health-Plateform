import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default AuthGuard = ({component: component, rest}) => {
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('user') ?
            (<component {...props}/>) :
            (<Redirect to="patient"/>)
        }
    />
}