import clsx from 'clsx';
import { FieldProps } from 'formik';
import { FC, InputHTMLAttributes, ReactNode, useRef } from 'react';
import { AiOutlineCheck, AiOutlineCheckSquare } from 'react-icons/ai';
import { BsCircle, BsSquare } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  align?: 'top' | 'center';
  block?: boolean;
  error?: boolean;
  blue?: boolean;
  className?: string;
}

const RadioField: FC<IProps & FieldProps> = ({
  field,
  form,
  label,
  align = 'center',
  block,
  error,
  checked,
  blue = false,
  className,
  value,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {name} = field;
  const {errors,touched} = form
  const handleChange = () => {
    inputRef.current?.click();
    form.setFieldValue(field.name, value);
  };
  return (
    <div
      className={clsx(
        'flex cursor-pointer',
        { 'items-center': align === 'center' },
        { 'w-fit': !block },
        className
      )}
      onClick={() => handleChange()}
    >
      <input type="radio" hidden {...props} ref={inputRef} {...field} />
      <div
        className={clsx(
          'w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
          { 'mt-1': align === 'top' },
          { 'text-red-500': errors[name] &&touched[name]}
        )}
      >
        {checked ? (
            <FiCheckCircle className="text-green-600" />
        ) : (
          <BsCircle />
        )}
      </div>
      <div className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </div>
    </div>
  );
};

export default RadioField;
