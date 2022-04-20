

import s from './Task.module.scss';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import Draggable from 'react-draggable';
const Task = () => {

    const [item, setItem] = useState('');
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: v4(),
                item,
                defaultPos: {
                    x: 500,
                    y: 250
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter something...')
            setItem('')
        }
    }

    const deleteNode = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    const updatePos = (data, index) => {
        let newArray = [...items]
        newArray[index].defaultPos = { x: data.x, y: data.y }
        setItems(newArray)
    }

    const keyPress = (e) => {
        const code = e.keyCode || e.which
        if (code === 13) {
            newItem()
        }
    }

    return (
        <div className={s.task}>
            <div className={s.inner}>
                <input className={s.input}
                    type='text'
                    value={item}
                    placeholder='Enter something...'
                    onChange={(e) => setItem(e.target.value)}
                    onKeyPress={(e) => keyPress(e)} />
                <button className={s.btn} onClick={newItem}>Enter</button>
            </div>
            {
                items.map((item, index) => {
                    return (
                        <Draggable
                            key={index}
                            defaultPosition={item.defaultPos}
                            onStop={(data) => {
                                updatePos(data, index)
                            }}>
                            <div className={s.todo__item}>
                                {item.item}
                                <button className={s.btn} onClick={() => deleteNode(item.id)}>X</button>
                            </div>
                        </Draggable>
                    )
                })
            }
        </div>
    )
}

export { Task };