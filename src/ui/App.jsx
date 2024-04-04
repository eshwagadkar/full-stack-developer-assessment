import React from 'react'
import Header from './layouts/Header.jsx'
import Main from './layouts/Main.jsx'
import Aside from './layouts/Aside.jsx'
import Footer from './layouts/Footer.jsx'
import Heading from './components/Heading.jsx'
import Logo from './components/Logo.jsx'
import Form from './components/form/Form.jsx'

const App = () => {
    return <>
            <Header className='row-span-1'>
                <Logo />
                <Heading className='bg-customColor text-headingColor text-center'>
                    Discover the world's top Designers & Creatives.
                </Heading>
            </Header>
            <Aside className='hidden md:block'/>
            <Main>
                <Form />
            </Main>
            {/* <Footer></Footer> */}
        </>
}

export default App