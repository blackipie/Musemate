'use client'
import SimpleLoader from '@/components/loaders/Simple';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

const WhoisChecker: React.FC = () => {
    const [domain, setDomain] = useState('');
    const [isloading, setLoading] = useState(false);
    const [whoisData, setWhoisData] = useState<boolean | null | string>(null);
    
    const handleCheck = async () => {
      try {
    setLoading(true)
    setWhoisData(null)
    const response = await axios.post(
      `/api/whois/`,
      {
         domain
      }, // Send domain as JSON payload
      { headers: { 'Content-Type': 'application/json' } } // Set Content-Type header
      );
        const { rawWhoisData } = response.data 
        console.log(response.data)
        if (rawWhoisData==="") { 
              setWhoisData(false)
        } else {
           
            setWhoisData(rawWhoisData)
        }
    }
        
    catch (error) {
    setWhoisData(false)
    console.error('Error fetching WHOIS data:', error);
      } finally {
           setLoading(false)
  }
};
    
  return (
    <div className="container mx-auto mt-10 p-4 space-y-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8">Whois Checker</h1>
      <div className="flex">
    <input
          type="text"
          placeholder="Enter a domain name (example.com)"
        
          value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                   className=" rounded  bg-neutral-950 
  text-white outline-none  ring-1 ring-neutral-700
  focus:border-neutral-700 focus:bg-neutral-800 
   transition-all duration-300 flex-grow mr-2 p-6"
        />
            <button onClick={handleCheck} className="bg-neutral-900 ring-1 ring-neutral-800 
          hover:opacity-70 p-6 rounded font-semibold ">
        Check WHOIS
              </button>
          </div> 
  
  <SimpleLoader isLoading={isloading} />
 {whoisData && (
  <div className="bg-neutral-800 p-4 rounded flex">
    <pre className="text-white whitespace-pre-wrap">{whoisData}</pre>
  </div>
          )  
          }
     {whoisData === false  &&
              (<pre className="text-white whitespace-pre-wrap">Looks like this domain has not been registered yet
             (If registered, visit <Link href={`https://www.whois.com/whois/${domain}`} target='_blank' className='underline text-gray-300'>https://www.whois.com/whois/{domain}</Link>)</pre>)
    }
     </div>
  );
};

export default WhoisChecker;
