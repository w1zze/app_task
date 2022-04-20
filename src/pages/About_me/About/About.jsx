

import s from './About.module.scss';
import video from '../../../assets/video/videoBg.mp4';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
const About = () => {

    const title = useRef(null),
        square = useRef(null),
        text = useRef(null),
        btn = useRef(null),
        videoPrew = useRef(null),
        squareBig = useRef(null),
        link = useRef(null);
    useEffect(() => {
        const elemOne = title.current,
            elemTwo = square.current,
            elemThree = text.current,
            elemFour = btn.current,
            elemFive = videoPrew.current,
            elemSix = squareBig.current,
            elemSeven = link.current;
        gsap.fromTo(elemOne, { opacity: 0, }, { opacity: 1, delay: 1.1 });
        gsap.fromTo(elemTwo, { opacity: 0, }, { opacity: 1, delay: 1 });
        gsap.fromTo(elemThree, { opacity: 0, }, { opacity: 1, delay: 1.2 });
        gsap.fromTo(elemFour, { opacity: 0, }, { opacity: 1, delay: 1.3 });
        gsap.fromTo(elemFive, { opacity: 0, }, { opacity: 1, delay: 1.6 });
        gsap.fromTo(elemSix, { opacity: 0, }, { opacity: 1, delay: 2.2 });
        gsap.fromTo(elemSeven, { opacity: 0, }, { opacity: 1, delay: 1.5 });
    });


    return (
        <>
            <div className={s.about}>
                <div className={s.info}>
                    <h3 className={s.title} ref={title}><span className={s.span}>About</span> Me</h3>
                    <p className={s.subtitle} ref={text}>My name is Anton, I have been living in Astana since I was 14 years old. I learn quickly, cheerful, ambitious.</p>
                    <div className={s.inner} ref={link}>
                        <a className={s.link} href='https://www.linkedin.com/in/anton-arkhangelsky-4ba040227/' target='_blank'>
                            <FaLinkedin />
                        </a>
                        <a className={s.link} href='https://github.com/w1zze' target='_blank'>
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
                <video className={s.video} src={video} ref={videoPrew} loop autoPlay muted></video>
                <div className={s.square} ref={squareBig}></div>
                <div className={s.square_second} ref={square}></div>

            </div>
        </>
    )
}

export { About };