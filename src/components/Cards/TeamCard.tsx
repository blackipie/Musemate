'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../Buttons/ButtonOne';

interface TeamMember {
  name: string;
  semester: string;
  institute: string;
  role: string;
  avatar: string; // Add avatar property
  link: string
}

const TeamCard: React.FC<TeamMember> = ({ avatar, name, semester, institute, role, link }) => {
  const [loading, setLoading] = useState(true); // Add loading state
  const handleConnectClick = () => {
    window.open(link, '_blank'); // Opens the link in a new tab/window
  };
  return (
    <div className="bg-neutral-900 ring-1 ring-neutral-800 text-white p-4 rounded-lg shadow-md">

      <Image
        src={avatar}
        alt={`${name}`}
        width={100}
        height={100}
        objectFit="cover"
        placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
        quality={100}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        className={`w-20 ring-1 ring-neutral-600 bg-neutral-800 ${loading && 'blur-sm'} h-20 rounded-full mb-2`} />

      <h3 className="text-lg font-semibold">{name}</h3>
      <div className='text-neutral-300 flex flex-col gap-1'>
        <p className="text-sm">{semester} semester</p>
        <p className="text-sm">{institute}</p>
        <p className="text-sm">{role}</p>
        <Button className='mt-4' onClick={handleConnectClick}>
          Connect
        </Button>
      </div>
    </div>
  );
};

export default TeamCard;
