import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'
import { Text_Container } from '../containers/text_container'

interface Range_Input_Props extends Input_Props {
  //Props
}

export const Range_Input : FC<Range_Input_Props> = ({className}) => {
  className = className || "h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
  
  return (
    <div className="p-8">
      <Input_Base className={className} props={{
      type:"range"
      }} />
    <div className="pt-2 flex justify-between w-full">
        <Text_Container text="0" />
        <Text_Container text="10" />
    </div>
    </div>
    
  )
}
