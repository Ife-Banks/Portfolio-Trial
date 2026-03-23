import { useState,useEffect } from 'react';
import Footer from '../components/footer';
import Hero from "../components/Hero";
import Navigate from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Work from '../components/Work';
import LangContext from "../components/context/LangContext"
import Modal from '../components/Modal';
import FuturisticContact from '../components/MergedConntactSection.jsx';
import TechStack from '../components/TechStack.jsx';



const Home = () => {
     const [currentGreeting, setCurrentGreeting] = useState({ lang: "English", text: "Hello" });
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [ide, setIde] = useState(0)
     const [isModalOpen, setIsModalOpen ] = useState(false);

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
        setIsMenuOpen,
        ide,
        setIde,
        setIsModalOpen,
        isModalOpen }
    return ( 
        <div className="bg-slate-50 dark:bg-[#1f2128] text-slate-900 dark:text-white relative z-0 min-h-screen transition-colors duration-300" id="three">
            <LangContext.Provider value={NavContext}>
                <main className="bg-slate-50 dark:bg-[#1f2128] relative pt-5 transition-colors duration-300" id="two">
                
                <Navigate />
                <Hero className="" />
            </main>
            <Work />
            <TechStack />
            
            <Portfolio />
            
            <Modal />
            
            <FuturisticContact />
             
            <Footer/>
           
            </LangContext.Provider>
        </div>
    );
}

export default Home;