import React from 'react'
import { useId } from 'react'
import Container from './Container'
import { useDispatch } from 'react-redux'
const Select = ({
    options,
    className,
    label,
    ...props
},ref) => {
    let id=useId()
  return (
    <Container>
        {label && <label htmlFor={id}>{label}</label>}
        <select id={id}
                {...props}
                ref={ref}
                >
            {options.map((option)=>(
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    </Container>
  )
}

export default React.forwardRef(Select)