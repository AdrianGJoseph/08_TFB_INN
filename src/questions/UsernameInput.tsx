import React, { useState } from 'react';
import '../App.css';
import './UsernameInput.css'
import Button from '../components/Button'
import penguin from "./penguin-books.svg";

interface Props {
  avatar: string,
  getResult: () => void
}

interface Return {
  input: string
}

const adjectives = [
  "helpful", "fresh", "fussy", "elastic", "happy", "daring",
  "digital", "active", "amused", "brave", "cool", "cute"
]

const animals = [
  "crocodile", "panda", "bird", "spider", "tiger", "cat",
  "rabbit", "butterfly"
]

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

const randomName = (list1: any[], list2: any[]) => {
  const adjective = list1[randomInt(list1.length)]
  const animal = list2[randomInt(list2.length)]
  return "${adjective}-${animal}"
}

const UsernameInput: React.FC<Props> = props => {
  // set a randomly generated name that will be kept if user doesn't type anything
  const [input] = useState(randomName(adjectives, animals))

  return (
    <div>
      <div className='imageContainer'>
        <img src={penguin} alt="Avatar" />
      </div>
      <h1 className='h1'>Mitt navn er</h1>
      <form>
        <input type="text" name="name" />
      </form>
      <Button classNames='paused' onClick={() => props.getResult()}>
        Neste
      </Button>
    </div>
  );
};

export default UsernameInput;