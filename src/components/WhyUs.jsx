const WhyUs=()=>{
    const keyProns=[
          {
            title: "Industry Exposure",
            desc: "Work on projects that mirror real business challenges.",
          },
          {
            title: "Mentorship",
            desc: "Guidance from experienced professionals to accelerate your learning.",
          },
          {
            title: "Career Focus",
            desc: "Build a portfolio and skills that employers value.",
          },
        ]
  return (
    <section id="why-us" className="bg-white py-16 px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Why Choose Sammunat?</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Sammunat bridges the gap between education and industry by providing
        students with practical exposure, structured mentorship, and career‑focused learning.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
        {keyProns.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




export default WhyUs;