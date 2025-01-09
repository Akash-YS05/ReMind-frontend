import { ReactElement } from "react"

type Variants = "primary" | "secondary"

export interface ButtonProps {
    variant: Variants
    size: "sm" | "md" | "lg"
    text: string | ReactElement
    startIcon?: ReactElement
    endIcon?: ReactElement
    onClick?: () => void
    fullWidth?: boolean
    loading?: boolean
}

const variantStyles = {
    "primary" : "bg-[#1dfbbd] text-black hover:bg-[#aff8e3] hover:scale-105 duration-200",
    "secondary" : "bg-[#FAFFD1] text-black hover:bg-[#fcfba1] hover:scale-105 duration-200"
}


const sizeStyles = {
    "sm": "py-1 px-1 text-sm rounded-sm sm:py-2 sm:px-3 sm:rounded-md", // Slightly larger on small screens
    "md": "py-2 px-2 text-md rounded-md sm:py-2 sm:px-3 sm:rounded-lg", // Medium size adjusts on small screens
    "lg": "py-3 px-3 text-sm rounded-xl sm:py-5 sm:px-7 sm:rounded-2xl" // Large size adapts for small screens
  };
  

function Button(props: ButtonProps) {
  return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full flex justify-center items-center" : ""} ${props.loading ? "opacity-45" : ""}`} disabled={props.loading}>
    <div className="flex items-center">
        {props.startIcon} 
        <div className="px-1 md:px-3">
            {props.text}
        </div>
        {props.endIcon}
    </div>
    
    </button>
  
}

export default Button
