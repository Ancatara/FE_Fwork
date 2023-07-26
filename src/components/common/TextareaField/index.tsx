import clsx from 'clsx';
import {
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import { useToggle } from 'react-use';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FieldProps } from 'formik';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  description?: string;
  placeholder?: string;
  iconTitle?: ReactNode;
  value?: string;
  block?: boolean;
  width?: 'md' | 'lg' | 'base' | 'xl';
  inputClassName?: string;
  pattern?: 'base' | 'highlight';
  error?: ReactNode;
  iconRight?: ReactNode;
  arrayError?: boolean;
  hideMessage?: boolean;
}

const TextareaField: FC<IProps & FieldProps> = ({
  field,
  form,
  title,
  value,
  description,
  placeholder,
  iconTitle,
  block,
  width = 'xl',
  inputClassName,
  className,
  pattern = 'base',
  iconRight,
  error,
  arrayError,
  hideMessage,
  ...props
}) => {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div
      className={clsx('flex flex-col relative', { 'w-full': block }, className)}
    >
      {title && (
        <div
          className={clsx(
            'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          )}
        >
          {iconTitle && <span className="mr-2">{iconTitle}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="relative">
        <textarea
          id={field.name}
          className={clsx(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            { 'focus:border-black hover:border-black': !error },
            { 'border-red-500': showError || arrayError },
            inputClassName
          )}
          placeholder={placeholder}
          {...props}
          {...field}
        />
        {iconRight && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
            {iconRight}
          </div>
        )}
      </div>
      {showError && !hideMessage && (
        <div className="mt-1 text-sm text-red-500">
          {errors[name]?.toString()}
        </div>
      )}
    </div>
  );
};

export default TextareaField;
