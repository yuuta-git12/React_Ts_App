import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var counter = 0;

// 1000msごとにroo.renderが実行され画面が更新される
// rootから全てを書き換えるので非効率な方法ではある。
setInterval(() => {
  counter += 1;
  root.render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>
  )
}, 1000);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Reactのコンポーネント　この内部をStrict(厳格)モードで扱うためのタグ
  //厳格なエラーチェックが有効化されコードの安全性が向上する
  <React.StrictMode>
    {/* App.tsxで作成したコンポーネントを呼び出している */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
