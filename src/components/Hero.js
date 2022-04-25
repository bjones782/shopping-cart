import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Nav from './Nav'
import Container from './Container'
import CardContainer from './CardContainer'

const Hero = () => {
    return (
        <section className='hero'>
            <Nav />
            <Container >
                <CardContainer />
            </Container>
        </section>
    )
}

export default Hero;