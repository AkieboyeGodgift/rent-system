import React from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import About from './_components/About';
import ContactForm from './_components/Contact';
import Footer from './_components/Footer';

const Provider = ({children}) => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <ContactForm />
        <Footer />
        <div>{children}</div>
    </div>
    
  )
}

export default Provider