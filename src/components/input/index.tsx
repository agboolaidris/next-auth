import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const inputStyles = cva(
  'w-full items-center flex px-2 rounded focus-within:border-2 border transition duration-300',
  {
    defaultVariants: {
      intent: 'normal',
      size: 'md',
    },
    variants: {
      intent: {
        normal: 'border-gray-200',
        primary: 'border-blue-500',
      },
      size: {
        lg: 'h-15',
        md: 'h-10',
      },
    },
  }
);

export type InputProps = VariantProps<typeof inputStyles> & {
  label?: string;
  loading?: boolean;
  error?: string;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      onBlur,
      disabled,
      name,
      label,
      error,
      type,
      placeholder,
      intent,
      size,
      value,
      className,
    },
    ref
  ) => {
    return (
      <div className={classNames('block w-full')}>
        {label && <span className="mb-1 block text-sm">{label}</span>}
        <div className={classNames(inputStyles({ className, intent, size }))}>
          <input
            className={classNames(
              'h-full w-full bg-transparent text-xs outline-none placeholder:text-xs',
              {
                'pointer-events-none opacity-60': disabled,
              }
            )}
            disabled={disabled}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            type={type}
            value={value}
          />
        </div>

        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
