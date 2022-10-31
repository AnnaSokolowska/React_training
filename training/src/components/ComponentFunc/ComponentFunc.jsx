import React from 'react';
import style from './style.module.css';


 export const ComponentFunc = React.memo((props) =>  {
        console.log('------------');
        console.log('ComponentFunc');
        return <p className={style.text}>{props.string}</p>
});

export default ComponentFunc;