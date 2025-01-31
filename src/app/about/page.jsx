import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Rajesh Gupta",
    role: "Principal",
    image: "/team1.jpg",
    bio: "With over 20 years of experience in education, Mr. Gupta leads the school with vision and dedication.",
  },
  {
    name: "Anita Sharma",
    role: "Vice Principal",
    image: "/team2.jpg",
    bio: "An advocate for holistic development, Ms. Sharma ensures that every student achieves their full potential.",
  },
  {
    name: "Ravi Mehta",
    role: "Sports Coordinator",
    image: "/team3.jpg",
    bio: "A former national athlete, Mr. Mehta brings discipline and enthusiasm to our sports programs.",
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-16"
        style={{
          backgroundImage: "linear-gradient(to right, #3b82f6, #4f46e5)",
        }}
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            About <span className="text-yellow-300">Bright Future School</span>
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Shaping young minds with quality education and strong values since
            2001.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Bright Future School, our mission is to provide an inclusive
                learning environment that fosters intellectual curiosity,
                creativity, and personal growth. We aim to empower students to
                achieve academic excellence and become compassionate global
                citizens.
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where every child has access to quality
                education, opportunities for growth, and the skills to lead a
                fulfilling life. Our vision is to inspire young minds to dream
                big and make a positive impact in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Teachers",
                description:
                  "A team of highly qualified and dedicated educators.",
                icon: "🎓",
              },
              {
                title: "Modern Facilities",
                description:
                  "State-of-the-art classrooms, labs, and sports facilities.",
                icon: "🏫",
              },
              {
                title: "Holistic Development",
                description:
                  "A balanced approach to academics, sports, and the arts.",
                icon: "⚽",
              },
              {
                title: "Community Engagement",
                description:
                  "Active involvement in local and global community projects.",
                icon: "🌍",
              },
              {
                title: "Safe Environment",
                description:
                  "A secure campus that prioritizes student safety and well-being.",
                icon: "🛡️",
              },
              {
                title: "Consistent Excellence",
                description:
                  "100% pass rate in board exams with top-performing students.",
                icon: "📈",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <CardContent className="text-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <a
            href="#contact"
            className="bg-yellow-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
