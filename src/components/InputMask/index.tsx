import React, { InputHTMLAttributes, useCallback } from "react";

const InputMask: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    ...props
}) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        
        e.currentTarget.maxLength = 9;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2")
        e.currentTarget.value = value;
    }, [])

    return (
        <div>
            <input { ... props} onKeyUp={handleKeyUp} />
        </div>
    )
}

export default InputMask;