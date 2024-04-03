import React from 'react'
import Logo from './components/Logo.jsx'
import Header from './layouts/Header.jsx'
import Main from './layouts/Main.jsx'
import Aside from './layouts/Aside.jsx'
import Footer from './layouts/Footer.jsx'

const App = () => {
    return <>
            <Header className='row-span-1'>
                <Logo />
            </Header>
            <Aside />
            <Main>
            </Main>
            {/* <Footer></Footer> */}
        </>
}

export default App