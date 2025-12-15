import { useNavigate } from "react-router-dom";

const Contact=()=>{
    const navigate=useNavigate();
    return (
        <section className="h-screen bg-blue-600 dark:bg-gray-600 text-white text-center py-45 px-6">
            <h2 className="text-3xl font-bold">
                Ready to Start Your Career Journey?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg">
                Apply now and take the first step towards gaining practical industry experience.
            </p>
            <button
                onClick={()=>alert("Apply successful")}
                className="mt-8 z-10 px-8 py-3 z-10 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-300 cursor-pointer transition text-lg"
            >
                Apply Now
            </button>
        </section>
    );
}



export default Contact;