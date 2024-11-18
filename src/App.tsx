import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React page.';
const message = "メッセージを表示します。";
const content = `✳️これが、trueの時に表示されるメッセージです。ちゃんと表示されていますか？`;

const flg = true;

//MsgPropsインターフェースの定義(オブジェクトの内容を定義)
interface MsgProps {
  msg: string,
  size: number,
  color: string
}

//propsはオブジェクトを表す MsgPropsは値のタイプ
function Msg(props: MsgProps){
  
  const s = {
    fontSize: props.size + "pt",
    color: props.color,
  }

  return <p className='msg' style = {s}>{props.msg}</p>
}

// App関数(Reactのコンポーネント)の定義
function App() {
  return (
    <div className="container">
      <style>{`
      
        h1{
          color: white;
          background-color: blue;
          padding: 5px;
        }
        h2{
          color: white;
          background-color: red;
          padding: 5px 10px;
        }
        p.msg{
          background-color: lightyellow;
        } 

      `}</style>
      <h1>{title}</h1>
      <h2>{message}</h2>
      <div>
      <Msg msg={"最初のメッセージ"} size={20} color={"red"} />
      <Msg msg={"次のメッセージです"} size={20} color={"green"} />
      <Msg msg={"最後のメッセージでした"} size={20} color={"blue"} />
      {flg &&
        <div className='msg'>
          <p>{content}</p>
        </div>
      }
      
      </div>
    </div>
  );
}

// 他のファイルからApp関数をインポートできるようにするための記述
// デフォルトでインポートされるようにdefaultをつけている
export default App;
