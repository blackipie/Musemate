import React from 'react';

interface TeamMember {
  name: string;
  semester: string;
  institute: string;
  role: string;
  avatar?: string; // Add avatar property
}

const TeamCard: React.FC<TeamMember> = ({ avatar, name, semester, institute, role }) => {
  
  return (
      <div className="bg-neutral-900 ring-1 ring-neutral-800 text-white p-4 rounded-lg shadow-md">
           <img src={avatar} alt={`${name} Avatar`} className="w-20 h-20 rounded-full mb-2" />
                 <h3 className="text-lg font-semibold">{name}</h3>
          <div className='text-neutral-300'>
      <p className="text-sm">{semester} semester</p>
      <p className="text-sm">{institute}</p>
      <p className="text-sm">{role}</p>
   </div>
    </div>
  );
};

export default TeamCard;
