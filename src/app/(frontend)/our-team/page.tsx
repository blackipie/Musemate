import React from 'react';
import TeamCard from '@/components/Cards/TeamCard'

const teamMembers = [
  {
    name: 'Masud Shafin Ahmed',
    semester: '7th',
    institute: 'Assam Down Town Unniversity',
    role: 'Designer & Developer',
    avatar: '/Avatars/shafin.jpeg'
  },
  {
    name: 'Kaustav Pratick Hazarika',
    semester: '7th',
    institute: 'Assam Down Town Unniversity',
    role: 'Researcher',
     avatar: '/Avatars/kaustav.jpeg'
  },
  {
    name: 'Alak Sen',
    semester: '7th',
    institute: 'Assam Down Town Unniversity',
    role: 'Thesis Writer',
     avatar: '/Avatars/alaksen.jpeg'
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center  w-full p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Home;
