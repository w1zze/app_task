
import s from './Projects.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const title = useRef(null),
        itemOne = useRef(null),
        itemTwo = useRef(null),
        square = useRef(null);

    useEffect(() => {
        const elemOne = title.current,
            elemTwo = itemOne.current,
            elemThree = itemTwo.current,
            elemFour = square.current;

        gsap.fromTo(elemOne, { opacity: 0 }, { opacity: 1, delay: 1, scrollTrigger: { trigger: elemOne } });
        gsap.fromTo(elemTwo, { opacity: .0 }, { opacity: 1, delay: 1.2, scrollTrigger: { trigger: elemTwo } });
        gsap.fromTo(elemThree, { opacity: .0 }, { opacity: 1, delay: 1.2, scrollTrigger: { trigger: elemThree } });
        gsap.fromTo(elemFour, { opacity: 0 }, { opacity: 1, delay: .9, scrollTrigger: { trigger: elemFour } });
    });

    const linkOne = 'https://w1zze.github.io/projects.io/',
        linkTwo = 'https://w1zze.github.io/restaurant.io/';

    return (
        <>
            <div className={s.projects}>
                <div className={s.info}>
                    <h3 className={s.title} ref={title}> <span className={s.span}>My</span> projects:</h3>
                    <div className={s.inner}>
                        <a className={s.block} ref={itemOne} href={linkOne} target='_blank'>Projects Js</a>
                        <a className={s.block} ref={itemTwo} href={linkTwo} target='_blank'>Pizza</a>
                    </div>
                </div>
                <div className={s.square} ref={square}></div>
            </div>
        </>
    )
}

export { Projects };