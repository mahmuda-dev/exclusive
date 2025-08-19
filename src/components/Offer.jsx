import React from 'react'
import Container from './Container'
import CaptureImage from "../assets/captureimg.png"
import Image from './Image'
import { Link } from 'react-router-dom'
const Offer = () => {
  return (
    <section className='mt-5 lg:mt-[140px]'>
        <Container>
            <Link>
           <Image src={CaptureImage}/>
            </Link>
        </Container>
    </section>
  )
}

export default Offer
