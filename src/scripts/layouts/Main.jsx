import React from 'react'

export default ({ children, ...props}) => {
    return <main {...props}>{children}</main>
}