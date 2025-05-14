'use client';  // This is the key fix!

import React, { useState } from 'react';

// Sample data representing agents
const agents = [
  {
    id: 1,
    name: 'John Doe',
    profilePicture: '/images/agent1.jpg', // Ensure the images exist in the public folder
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePicture: '/images/agent2.jpg',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    profilePicture: '/images/agent3.jpg',
  },
  // Add more agents as needed
];

const FindAgent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(agents);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const results = agents.filter(agent =>
      agent.name.toLowerCase().includes(query)
    );

    setFilteredAgents(results);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search for an Agent</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name..."
        className="w-full border p-2 rounded mb-4"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.length > 0 ? (
          filteredAgents.map(agent => (
            <div
              key={agent.id}
              className="border p-4 rounded shadow bg-white flex items-center space-x-4"
            >
              <img
                src={agent.profilePicture}
                alt={agent.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                <a
                  href={`/agent/${agent.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No agents found.</p>
        )}
      </div>
    </div>
  );
};

export default FindAgent;
