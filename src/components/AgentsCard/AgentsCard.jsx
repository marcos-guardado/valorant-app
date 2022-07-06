import React from "react";
import "./AgentCard.css";

export default function AgentsCard({
  agent: { uuid, displayName, description, displayIcon, background },
}) {
  return (
    <div className="card agent-card">
      <img src={displayIcon} className="card-img-top" alt={uuid}></img>
      <div className="card-body">
        <h5 className="card-title">{displayName}</h5>
        <p className="card-text">{description}</p>
      </div>
      <a href="#w" className="btn btn-light m-1">
        See details
      </a>
    </div>
  );
}
