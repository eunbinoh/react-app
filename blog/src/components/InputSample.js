import React, { useState, useRef } from "react";

function InputSample(){
  
  const [inputs, setInputs] = useState({
    name: '',
    nick: ''
  });

  const nameInput = useRef();
  const {name, nick } = inputs;
  
  const onChange = (e) => {
    const { name, value } = e.target;
    //input name, value 호출 각각 반복되므로 선언
    
    //
    setInputs ({  // 객체상태를 업데이트 할때 ** 반드시 불변성을 지켜야 함 **
      ...inputs,  //spread문법 : inputs(name,nick) 불러와서 담기 ** 
      [name]: value,  // [ ] : input name에 해당하는 name,nick 모두 들어갈 수 있음
    });

  } 
  const onReset = () => {
    setInputs({
      name:'',
      nick:''
    });
    nameInput.current.focus();
  }
  
  return (
    <div>
      <input 
        name="name" 
        placeholder="이름"
        value={name}
        onChange={onChange} 
        ref={nameInput}
      />
      <input 
        name="nick" 
        placeholder="닉네임"
        value={nick}
        onChange={onChange} 
      />
      
      <button onClick={onReset}>초기화</button>
      <div>
          <b>값: </b> { name } _ { nick }
      </div>

    </div>
  )
}

export default InputSample;