import React from 'react'

export default ({ label, ...props }) => {
    return <>
        <label>{label}</label>
        <input {...props}/>
    </>
}