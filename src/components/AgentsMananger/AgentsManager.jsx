import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAgents } from "../../utils/requestMaker";
import AgentsCard from "../AgentsCard/AgentsCard";
import "./AgentsManager.css";

export default function AgentsManager() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAgentsData();
  });

  const getAgentsData = async () => {
    const agents = await getAgents();
    setAgents(agents);
  };
  return (
    <div className="cards-container">
      {agents &&
        agents.map((agent) => (
          <div key={agent.uuid}>
            <AgentsCard  agent={agent} />
          </div>
        ))}
    </div>
  );
}
