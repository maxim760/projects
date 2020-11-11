import React from "react"
import classes from "html-classes"
type propsTypes = {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  outline?: boolean
  circle?: boolean
  disabled?: boolean  
}
export const Button : React.FC<propsTypes> = ({className, children, onClick,outline, circle, disabled} :propsTypes ) : React.ReactElement => {
  return (
    <button
      className={classes(
        "button", className, {
          "button--outline": outline,
          "button--circle": circle,
          "button--disabled": disabled,
        }
      )}
      onClick={onClick}

    >
      {children}
    </button>
  )
}
