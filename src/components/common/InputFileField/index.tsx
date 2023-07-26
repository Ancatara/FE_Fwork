import clsx from 'clsx';
import { FC, FormEvent, InputHTMLAttributes, ReactNode } from 'react';

import axios from 'axios';
import { FieldProps } from 'formik';
import { IconContext } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';
import { IoMdAttach } from 'react-icons/io';
import { TOKEN } from 'constants/storage';
import { HiPhotograph } from 'react-icons/hi';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
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
  loading?: boolean;
  arrayError?: boolean;
  hideMessage?: boolean;
  onChange?: (fileInfo: any) => void;
}
const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const InputFileField: FC<IProps & FieldProps> = ({
  field,
  form,
  type,
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
  error,
  arrayError,
  hideMessage,
  onChange,
  loading,
  ...props
}) => {
  const { name } = field;
  const { values, errors, touched, setFieldValue } = form;
  const showError = errors[name] && touched[name];
  const handleChange = async (e: FormEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange((e.target as any).files);
    }
    setFieldValue(
      name,
      (e.target as any).files
    );
    

    // setFieldValue(name, (e.target as any).files || null);
  };
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center relative',
        { 'w-full': block },
        className
      )}
    >
      {title && (
        <div
          className={clsx('font-bold flex items-center text-[13px]', {
            'mb-[6px]': !description,
          })}
        >
          {iconTitle && <span className="mr-2">{iconTitle}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="relative">
        <label
          htmlFor={field.name}
          className="flex relative w-fit items-center font-semibold hover:cursor-pointer
           z-10 bg-white"
        >
          <div className="animate-spin">
            {loading && (
              <IconContext.Provider
                value={{
                  color: '#e5e5e5',
                }}
              >
                <div>
                  <ImSpinner2 size={20} />
                </div>
              </IconContext.Provider>
            )}
          </div>
              <HiPhotograph size={26} className='text-gray-500'/>
        </label>
        <div className="w-full h-fit relative left-0 top-0 overflow-hidden z-[-1]">
          <input
            id={field.name}
            type="file"
            multiple
            className={clsx(
              'relative text-[color:var(--text-color-black)] border-0 font-semibold hidden',
              { 'hover:border-[color:var(--gray-7)]': !error },
              { 'border-[color:var(--red-err)]': showError || arrayError },
              inputClassName
            )}
            placeholder={placeholder}
            {...props}
            // {...field}
            //@ts-ignore
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {showError && !hideMessage && (
        <div className="mt-1 text-sm text-red-500">
          {errors[name]?.toString()}
        </div>
      )}
    </div>
  );
};

export default InputFileField;
