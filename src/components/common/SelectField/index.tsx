import clsx from "clsx";
import { FC, useId } from "react";
import ReactSelect, { Props, components } from "react-select";
import { VscCheck } from "react-icons/vsc";
import { FieldProps } from "formik";

interface IProps extends Props {
  title?: string;
  isGroup?: boolean;
  placeholder?: string;
  className?: string;
  error?: string;
  modal?: boolean;
  borderSolid?:boolean;
  onChange?:(e:any)=>void;
  disabled?: boolean;
  height?:string;
  inputClassName?:string;
  hideError?:boolean;
}

const SelectField: FC<IProps&FieldProps> = ({
  field,
  form,
  title,
  isGroup,
  placeholder = "",
  className = "",
  error,
  modal = false,
  borderSolid,
  onChange,
  disabled,
  height,
  inputClassName,
  hideError,
  ...props
}) => {
  const handleChange = (e:any)=>{
    if(onChange){
      onChange(e.value)
    }
    form.setFieldValue(field.name,e.value)
  }
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="text-[13px] text-[#000] mb-2 font-semibold">
          {title}
        </div>
      )}
      <ReactSelect
        id={field.name}
        instanceId={useId()}
        className={`${inputClassName} absolute top-0 left-0 w-[100%] basic-single `}
        classNamePrefix="select"
        menuPlacement="auto"
        isDisabled={disabled}
        components={{
          GroupHeading: (props) => (
            <components.GroupHeading
              {...props}
              style={{ color: "black", fontWeight: "bold" }}
            />
          ),
          Option: (props) => (
            <div
              {...props.innerProps}
              className="flex items-center justify-between px-4 py-1 cursor-pointer hover:bg-neutral-200"
            >
              <span className={clsx({ "text-sm pl-2": isGroup })}>
                {/* @ts-ignore */}
                {props.data.label}
              </span>
              {props.isSelected && <VscCheck />}
            </div>
          ),
        }}
        styles={{
          control: (base, state) => ({
            ...base,
            textTransform: 'capitalize',
            color:"black",
            boxShadow: "none",
            borderColor: error
              ? "rgb(239 68 68)"
              : "black",
            "&:hover": {
              borderColor: error
                ? "rgb(239 68 68)"
                : modal?borderSolid?"#575C76":
                 "#E4E6EE"
                : "black",
            },
            minHeight: modal ? "32px" : "27px",
            height:height?height:"42px",
            borderRadius:  "8px",
            backgroundColor:  "translate",
            whiteSpace:"nowrap"
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding:  "8px",
          }),
        }}
        placeholder={placeholder}
        {...props}
        {...field}
        onChange={(e)=>handleChange(e)}
      />
      {(!!error && !hideError) && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default SelectField;
