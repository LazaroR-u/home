import React from 'react';

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card">
      <img
        className="experience-image bg-white mb-3"
        src={data.companylogo}
        alt={data.role}
      />
      <p className="lead">
        {data.role}
        <br />
        {data.date}
      </p>
    </div>
  );
};

export default ExperienceCard;
