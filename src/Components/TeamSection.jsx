import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Vanita Patel",
      role: "Operation Manager",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👩‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 2,
      name: "Dhruval Gondaliya",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👨‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 3,
      name: "Jagruti Mendha",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👩‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 4,
      name: "Mishay Patel",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👨‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 5,
      name: "Keval Bhavsar",
      role: "Operation Manager",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👩‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 6,
      name: "Bharat Chauhan",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👨‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 7,
      name: "Soham Nakrani",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👨‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
    {
      id: 8,
      name: "Vivek Patel",
      role: "Real Estate Agent",
      company: "Ochi Realty Pvt Ltd",
      nameColor: "text-red-500",
      avatar: "👨‍💼",
      description:
        "Ochi Realty Private Limited is a Real Estate Property Management Company has been serving...",
    },
  ];

  const firstRow = teamMembers.slice(0, 4);
  const secondRow = teamMembers.slice(4);

  const TeamRow = ({ members }) => (
    <div className="flex justify-center flex-wrap gap-8 mb-8 ">
      {members.map((member) => (
        <div
          data-aos="jump-in"
          key={member.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 overflow-hidden relative transform hover:-translate-y-3 transition-all"
          style={{ width: "280px", height: "420px" }}
        >
          <div className="p-6 text-center h-full flex flex-col justify-between">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center text-4xl shadow-sm">
              {member.avatar}
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${member.nameColor}`}>
              {member.name}
            </h3>
            <p className="text-gray-700 font-medium text-sm mb-6">
              {member.role}, {member.company}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed px-2 mb-8">
              "{member.description}"
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 text-sm">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="min-h-screen bg-[#212121] mt-40 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Meet Our <span className="text-red-600">Team</span>
            </h1>
            <p className="text-gray-400 text-lg">
              We have Best Real Estate Professional Agents / Dealers for Real
              Estate Property Services.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="space-y-8"
          >
            <TeamRow members={firstRow} />
            {secondRow.length > 0 && <TeamRow members={secondRow} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
