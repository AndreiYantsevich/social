import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './../Dialogs.module.css'

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = React.memo((props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
});

export default DialogItem;
