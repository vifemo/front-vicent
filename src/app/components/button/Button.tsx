import React from 'react'
import './button.css'

interface ButtonProps {
  text: string
  onClick: (e: React.FormEvent) => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button className="form-button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
