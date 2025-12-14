import { useNavigate } from "react-router-dom";


const HeroSectoin=()=>{
    const navigate=useNavigate();
    return (
        <section className="text-center py-35 px-6 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Empowering Students With Real‑World Opportunities
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Gain hands‑on experience by working on live industry projects guided by expert mentors.
            </p>
            <button
                onClick={()=>navigate("/apply")}
                className="mt-8 z-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer transition-transform duration-400 hover:scale-105 text-lg"
            >
                Get Started
            </button>
        </section>
    );
}



export default HeroSectoin;