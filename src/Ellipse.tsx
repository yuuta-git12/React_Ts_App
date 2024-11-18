import React from 'react';

function Ellipse(props:{width:number, height:number,x:number,y:number,color:string}){
    // スタイルシートのオブジェクト
    const elipseStyle:React.CSSProperties = {
        width:`${props.width}px`,
        height:`${props.height}px`,
        backgroundColor: props.color,
        position: 'absolute',
        left: `${props.x}px`,
        top: `${props.y}px`,
        borderRadius: '50%'
    };
    return <div style={elipseStyle}></div>;
}

export default Ellipse;