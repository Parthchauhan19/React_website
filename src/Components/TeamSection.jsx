import React, { useEffect, useState } from "react";
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
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/men/19.jpg",
    "https://randomuser.me/api/portraits/men/35.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
  ];

  const TeamRow = ({ members }) => (
    <div className="flex justify-center flex-wrap gap-8 mb-8">
      {members.map((member, index) => (
        <div
          data-aos="fade-up"
          key={member.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          style={{ width: "280px", height: "440px" }}
        >
          <div className="p-6 text-center h-full flex flex-col justify-between">
            <img
              src={professionalImages[index % professionalImages.length]}
              onError={(e) => {
                e.target.src = "/default-profile.png";
              }}
              alt="Team Member"
              className="w-24 h-24 mx-auto mb-6 rounded-full object-cover shadow-sm"
            />

            <h3 className="text-xl font-semibold mb-2 text-red-500">
              {member.Name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-gray-700 font-medium text-sm mb-2">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8a1 1 0 01-.293.707l-1.586 1.586a16.016 16.016 0 006.414 6.414l1.586-1.586A1 1 0 0116 14h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-.5C10.04 21 3 13.96 3 5.5V5z"
                />
              </svg>
              +91 {member.Number}
            </div>

            <p className="text-gray-700 font-medium text-sm mb-2">
              Ochi Reality Team Member
            </p>

            <p className="text-gray-600 text-sm leading-relaxed px-2 mb-6">
              {member.Address}
            </p>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium text-sm">
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
            <TeamRow members={teamMembers.slice(0, 4)} />
            {teamMembers.length > 4 && (
              <TeamRow members={teamMembers.slice(4)} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
