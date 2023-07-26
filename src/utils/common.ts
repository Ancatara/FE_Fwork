import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const isLetter = (value: string) => {
  return value.toLowerCase() !== value.toUpperCase();
};


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const numberToMoney = (money:number|undefined)=>{
  if (money !== undefined)
    return money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  else return 0;
}