import Hero from "../components/Hero"
import Navigate from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Work from '../components/Work';

const Home = () => {
    return ( 
       <div className="bg-[#2A2C38] relative z-0" id="three">
  <main className="bg-[#2A2C38] relative " id="two">
    <div className="-" id="one"> {/* Clips gradients */}
      {/* Gradient circles (clipped by #one's overflow:hidden) */}
      <div className="absolute w-[871.213px] h-[871.213px] border rotate-[-130deg] -top-100 -right-160 bg-[rgba(190,41,215,0.5)] blur-[300px]"></div>
      <div className="absolute border w-[900px] h-[900px]  -right-[50%] top-45  border-black rotate-[-130deg] bg-[rgba(26,94,77,0.7)] blur-[300px] -z-0"></div>
      <div className="absolute border w-[541px] h-[206px] rotate[-30deg] lg:bottom:0 -bottom-30  -left-70 lg:-left-50 [background:linear-gradient(182deg,#906010_-157.44%,rgba(128,85,14,0.96)_-157.4%,rgba(87,58,10,0.67)_216.94%,rgba(198,137,32,0.8)_216.94%)] blur-[100px] z-1"></div>
    </div>
    <Navigate />
    <Hero className="" /> {/* Allowed to overflow #three */}
  </main>
  <Work />
  <Portfolio />
</div>
     );
}
 
export default Home;