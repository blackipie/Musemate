import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/libs/utils';

const buttonVariants = cva(
    [
        'ring-1', 'bg-neutral-800', 'ring-neutral-700',
        'hover:ring-neutral-600', 
        'h-max',
        'w-max',
        'flex',
        'gap-2',
        'justify-center',
        'items-center',
        'rounded-md',
        'outline-0',
        'active:scale-95',
        'active:shadow-inner',
        'disabled:opacity-50',
        'disabled:pointer-events-none',
        'disbaled:cursor-not-allowed',
    ],
    {
        variants: {
        
            sizes: {
                iconOnly: ['text-xs', 'p-2'],
                small: ['text-xs', 'py-2', 'px-4'],
                medium: ['text-sm', 'font-bold', 'py-3', 'px-4'],
            },
        },
        defaultVariants: {
          
            sizes: 'small',
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
 
    sizes,
    className,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cn(buttonVariants({  sizes, className }))}
        >
            {children}
        </button>
    );
};

export default Button;