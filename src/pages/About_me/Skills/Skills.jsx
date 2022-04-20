

import s from './Skills.module.scss';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    const title = useRef(null),
        listOne = useRef(null),
        listTwo = useRef(null),
        listThree = useRef(null),
        listFour = useRef(null),
        listFive = useRef(null),
        text = useRef(null),
        square = useRef(null);

    useEffect(() => {
        const elemOne = title.current,
            elemTwo = listOne.current,
            elemThree = listTwo.current,
            elemFour = listThree.current,
            elemFive = listFour.current,
            elemSix = listFive.current,
            elemSeven = text.current,
            elemEight = square.current;

        gsap.fromTo(elemOne, { opacity: 0 }, { opacity: 1, delay: .3, scrollTrigger: { trigger: elemOne } });
        gsap.fromTo(elemTwo, { opacity: 0 }, { opacity: 1, delay: .6, scrollTrigger: { trigger: elemTwo } });
        gsap.fromTo(elemThree, { opacity: 0 }, { opacity: 1, delay: .7, scrollTrigger: { trigger: elemThree } });
        gsap.fromTo(elemFour, { opacity: 0 }, { opacity: 1, delay: .8, scrollTrigger: { trigger: elemFour } });
        gsap.fromTo(elemFive, { opacity: 0 }, { opacity: 1, delay: .9, scrollTrigger: { trigger: elemFive } });
        gsap.fromTo(elemSix, { opacity: 0 }, { opacity: 1, delay: 1, scrollTrigger: { trigger: elemSix } });
        gsap.fromTo(elemSeven, { opacity: 0 }, { opacity: 1, delay: 1.4, scrollTrigger: { trigger: elemSeven } });
        gsap.fromTo(elemEight, { opacity: 0 }, { opacity: 1, delay: 3, scrollTrigger: { trigger: elemEight } });
    }, []);

    return (
        <>
            <div className={s.skills}>
                <div className={s.info}>
                    <h3 className={s.title} ref={title}>Skills:</h3>
                    <ul>
                        <li className={s.list} ref={listOne}><span className={s.span}>HTML</span>,</li>
                        <li className={s.list} ref={listTwo}><span className={s.span}>CSS</span>,</li>
                        <li className={s.list} ref={listThree}><span className={s.span}>GIT</span>,</li>
                        <li className={s.list} ref={listFour}><span className={s.span}>JS</span> - learning,</li>
                        <li className={s.list} ref={listFive}><span className={s.span}>REACT</span> - learning,</li>
                    </ul>
                    <p className={s.descr} ref={text}>About experience: Tailwind/Bootstrap, Figma/Photoshop, some library js...</p>
                </div>

                <div className={s.square} ref={square}></div>
            </div>
        </>
    )
}

export { Skills };