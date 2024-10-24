import {FC} from 'react'
import { Layout_Props } from './types'

interface Grid_Layout_Props extends Layout_Props {

}

export const Grid_Layout : FC<Grid_Layout_Props> = ({className, children}) => {
  className = className || "grid grid-cols-2"
  return (
    <div className={className}>
      {children}
    </div>
  )
}
