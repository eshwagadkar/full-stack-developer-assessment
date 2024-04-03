import React from 'react'

export default ({ children, ...props}) => {
    return <header {...props}>{children}</header>
}