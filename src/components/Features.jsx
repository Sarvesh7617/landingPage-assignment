import { BsBriefcase } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const features = [
  {
    title: "Real Projects",
    desc: "Work on industry-level challenges and build a strong portfolio.",
    icon: BsBriefcase,
  },
  {
    title: "Expert Mentorship",
    desc: "Learn directly from experienced professionals.",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Career Growth",
    desc: "Accelerate your career with practical skills.",
    icon: FaCheckCircle,
  },
];

const Features=()=>{
  return (
    <section className="grid md:grid-cols-3 gap-8 px-10 py-45">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="p-8 z-10 bg-gray-100 shadow rounded-xl text-center hover:shadow-lg transition"
        >
          <feature.icon className="h-12 w-12 mx-auto text-blue-600"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            {feature.title}
          </h3>
          <p className="text-gray-600 mt-2">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}



export default Features;