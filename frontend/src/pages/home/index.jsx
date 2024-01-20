import React from 'react'
import Hero from '../../components/hero'
import Welcome from '../../components/welcome'
import Menu from '../../components/menu'
import { Helmet } from 'react-helmet'
import Service from '../../components/service'
import Testimonials from '../../components/testimonials'

const Home = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Hero/>
    <Welcome/>
    <Testimonials/>
    <Service/>
    <Menu/>
    </>
  )
}

export default Home