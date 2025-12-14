const Testimonials=()=>{
    const testimonials = [
        {
            name: "Aarav Sharma",
            text: "Sammunat boosted my confidence for job interviews.",
        },
        {
            name: "Priya Verma",
            text: "The mentors were extremely supportive throughout the internship.",
        },
    ];

    return (
        <section className="bg-gray-100 h-screen py-36 px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                What Students Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
                {testimonials.map((t) => (
                <div
                    key={t.name}
                    className="bg-white z-10 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                    <p className="text-gray-700 italic">“{t.text}”</p>
                    <h4 className="mt-4 font-semibold text-gray-900">— {t.name}</h4>
                </div>
                ))}
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 mt-6">
                *Testimonials are for demonstration purposes only.
            </p>
        </section>
  );
}



export default Testimonials;