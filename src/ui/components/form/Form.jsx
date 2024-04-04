import React from 'react'
import Heading from '../Heading.jsx'
import Input from './Input.jsx'

export default () => {
    return <>
        <form>
            <Heading className='text-black text-center'>Sign up to Dribble</Heading>
            <Input label='Name' type='text' />
            <Input label='Username' type='text' />
            <Input label='Email' type='email' />
            <Input label='Password' type='password' />
            <Input type='checkbox' />
        </form>
    </>
}