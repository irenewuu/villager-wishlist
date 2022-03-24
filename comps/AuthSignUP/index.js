import React, {useState}  from 'react';
import {useRouter} from 'next/router';
import styled from "styled-components";
import Link from 'next/link';
import ax from "axios";

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

const Signin = styled.p`
  color: #8D8D8D;
`

export default function AuthSignUp({
  value = "Sign Up"
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
  
  const handleClick = async (event) => {
    event.preventDefault();
    const newUser = {
      name: input.name,
      email: input.email,
      password: input.password
    }
    try {
      // let res = await ax.post('http://localhost:3000/signup', newUser)
      let res = await ax.post('https://villager-wishlist.herokuapp.com/signup', newUser)      
      localStorage.setItem('token', res.data)
      localStorage.setItem('user', res.config.data)
      console.log(res.data, "token")
      console.log("signed up")
      router.push("/logIn")
    } catch(e) {
      console.log(e)
    }
  }


  return ( <Cont>
    <RowGap>
        <TextInput onChange={handleChange} value={input.name} type="text" name="name" placeholder="Username" autoComplete='off'/>
        <TextInput onChange={handleChange} value={input.email} type="text" name="email" placeholder="Email" autoComplete='off'/>
        <TextInput onChange={handleChange} value={input.password} type="text" name="password" placeholder="Password" autoComplete='off' />
    </RowGap>

    <RowGap>
      <Submit type="submit" value={value} onClick={handleClick} />
      <Signin>Have an account? <Link href="/logIn">Log In</Link></Signin>
    </RowGap>
    
</Cont>

  )
}
