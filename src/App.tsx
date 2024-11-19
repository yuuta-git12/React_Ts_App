import React from 'react';
import logo from './logo.svg';
import Ellipse from './Ellipse';
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
  {no:'1',name:'Taro', mail:'taro@yamada', age:45},
  {no:'2',name:'Hanako', mail:'hanako@flower', age:37},
  {no:'3',name:'Sachiko', mail:'sachiko@happy', age:29},
  {no:'4',name:'Jiro', mail:'jiro@change', age:18},
  {no:'5',name:'Kumi', mail:'kumi@class', age:56},
]

const link_data = {
  url:'http://google.com',
  title:'Google',
  caption:`*これは、Googleの検索サイドです。このサイトは、Googleが提供しています。`,
}

// var counter = 0;
// 1000msごとに処理を実行
// ここでコンポーネントの更新も行わないと表示内容は変わらない
// setInterval(() => {
//   counter += 1;
// }, 1000);

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

interface MsgPropsChildToParent{
  message: string;
  // callback属性　stringの引数を持ち戻り値のない関数voidを指定
  callback: (msg: string) => void;
}


//propsはオブジェクトを表す MsgPropsは値のタイプ
function Msg(props: MsgProps){
  
  const s = {
    fontSize: props.size + "pt",
    color: props.color,
  }

  return <p className='msg' style = {s}>{props.msg}</p>
}

//コンテンツを使った値の渡し方
function MsgContents(props:{children: string}){
  console.log(props.children);
  return(
    <div className="msg">
      {props.children}
    </div>
  );
}

//複数の子エレメントをコンテンツとして用意する場合
function MsgArrayContents(props:{children:Array<any>}){
  return (
    <ol className='msg'>
      {props.children.map((child:any, index) => {
        return <li key = {index} style={{margin:"10px 50px"}}>
          {child.props.children}
        </li>;
      })}
    </ol>
  );
}

function MsgChildToParent(props: MsgPropsChildToParent){
  // callback関数に引数を指定して実行
  //　子コンポーネントから親コンポーネント(App)に文字列を送る
  props.callback("コールバックが返されました。");
  return (
    <div className="msg">
      {props.message}
    </div>
  )
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
        {user_data.map(value=>
          <tr id={value.no}>
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
// ?をつけることでオプショナル属性(値がない場合も動作する)となる
function App(props: {counter?: number, onClick?: () => void}) {
  let callback = "none";
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
        <h5 className='msg' onClick={props.onClick}>
          {/* props.counterが空の場合は0を表示する */}
          count: {props.counter || 0}.
        </h5>
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
      

      {getData(0)}
      {getData(1)}
      {getData(2)}
      {getData(3)}
      {getData(4)}
      
      <Data data={{name:'Taro', mail:'taro@yamada', age:45}}/>
      <Data data={{name:'Hanako', mail:'hanako@flower', age:36}}/>
      <Data data={{name:'Sachiko', mail:'sachiko@happy', age:27}}/>

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

      {/* コンテンツを使った値の渡し方 */}
      {/* Msg2タグで囲まれたコンテンツをMsg2関数の引数として渡している */}
      <MsgContents>
        *これは、メッセージです。
        複数行のメッセージを表示します。
      </MsgContents>

      {/* 複数の子エレメントのコンテンツを値として渡す方法 */}
      <MsgArrayContents>
        <p>*これはメッセージです</p>
        <p>複数行のメッセージを表示します</p>
        <p>番号をつけて順に表示されます。</p>
      </MsgArrayContents>


      {/* 別ファイルのコンポーネントの利用 */}
      <Ellipse width={100} height={100} x={50} y={250} color="#f006"></Ellipse>
      <Ellipse width={125} height={125} x={100} y={300} color="#f006"></Ellipse>
      <Ellipse width={150} height={150} x={150} y={350} color="#f006"></Ellipse>
      <Ellipse width={175} height={175} x={200} y={400} color="#f006"></Ellipse>

      {/* <MsgChildToParent message={message}
        callback={(msg: string)=>{
          callback = msg;
          console.log(callback);
          alert("callback:" + callback);
        }} /> */}

      </div>
    </div>
  );
}

// 他のファイルからApp関数をインポートできるようにするための記述
// デフォルトでインポートされるようにdefaultをつけている
export default App;
