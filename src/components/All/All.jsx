import React from 'react';
import { Input } from '../Input/Input';

export function All(props) {

    return (
        <div>
            <Input onSubmit={props.onSubmit} />
            <ul>
                {props.list.map(el => {
                    return (
                        <article key={el.key} className='inline'>
                            <input onChange={() => props.changeStatus(el)} type='checkbox' checked={el.completed ? true : false} />
                            <li
                              completed={el.completed}
                              className={el.completed ? 'completed' : ''}
                            >
                                {el.text}
                            </li>
                        </article>
                    )
                })}
            </ul>
        </div>
    )
}
