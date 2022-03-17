import React, {useState}  from 'react'
import styled from "styled-components";
import Link from 'next/link';
import {useRouter} from 'next/router';
import ax from "axios";
import { v4 as uuidv4 } from 'uuid';

const Cont = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  row-gap: 56px;
`

const TextInput = styled.input`
  box-sizing: border-box;
  color: #8D8D8D;
  width: 275px;
  height: 50px;
  background-color: #F9F9F9;
  border-radius: 10px;
  border: none;
  padding-left: 16px;

  ::placeholder {
    color: #8D8D8D;
  }
  :focus {
    outline: none;
  }
`;

const RowGap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  row-gap: 24px;
`

const Submit = styled.input`
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: Dongle;
  font-size: 33px;

  color:#FFFFFF;
  background-color: #8CC8A2;
  width: 275px;
  height: 50px;

  border: none;
  border-radius: 62px;
  padding-top: 5px;
  margin-bottom: 0px;

  cursor: pointer;

  &:hover {
    border-color:#FEBDC3;
    background-color: #FEBDC3;
  };
`;

export default function AuthLogIn({
  value = "Log In"
}) {
  const router = useRouter();
  const [input, setInput] = useState({
    name:'',
    email:'',
    password:'',
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]: value
      }
    })
  }
  
  const handleClick = async (event)=>{
    event.preventDefault();
    const user = {
      name: input.name,
      email: input.email,
      password: input.password
    }

    try{
      let res = await ax.post('http://localhost:3000/login', user)
      localStorage.setItem('token', res.data)
      localStorage.setItem('user', res.config.data)
      console.log("logged in")
      console.log(res.data, "token")

      // check the user
      if(localStorage.getItem('token')){
        console.log('checked')
        // allow some operstion for logen in user
        router.push(`/wishlist/${res.data}`);

      }
    }catch(e){
      console.log(e)
      // console.log("failed login")
    }
  }
  

  return ( <Cont>
    <RowGap>
      <TextInput onChange={handleChange} value={input.name} type="text" name="name" placeholder="Username" autoComplete='off'/>
      <TextInput onChange={handleChange} value={input.email} type="text" name="email" placeholder="Email" autoComplete='off' />
      <TextInput onChange={handleChange} value={input.password} type="text" name="password" placeholder="Password" autoComplete='off' />
    </RowGap>

    <RowGap>
      <Submit type="submit" value={value} onClick={handleClick} />
    </RowGap>
    
</Cont>
  )
}
