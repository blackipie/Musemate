import React from 'react';

interface InputWithButtonProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
    disabled: boolean;
    btnContent: any;
    type?: string
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  placeholder,
  value,
  onChange,
  onClick,
    disabled,
    btnContent,
  type
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 w-full justify-between">
        <input
        type={type ||'text' }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded bg-neutral-950 text-white outline-none ring-1 ring-neutral-700 focus:border-neutral-700 flex-grow w-full sm:w-auto focus:bg-neutral-800 transition-all duration-300 p-6"
      />
      <button
        onClick={onClick}
        className="bg-neutral-900 flex-grow sm:flex-grow-0 ring-1 ring-neutral-800 hover:opacity-70 rounded font-semibold p-6"
        disabled={disabled}
      >
        {btnContent}
      </button>
    </div>
  );
};

export default InputWithButton;
