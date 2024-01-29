import { Ref, forwardRef, useId } from 'react';

import { InputPropsType } from '@/utils/types';

const FloatingInput = forwardRef<HTMLInputElement, InputPropsType>(
  (
    { label, className, error, inputClasses, ...inputprops }: InputPropsType,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = useId();
    return (
      <div ref={ref} className={`relative flex flex-col ${className}`}>
        <input
          autoComplete="off"
          className={`px-5 pb-2 pt-6 text-dark text-base border appearance outline-none peer ${
            error
              ? '!border-red focus:!border-red'
              : 'border-transparent focus:border-line'
          } ${inputClasses}`}
          id={id}
          placeholder=" "
          {...inputprops}
        />
        <label
          className="absolute cursor-text text-dark font-manrope duration-300 transform -translate-y-3 scale-75 top-4 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={id}
        >
          {label}
        </label>
        <p className="mt-0.5 text-xs text-red-600">{error}&nbsp;</p>
      </div>
    );
  },
);

FloatingInput.displayName = 'FloatingInput';

export default FloatingInput;
