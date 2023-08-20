'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SimpleLoader from '@/components/loaders/Simple';

const IPAddressTracker = () => {
  const router = useRouter()
  const [ipAddress, setIPAddress] = useState('');
  const [ipDetails, setIPDetails] = useState<any>(null);
    const [isloading, setLoading] = useState(false);
  useEffect(() => {
     router.refresh()
    // Fetch the user's current IP address using an external service
    const fetchCurrentIPAddress = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api64.ipify.org?format=json');
        setIPAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching current IP address:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchCurrentIPAddress();
  }, []);

  const fetchIPDetails = async () => {
    try {
         setLoading(true)
        const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
        console.log(response.data)
      setIPDetails(response.data);
    } catch (error) {
      console.error('Error fetching IP details:', error);
    } finally {
         setLoading(false)
    }
  };

  return (
 <div className="container mx-auto mt-10 p-4 space-y-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8 ">IP Address Tracker</h1>
     
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter IP address"
          value={ipAddress}
          onChange={(e) => setIPAddress(e.target.value)}
           className=" rounded  bg-neutral-950 
  text-white outline-none  ring-1 ring-neutral-700
  focus:border-neutral-700 focus:bg-neutral-800 
   transition-all duration-300 flex-grow mr-2 p-6"
        />
        <button onClick={fetchIPDetails}  className="bg-neutral-900 ring-1 ring-neutral-800 
          hover:opacity-70 p-6 rounded font-semibold ">
          Track
        </button>
      </div>
      {ipAddress && (
        <p className="mb-2">
          Your Current IP Address: {ipAddress}
        </p>
      )}

        <SimpleLoader isLoading={isloading} />

      {ipDetails && (
        <div>
          <h2 className="text-xl font-semibold mb-2">IP Address Details</h2>
     <p>
            IP Address: {ipDetails.query}
            <br />
            City: {ipDetails.city}
            <br />
            Region: {ipDetails.regionName}
            <br />
            Country: {ipDetails.country}
            <br />
            Location: {ipDetails.lat}, {ipDetails.lon}
            <br />
            ISP: {ipDetails.isp}
          </p>
        </div>
      )}
    </div>
  );
};

export default IPAddressTracker;
