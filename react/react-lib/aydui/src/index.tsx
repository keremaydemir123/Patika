import * as React from 'react'
import styles from './button.module.css'

interface Props {
  children: React.ReactNode
  className?: string
  theme?: 'primary' | 'secondary' | 'accent'
}

export const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  const [isHover, setIsHover] = React.useState(false)
  const [cfg, setCfg] = React.useState({
    bgColor: '#333',
    textColor: '#eee',
    borderColor: '#333',
    hoverBgColor: '#444'
  })

  React.useEffect(() => {
    const button = document.querySelector(`.${styles.button}`)
    if (!button) return
    const buttonVars = getComputedStyle(button)

    if (!props.theme) return
    const bgColor = buttonVars.getPropertyValue(`--${props.theme}`)
    const textColor = buttonVars.getPropertyValue(
      `--${props.theme}` + 'Content'
    )
    const borderColor = buttonVars.getPropertyValue(
      `--${props.theme}` + 'Border'
    )
    const hoverBgColor = buttonVars.getPropertyValue(
      `--${props.theme}` + 'Hover'
    )
    setCfg({ bgColor, textColor, borderColor, hoverBgColor })
  }, [props.theme])

  return (
    <button
      {...props}
      style={{
        backgroundColor: isHover ? cfg.hoverBgColor : cfg.bgColor,
        color: cfg.textColor,
        borderColor: cfg.textColor
      }}
      className={`${styles.button} ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </button>
  )
}
