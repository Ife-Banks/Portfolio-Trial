import { useState,useEffect } from 'react';
import Footer from '../components/footer';
import HaveProject from '../components/Haveproject';
import Hero from "../components/Hero";
import Navigate from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Job from '../components/WhatIdo';
import Work from '../components/Work';
import Gradients from '../Resuables/Gradients';
import LangContext from "../components/context/LangContext"

const Home = () => {
     const [currentGreeting, setCurrentGreeting] = useState({ lang: "English", text: "Hello" });
     const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Language greeting changing effect
    useEffect(() => {
        const greetings = [
            { lang: "French", text: "Bonjour" },
            { lang: "Spanish", text: "Hola" },
            { lang: "German", text: "Hallo" },
            { lang: "Dutch", text: "Hallo" },
            { lang: "English", text: "Hello" }
        ];

        const greetingInterval = setInterval(() => {
            const currentIndex = greetings.findIndex(g => g.lang === currentGreeting.lang);
            const nextIndex = (currentIndex + 1) % greetings.length;
            setCurrentGreeting(greetings[nextIndex]);
        }, 5000);

        return () => clearInterval(greetingInterval);
    }, [currentGreeting.lang]);

    const NavContext = {
        currentGreeting,
        isMenuOpen,
        setIsMenuOpen    }
    return ( 
        <div className="bg-[#2A2C38] relative z-0" id="three">
            <LangContext.Provider value={NavContext}>
                <main className="bg-[#2A2C38] relative pt-5" id="two">
                
                <Gradients/>
                <Navigate />
                <Hero className="" />
            </main>
            <Work />
            <Portfolio />
            <HaveProject/>
            <Job/>
            <Footer/>
            </LangContext.Provider>
        </div>
    );
}

export default Home;