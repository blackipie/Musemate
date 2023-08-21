'use client'

import { useState } from 'react';
import zxcvbn from 'zxcvbn';
import cryptoRandomString from 'crypto-random-string';
import { Eye, EyeOff } from 'lucide-react';
import InputWithButton from '@/components/SecurityToolComponents/inputWithButton';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Estimate password strength and update the progress
    const strength = zxcvbn(newPassword).score;
    setPasswordStrength(strength);
  };

 const generateStrongPassword = () => {
    // Generate a strong password using the crypto-random-string library
    const newPassword = cryptoRandomString({ length: 12, type: 'url-safe' });
    setPassword(newPassword);

    const strength = zxcvbn(newPassword).score;
    setPasswordStrength(strength);
    };
    
const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    return (
 <div className="container mx-auto mt-10 p-4 space-y-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-8 ">Password Generator</h1>
        
       <InputWithButton
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter a domain name (example.com)"
        value={password}
        onChange={handleChange}
        onClick={toggleShowPassword}
        disabled={password.length < 1 || password.trim() === ''}
        btnContent={showPassword ? ( <><Eye/> Hide  </>) : (<><EyeOff/> Show </>   )}
      />
         
      <div className="relative h-2 bg-gray-200 w-full rounded">
        <div
          className={`absolute top-0 left-0  h-2 rounded ${
            passwordStrength === 0
              ? 'w-0'
              : passwordStrength === 4
              ? 'w-full bg-green-500'
              : passwordStrength === 3
              ? 'w-3/4 bg-yellow-500'
              : passwordStrength === 2
              ? 'w-1/2 bg-orange-500'
              : 'w-1/4 bg-red-500'
          }`}
        />
      </div>
      <button
        onClick={generateStrongPassword }
        className="bg-neutral-800 text-white px-4 py-2 rounded"
      >
        Generate Strong Password
      </button>
    </div>
  );
};

export default PasswordStrengthChecker;
