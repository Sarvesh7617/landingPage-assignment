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
        <section className="h-screen bg-gray-100 dark:bg-black py-36 px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                What Students Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
                {testimonials.map((t) => (
                <div
                    key={t.name}
                    className="bg-white dark:bg-gray-700 z-10 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                    <p className="text-gray-700 dark:text-gray-400 italic">“{t.text}”</p>
                    <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-300">— {t.name}</h4>
                </div>
                ))}
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 dark:dark:text-gray-300 mt-6">
                *Testimonials are for demonstration purposes only.
            </p>
        </section>
  );
}



export default Testimonials;