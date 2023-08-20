import { VariantProps, cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '../../libs/utils';

const listVariants = cva(['flex', 'items-center'], {
    variants: {
        variant: {
            primary: [
                'bg-transparent',
                'items-center',
                'placeholder:text-neutral-300',
            ],
            secondary: ['text-neutral-400', 'cursor-pointer'],
            info: ['text-neutral-600'],
        },
        effect: {
            none: [],
            slideUp: [
                'transform',
                'transition-transform',
                'duration-300',
                'hover:-translate-y-1',
            ],
            changeColor: [
                'transform',
                'transition-colors',
              
            ],
        },
        sizes: {
            xs: ['text-xs', 'gap-1'],
            small: ['text-sm', 'px-2', 'gap-4'],
            medium: ['text-sm', 'gap-4', 'p-4'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        sizes: 'medium',
        effect: 'none',
    },
});

interface ListProps extends VariantProps<typeof listVariants> {
    link?: string;
    children: ReactNode;
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

const List: FC<ListProps> = ({
    variant,
    sizes,
    className,
    children,
    effect,
    link,
    target
}) => {
    return (
        <>
            {link ? (
                <Link
                    href={link}
                    target={target}
                    className={cn(
                        listVariants({ variant, sizes, className, effect })
                    )}
                >
                    {children}
                </Link>
            ) : (
                <>
                    <div
                        className={cn(
                            listVariants({ variant, sizes, className, effect })
                        )}
                    >
                        {children}
                    </div>
                </>
            )}
        </>
    );
};

export default List;