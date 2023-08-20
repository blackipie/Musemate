
import React from 'react';
import Loader from './PuffLoader';

const SimpleLoader = ({ isLoading }:any) => {
  return (
    <div>
      {isLoading && (
              <>
                 <div className='animate-pulse gap-2 p-2 rounded'>
                        <Loader/>
                </div>
              </>
      )}
    </div>
  );
};

export default SimpleLoader;