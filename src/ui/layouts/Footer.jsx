import React from 'react'

export default ({ children, ...props}) => {
    return <footer {...props}>{children}</footer>
}