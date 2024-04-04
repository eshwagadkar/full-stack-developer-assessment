import React from 'react'
import Input from './Input.jsx'

export default () => {
    return <>
        <form>
            <Input label='Name' type='text' />
            <Input label='Username' type='text' />
            <Input label='Email' type='email' />
            <Input label='Password' type='password' />
            <Input type='checkbox' />
        </form>
    </>
}