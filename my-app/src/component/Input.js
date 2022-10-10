import { useState, useEffect } from 'react';


function Input() {

  const [name, setName] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const editText = (e) =>{
    setName(e.target.value)
  }

  useEffect(() => {
    setPalindrome(name.toLowerCase().split("").reverse().join(""));
  }, [name]);


  return (
    <div>
        <form>
            <label>Enter your text:
            <input type="text" value={name} onChange={(e)=> editText(e)}/>
            </label>
        </form>
        <h1>{(name === "") ? "" : (name.replace(/[^a-zA-Z0-9]/g, '') === palindrome.replace(/[^a-zA-Z0-9]/g, '')) ? "Palindrome" : "Tidak Palindrome"}</h1>
    </div>
  );
}

export default Input;
