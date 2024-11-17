import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React page.';
const message = "メッセージを表示します。";

function Msg(){
  return <p className='msg'>Hello!!</p>
}

// App関数(Reactのコンポーネント)の定義
function App() {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{message}</h2>
      <Msg />
      <Msg />
      <Msg />
      { Msg() }
    </div>
  );
}

// 他のファイルからApp関数をインポートできるようにするための記述
// デフォルトでインポートされるようにdefaultをつけている
export default App;
