import React, { useEffect, useState } from "react";
import { ClipboardIcon, LocationEdit, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch("http://localhost:8000/teammember/getAll");
      const result = await response.json();
      setTeamMembers(result.data || []);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setLoading(false);
    }
  };

  const professionalImages = [
    "https://randomuser.me/api/portraits/men/89.jpg",
    "https://randomuser.me/api/portraits/men/19.jpg",
    "https://randomuser.me/api/portraits/men/17.jpg",
    "https://randomuser.me/api/portraits/men/35.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/47.jpg",
    "https://randomuser.me/api/portraits/men/59.jpg",
    "https://randomuser.me/api/portraits/men/23.jpg",
    "https://randomuser.me/api/portraits/men/63.jpg",
    "https://randomuser.me/api/portraits/men/77.jpg",
    "https://randomuser.me/api/portraits/men/81.jpg",
    "https://randomuser.me/api/portraits/men/94.jpg",
    "https://randomuser.me/api/portraits/men/07.jpg",
  ];

  const TeamRow = ({ members }) => (
    <div className="flex justify-center flex-wrap gap-8 mb-8">
      {members.map((member, index) => (
        <div
          data-aos="fade-up"
          key={member.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl  hover:scale-102"
          style={{ width: "280px", height: "440px" }}
        >
          <div className="p-6 text-center h-full flex flex-col justify-between">
            <img
              src={professionalImages[index % professionalImages.length]}
              onError={(e) => {
                e.target.src = "/default-profile.png";
              }}
              alt="Team Member"
              className="w-35 h-35 mx-auto mb-6 rounded-4xl object-cover shadow-md shadow-red-500 transition-transform duration-300 ease-out hover:scale-105"
            />

            <h3 className="text-xl font-semibold mb-2 text-red-500">
              {member.Name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-gray-700 font-medium text-sm mb-2">
              <Phone className="w-4 h-4 text-green-600" strokeWidth={2} />
              +91 {member.Number}
            </div>

            <p className="flex items-center justify-center gap-2 text-gray-700 font-medium text-sm mb-2">
              <ClipboardIcon
                className="w-4 h-4 text-green-600"
                strokeWidth={2}
              />
              Ochi Reality Team Member
            </p>

            <p className="flex items-center justify-center gap-2 text-gray-600 text-sm leading-relaxed px-2 mb-6">
              <LocationEdit
                className="w-4 h-4 text-green-600"
                strokeWidth={2}
              />
              {member.Address}
            </p>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors duration-300 ease-out">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#212121] py-16 px-4 mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We have the best Real Estate professionals to serve your property
            needs.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 text-lg">
            Loading team members...
          </p>
        ) : teamMembers.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No team members found.
          </p>
        ) : (
          <>
            <TeamRow members={teamMembers.slice(0, 12)} />
            {teamMembers.length > 12 && (
              <TeamRow members={teamMembers.slice(4)} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
