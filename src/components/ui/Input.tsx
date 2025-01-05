interface InputProps {
    placeholder: string
    reference?: any
}

export function Input({reference, placeholder}: InputProps) {
    return (
        <div>
            <label htmlFor="">{placeholder}</label>
            <input ref={reference} type="text" className="px-4 py-2 rounded border m-4" placeholder={placeholder}/>
        </div>
        
    )
}