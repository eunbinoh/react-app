import React , { useState }from "react";

function Count(){
  
  const numberState = useState(10); // 상태값 초기화

  const num = numberState[0]; //상태값 초기값 value 
  const setNum = numberState[1]; //상태값 세팅시키는 변화함수 설정

  const increase = () =>{
    //setNum(num + 10);
    //성능최적화 : 이전 상태값 가져와서 변화시키기 prev + (변수명) 
    setNum(prevNum => prevNum +10);
  }
  const decrease = () =>{
    setNum(num - 10);
    //성능최적화 : 이전 상태값 가져와서 변화시키기 prev + (변수명)
    //setNum(prevNum => prevNum -5);
  }
  return(
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>+10</button>
      <button onClick={decrease}>-10</button>
      {/* onClick={ 함수이름 } 
      주의: function() 은 렌더링을 뜻하므로 X, function_ 만 써야 이벤트시에만 호출 O */}
    </div>
  )
}



export default Count;