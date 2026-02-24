import MyButton from '@/components/MyButton'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <MyButton dis = {true}>Submit </MyButton>
      <MyButton>Click me</MyButton>
      <MyButton dis = {true}>Nice</MyButton>
    </div>
  )
}

export default Signup