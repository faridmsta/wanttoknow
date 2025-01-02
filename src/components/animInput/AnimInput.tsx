import { useRef, useState, useEffect } from 'react'
import './AnimInput.scss'

function AnimInput({ value, setValue,className, ...props }: { value: string; setValue: Function,className:string }) {

    const [input, setInput] = useState<string>(value);  
    const [isFocused, setIsFocused] = useState<boolean>(false);  
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setInput(value); 
    }, [value]);  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);  
        setValue(e.target.value);  
    };

    const handleFocus = () => {
        setIsFocused(true);  
    };

    const handleBlur = () => {
        setIsFocused(false);  
    };

    return (
        <div {...props} className={`animInput ${className} `}>
            <input
                ref={inputRef}
                value={input}  
                onChange={handleChange}
                onFocus={handleFocus}  
                onBlur={handleBlur}  
                type="text"
                style={{
                    opacity: 0,
                    width: 0,
                    height: 0,
                    padding: 0
                }}
            />
            <div
                onClick={() => { inputRef.current?.focus() }}
                className={`input ${isFocused ? 'focused' : ''}`}  
            >
                {input}
            </div>
        </div>
    );
}

export default AnimInput;
