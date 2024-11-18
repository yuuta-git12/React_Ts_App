import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React page.';
const message = "メッセージを表示します。";
const content_true = `✳️これが、trueの時に表示されるメッセージです。ちゃんと表示されていますか？`;
const content_false = `✳️これは、falseの時の表示です。。。。`;

const flg = true;

const data = [
  <li className='msg'>One</li>,
  <li className='msg'>Two</li>,
  <li className='msg'>Three</li>,
];

const user_data = [
  {name:'Taro', mail:'taro@yamada', age:45},
  {name:'Hanako', mail:'hanako@flower', age:37},
  {name:'Sachiko', mail:'sachiko@happy', age:29},
  {name:'Jiro', mail:'jiro@change', age:18},
  {name:'Kumi', mail:'kumi@class', age:56},
]

const link_data = {
  url:'http://google.com',
  title:'Google',
  caption:`*これは、Googleの検索サイドです。このサイトは、Googleが提供しています。`,
}

//MsgPropsインターフェースの定義(オブジェクトの内容を定義)
interface MsgProps {
  msg: string,
  size: number,
  color: string
}

interface DataInterface {
  data:{
    name:string,
    mail:string,
    age:number
  }
}


//propsはオブジェクトを表す MsgPropsは値のタイプ
function Msg(props: MsgProps){
  
  const s = {
    fontSize: props.size + "pt",
    color: props.color,
  }

  return <p className='msg' style = {s}>{props.msg}</p>
}

//tableで表示したリスト
function Table(){
  return(
    <table className="data-table">
      <thead>
        <tr>
          <th>name</th>
          <th>mail</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {user_data.map(value =>
          <tr>
            <td>{value.name}</td>
            <td>{value.mail}</td>
            <td>{value.age}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

function getData(n:number){
  const flg = n % 2 == 0;
  return(
    <p className='msg'
      style={flg ? {backgroundColor:'gray',color:'white'}:{}}>
      [{n+1}]{user_data[n].name}({user_data[n].age}) &lt;{user_data[n].mail}&gt;
    </p>
  )
}

function Data(props:DataInterface){
  return(
    <p className="msg">
      {props.data.name}({props.data.age}) &lt;{props.data.mail}&gt;
    </p>
  )
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
      {flg ?
        <div className='msg'>
          <p>{content_true}</p>
        </div>
        :
        <div className='msg'>
          <p>{content_false}</p>
        </div>
      }
        <ul>
          {data}
        </ul>
        <ol>
          {data}
        </ol>
      
      <Table/>

      {getData(0)}
      {getData(1)}
      {getData(2)}
      {getData(3)}
      {getData(4)}
      
      <Data data={{name:'Taro', mail:'taro@yamada', age:45}}/>
      <Data data={{name:'Hanako', mail:'hanako@flower', age:36}}/>
      <Data data={{name:'Sachiko', mail:'sachiko@happy', age:27}}/>
      <Data data={user_data[4]}/>

      {/* アロー関数を使った画面表示 */}
      {
        (()=>
          <div className='card'>
            <div className='header'>
              {link_data.title}
            </div>
            <div className='body'>
              {link_data.caption}
            </div>
            <div className='footer'>
              <a href={link_data.url}>*{link_data.title}に移動</a>
            </div>
          </div>
        )()
      }


      </div>
    </div>
  );
}

// 他のファイルからApp関数をインポートできるようにするための記述
// デフォルトでインポートされるようにdefaultをつけている
export default App;
