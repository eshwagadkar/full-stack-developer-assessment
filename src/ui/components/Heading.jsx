import React from 'react'

export default ({ children, ...props }) => {
    const receivedStyles = {...props}
    return <h2 className={`text-2xl font-bold ${receivedStyles.className}`}>{children}</h2>
}
