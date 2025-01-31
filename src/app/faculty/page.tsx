import React from "react";

const faculty = [
  {
    name: "Mrs. Asha Sharma",
    role: "Principal",
    image: "/teacher1.png",
    description:
      "A seasoned educator with 25+ years of experience in shaping young minds.",
    qualifications: "M.Ed, B.Ed, PhD in Education",
    quote:
      "Our mission is to inspire every student to achieve their highest potential.",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Science Teacher",
    image: "/teacher1.png",
    description:
      "Expert in Physics and Chemistry, inspiring students to love science.",
    qualifications: "M.Sc in Physics, B.Ed",
  },
  {
    name: "Ms. Meera Gupta",
    role: "Mathematics Teacher",
    image: "/teacher1.png",
    description:
      "Dedicated to making mathematics engaging and understandable for all students.",
    qualifications: "M.Sc in Mathematics, B.Ed",
  },
  {
    name: "Mr. Ajay Singh",
    role: "English Teacher",
    image: "/teacher1.png",
    description:
      "Committed to improving language skills and fostering a love for literature.",
    qualifications: "M.A in English, B.Ed",
  },
  {
    name: "Ms. Meera Gupta",
    role: "Mathematics Teacher",
    image: "/teacher1.png",
    description:
      "Dedicated to making mathematics engaging and understandable for all students.",
    qualifications: "M.Sc in Mathematics, B.Ed",
  },
  {
    name: "Mr. Ajay Singh",
    role: "English Teacher",
    image: "/teacher1.png",
    description:
      "Committed to improving language skills and fostering a love for literature.",
    qualifications: "M.A in English, B.Ed",
  },
];
const Faculty = () => {
  const principal = faculty.find((member) => member.role === "Principal");
  const otherFaculty = faculty.filter((member) => member.role !== "Principal");

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Principal Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
            Meet Our Principal
          </h2>
          <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-8 border-t-4 border-indigo-500">
            <img
              src={principal.image}
              alt={principal.name}
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {principal.name}
              </h3>
              <p className="text-indigo-600 font-medium text-lg mb-4">
                {principal.role}
              </p>
              <p className="text-gray-600 italic mb-6">
                {principal.qualifications}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {principal.description}
              </p>
              <blockquote className="mt-6 text-indigo-700 font-semibold italic border-l-4 border-indigo-500 pl-4">
                "{principal.quote}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
          Meet Our Faculty
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our faculty is one of a kind – experienced, dedicated, and passionate.
          They are experts in their respective fields, committed to nurturing
          the potential of every student. With a focus on innovative teaching
          methods and personalized attention, they create a learning environment
          where students thrive academically and personally.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherFaculty.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-lg"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  {member.qualifications}
                </p>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
