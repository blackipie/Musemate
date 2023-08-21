'use client'
import React from 'react';
import Button from '../Buttons/ButtonOne';
import { DownloadCloud, File } from 'lucide-react';
import { useRouter } from 'next/navigation';

type DocProps = {
    title: string;
    description: string;
    ext: string
    link: string
}

const DocsCard: React.FC<DocProps> = ({ title, description, link,ext }) => {
    const router = useRouter()
    const handleConnectClick = () => {
        router.push(link); // Opens the link ir download
    };
    return (
        <div className="bg-neutral-900 ring-1 ring-neutral-800 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold flex items-center gap-2"> <File /> {title}
                <span className="text-xs opacity-70 font-normal py-1 rounded
                 px-2 bg-neutral-800">{ext}</span>
            </h3>
            <div className='text-neutral-300'>
                <p className="text-sm mt-4">{description}</p>
                <Button className='mt-4' onClick={handleConnectClick}>
                    Download <DownloadCloud />
                </Button>
            </div>
        </div>
    );
};

export default DocsCard;
