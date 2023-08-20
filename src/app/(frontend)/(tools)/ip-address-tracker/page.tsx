'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SimpleLoader from '@/components/loaders/Simple';
import InputWithButton from '@/components/SecurityToolComponents/inputWithButton';

const IPAddressTracker = () => {
  const router = useRouter()
  const [ip, setIPAddress] = useState('');
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
      setIPDetails(null);
      setLoading(true)
       const response = await axios.post(
      `/api/ip/`,
      {
         ip
      }, // Send ip as JSON payload
      { headers: { 'Content-Type': 'application/json' } } // Set Content-Type header
      );
     
      const { ipHtml} = response.data
      setIPDetails(ipHtml);
    } catch (error) {
      console.error('Error fetching IP details:', error);
    } finally {
         setLoading(false)
    }
  };



  return (
 <div className="container mx-auto mt-10 p-4 space-y-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8 ">IP Address Tracker</h1>
            
       <InputWithButton
        type={ 'text' }
        placeholder="Enter a domain name (example.com)"
        value={ip}
        onChange={(e) => setIPAddress(e.target.value)}
        onClick={fetchIPDetails}
        disabled={ip.length < 1 || ip.trim() === ''}
        btnContent={"Track"}
      />

      {ip && (
        <p className="mb-2">
          Your Current IP Address: {ip}
        </p>
      )}

        <SimpleLoader isLoading={isloading} />

      {ipDetails && (
        <div>
          <h2 className="text-xl font-semibold mb-2">IP Address Details</h2>   
            <div dangerouslySetInnerHTML={{ __html: ipDetails }} />
        </div>
      )}
    </div>
  );
};

export default IPAddressTracker;
