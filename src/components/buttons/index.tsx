import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonstyle = cva('rounded', {
  defaultVariants: {
    block: false,
    size: 'sm',
    variants: 'primary',
  },
  variants: {
    block: { true: 'block w-full' },
    size: {
      md: 'py-2 px-4',
      sm: 'p-2',
    },
    variants: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'border border-gray-100 hover:bg-gray-100',
    },
  },
});

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  variants,
  size,
  className,
  children,
  block,
  ...rest
}: Props) => {
  const style = buttonstyle({ block, className, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
