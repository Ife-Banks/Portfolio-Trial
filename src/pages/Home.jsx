import Hero from "../components/Hero"
import Navigate from '../components/Navbar';

const Home = () => {
    return ( 
        <div className='relative bg-[#2A2C38] border overflow-hidden '>
            <div className='-z-1 '>
                <div className='absolute w-[871.213px] h-[871.213px] border rotate-[-130deg] -top-180 -right-80 bg-[rgba(190,41,215,0.5)] blur-[300px]'></div>
            <div className='absolute border w-[900px] h-[900px]  -right-[50%] top-45  border-black rotate-[-130deg] bg-[rgba(26,94,77,0.7)] blur-[300px]'></div>
            </div>
            <Navigate/>
            <Hero />

        </div>
     );
}
 
export default Home;