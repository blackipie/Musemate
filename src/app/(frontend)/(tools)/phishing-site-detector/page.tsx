'use client'
import { useState } from 'react';
import axios from 'axios';

const PhishingDetector = () => {
  const [url, setUrl] = useState('');
  const [isPhishing, setIsPhishing] = useState<boolean | null>(null);

  const checkPhishing = async () => {
      try {
        setIsPhishing(null)
        const response = await axios.post(
        `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyA8MI-DFG5SWXMId0vr3wBJa6eW80reFU4`,
        {
          client: {
            clientId: '1047567589860-1j6ceoatqt30dd748fkltadu04j1k70h.apps.googleusercontent.com',
            clientVersion: '1.0',
          },
          threatInfo: {
            threatTypes: ['SOCIAL_ENGINEERING'],
            platformTypes: ['ANY_PLATFORM'],
            threatEntryTypes: ['URL'],
            threatEntries: [{ url }],
          },
        }
      );

      setIsPhishing(response.data.matches.length > 0);
      } catch (error) {
         
          setIsPhishing(false)
      
      console.error('Error checking phishing:', error);
      }
      
  };

    const isValidURL = (inputURL:string) => {
    return  /^(http|https):\/\/[^ "]+$/.test(
      inputURL
    );
  };
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8 ">Phishing site detector</h1>
      <div className="flex items-center">
      <input
  type="text"
  placeholder="Enter URL"
  value={url}
  onChange={(e) => setUrl(e.target.value)}
                  className=" rounded  bg-neutral-950 
  text-white outline-none  ring-1 ring-neutral-700
  focus:border-neutral-700 focus:bg-neutral-800 
   transition-all duration-300 flex-grow mr-2 p-6"
/>
              <button onClick={checkPhishing} className="bg-neutral-900 ring-1 ring-neutral-800 
          hover:opacity-70 p-6 rounded font-semibold "
               disabled={!isValidURL(url)} >
          Check
        </button>
      </div>
          <div className={`flex p-4 min-h-[4rem] bg-neutral-950 mt-12 
              rounded text-xl font-normal font-mono ring-1 
              ring-neutral-900 ${isPhishing===null&&'hidden'}`}>
                  {isPhishing === false && (
                  
                  <p className="text-green-500 ">This URL is safe.</p>
                  )}
   {isPhishing === true && (
        <p className="text-red-500 ">This URL is potentially a phishing site.</p>
      )}
              </div>
    </div>
  );
};

export default PhishingDetector;
