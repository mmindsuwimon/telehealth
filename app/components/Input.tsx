import { Input as InputComponent } from 'antd'
import React from 'react'
import { InputProps } from 'antd'
export default function Input(props:InputProps) {
  return (
    <div>
        <InputComponent {...props} className='mb-2'/>
    </div>
  )
}