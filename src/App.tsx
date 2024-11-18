import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React page.';
const message = "メッセージを表示します。";

function Msg(msg:string, size:number, color:string){
  
  const s = {
    fontSize: size + "pt",
    color: color,
  }

  return <p className='msg' style = {s}>{msg}</p>
}

// App関数(Reactのコンポーネント)の定義
function App() {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{message}</h2>
      
      { Msg("最初のメッセージ",36,"red") }
      { Msg("次のメッセージ",24,"lightgray") }
      { Msg("最後のメッセージ",12,"black") }
    </div>
  );
}

// 他のファイルからApp関数をインポートできるようにするための記述
// デフォルトでインポートされるようにdefaultをつけている
export default App;
