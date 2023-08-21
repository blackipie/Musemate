import React from 'react';
import DocsCard from '../../../components/Cards/CardDocs';

const Documents = [
  {
    title: 'Presentation',
    description: 'Download the ppt of Musemate presentaton',
    link: '#',
    ext: 'PPT'
  },
  {
    title: 'Synopsis',
    description: 'Download the synopsis of Musemate Project',
    link: '#',
      ext: 'PDF'
  },
  {
    title: 'Dissertation',
    description: 'Download the Dissertation of Musemate Project',
    link: '#',
      ext: 'PDF'
  },
];

const Docs: React.FC = () => {
  return (
    <div className="flex justify-center items-center  w-full p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {Documents.map((doc, docIndex) => (
          <DocsCard key={docIndex} {...doc} />
        ))}
      </div>
    </div>
  );
};

export default Docs;
