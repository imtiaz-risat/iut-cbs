import React, { useState } from "react";

const buttons = [
  { id: "2023", label: "INTERN 2023" },
  { id: "2022", label: "INTERN 2022" },
  { id: "2020", label: "INTERN 2020" },
  { id: "2019", label: "INTERN 2019" },
  { id: "2018", label: "INTERN 2018" },
];

const sections = [
  {
    id: "2023",
    champion: {
      team: "Profit Pilots",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    firstRunnersUp: {
      team: "Sugarpuffs",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    secondRunnersUp: {
      team: "Maverick Minds",
      members: ["Member 1", "Member 2", "Member 3"],
    },
  },
  {
    id: "2022",
    champion: {
      team: "Team Clutchers",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    firstRunnersUp: {
      team: "Ode to Aiko",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    secondRunnersUp: {
      team: "Team Turbo",
      members: ["Member 1", "Member 2", "Member 3"],
    },
  },
  {
    id: "2020",
    champion: {
      team: "RAMPANT",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    firstRunnersUp: {
      team: "Team Argonettes 1.4",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    secondRunnersUp: {
      team: "Brown Bear",
      members: ["Member 1", "Member 2", "Member 3"],
    },
  },
  {
    id: "2019",
    champion: {
      team: "Desert Fox 3.0",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    firstRunnersUp: {
      team: "Blitzkrieg",
      members: ["Member 1", "Member 2", "Member 3"],
    },
  },
  {
    id: "2018",
    champion: {
      team: "The Aces",
      members: ["Member 1", "Member 2", "Member 3"],
    },
    firstRunnersUp: {
      team: "MARS",
      members: ["Member 1", "Member 2", "Member 3"],
    },
  },
  // Add other sections similarly
];

export default function WinnersSection() {
  const [visibleSection, setVisibleSection] = useState("2023");

  const showSection = (id) => {
    setVisibleSection(id);
  };

  return (
    <div className="flex flex-col p-4 lg:px-20 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Champions Archives
      </h1>
      <div className="flex overflow-x-auto space-x-2 border-b pb-4 mb-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`flex-shrink-0 p-2 rounded-lg border ${
              visibleSection === button.id
                ? "bg-[#800000] text-gray-200"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            onClick={() => showSection(button.id)}
            dangerouslySetInnerHTML={{ __html: button.label }}
          />
        ))}
      </div>
      <main className="p-4 bg-card text-card-foreground rounded-lg border">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={visibleSection === section.id ? "" : "hidden"}
          >
            {section.champion && (
              <div className="mb-4 p-4 bg-gold rounded-lg border text-center">
                <h3 className="text-md font-bold">CHAMPION</h3>
                <p className=" text-3xl font-extrabold">
                  {section.champion.team}
                </p>
                {/* <p className="mt-1">
                  <strong>Members:</strong>{" "}
                  {section.champion.members.join(", ")}
                </p> */}
              </div>
            )}
            {section.firstRunnersUp && (
              <div className="mb-4 p-4 bg-silver rounded-lg border text-center">
                <h3 className="text-md font-bold">1st RUNNERS-UP</h3>
                <p className=" text-3xl font-extrabold">
                  {section.firstRunnersUp.team}
                </p>
                {/* <p className="mt-1">
                  <strong>Members:</strong>{" "}
                  {section.firstRunnersUp.members.join(", ")}
                </p> */}
              </div>
            )}
            {section.secondRunnersUp && (
              <div className="mb-4 p-4 bg-bronze rounded-lg border text-center">
                <h3 className="text-md font-bold">2nd RUNNERS UP</h3>
                <p className="text-3xl font-extrabold">
                  {section.secondRunnersUp.team}
                </p>
                {/* <p className="mt-1">
                  <strong>Members:</strong>{" "}
                  {section.secondRunnersUp.members.join(", ")}
                </p> */}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
