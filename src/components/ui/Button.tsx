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
    "primary" : "bg-purple-600 text-gray-50 hover:bg-indigo-300 duration-150",
    "secondary" : "bg-white text-purple-500 hover:bg-indigo-100 duration-150"
}


const sizeStyles = {
    "sm" : "py-1 px-2 text-sm rounded-sm",
    "md" : "py-2 px-4 text-md rounded-md",
    "lg" : "py-4 px-6 text-xl rounded-xl"
}

function Button(props: ButtonProps) {
  return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full flex justify-center items-center" : ""} ${props.loading ? "opacity-45" : ""}`} disabled={props.loading}>
    <div className="flex items-center">
        {props.startIcon} 
        <div className="pl-2 pr-2">
            {props.text}
        </div>
        {props.endIcon}
    </div>
    
    </button>
  
}

export default Button
