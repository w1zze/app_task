

import s from './NotFound.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const NotFound = () => {

    const title = useRef(null);
    useEffect(() => {
        const elem = title.current;

        gsap.fromTo(elem, { opacity: 0 }, { opacity: 1, delay: 1 })
    });

    return (
        <>
            <div className={s.wrapper}>
                <h1 className={s.title} ref={title}>NotFound 404 :/</h1>
            </div>
        </>
    )
}

export { NotFound };