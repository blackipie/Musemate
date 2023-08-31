'use client'

import React, { useState } from 'react';
import InputWithButton from '@/components/SecurityToolComponents/inputWithButton';
import axios from 'axios';



const LinkAnalyzer: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');

  const handleCheck = async () => {
      try {
        setIsLoading(true)
       const response = await axios.post( `/api/url`,{ url}, // Send domain as JSON payload
      { headers: { 'Content-Type': 'application/json' } } );
  
        console.log(response.data)
    
   
    }
        
    catch (error) {
    console.error('Error fetching data:', error);
      } finally {
           setIsLoading(false)
  }
};
  



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  

  return (
   <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8 ">Link Expander</h1>
              
          <InputWithButton placeholder={'Enter shortened URL'}
                  value={url}
                  onChange={handleInputChange}
                  onClick={handleCheck}
                  disabled={isLoading || !url}
                  btnContent={isLoading ? 'Expanding...' : 'Expand'} />
       
  
    </div>
  );
};

export default LinkAnalyzer;
