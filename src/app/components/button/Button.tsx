import React from 'react'
import './button.css'

interface ButtonProps {
  text: string
  onClick: (e: React.FormEvent) => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  variant = 'primary',
}) => {
  return (
    <button
      className={`button button--${variant} ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
