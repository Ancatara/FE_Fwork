import clsx from 'clsx';
import {
  FC,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useRef,
} from 'react';

import { BsSquare } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  align?: 'top' | 'center';
  block?: boolean;
  error?: boolean;
  className?: string;
  labelClass?: string;
  custormCheckBox?: ReactElement;
}

const Checkbox: FC<IProps> = ({
  label,
  align = 'center',
  block,
  checked,
  error,
  className,
  labelClass,
  custormCheckBox,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx(
        'flex cursor-pointer',
        { 'text-red-500': error },
        className
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input
        type="Checkbox"
        hidden
        {...props}
        ref={inputRef}
        className="w-4 h-4 accent-green-600 text-green-500 bg-gray-100 border-gray-300 rounded"
      />
      <div className={clsx('w-8 flex-shrink-0', { 'mt-1': align === 'top' })}>
        {checked ? <AiOutlineCheck /> : <BsSquare />}
      </div>
      <div
        className={`ml-2 text-sm font-medium text-green-600 dark:text-gray-300 ${labelClass}`}
      >
        {label}
      </div>
    </div>
  );
};

export default Checkbox;
