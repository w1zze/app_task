
import s from './Mode.module.scss';
import { Theme } from '../../../Theme/Theme';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const Mode = () => {


    const mode = useRef(null);
    useEffect(() => {
        const elemOne = mode.current;
        gsap.fromTo(elemOne, { y: 200 }, { y: 0, delay: .2 })
    });

    const { theme, setTheme } = Theme();

    const lightTheme = () => {
        setTheme('light');
    }
    const darkTheme = () => {
        setTheme('dark');
    }

    return (
        <>
            <div className={s.mode} ref={mode}>
                <button onClick={lightTheme} className={s.light}>L</button>
                <button onClick={darkTheme} className={s.dark}>D</button>
            </div>
        </>
    );
}

export { Mode }