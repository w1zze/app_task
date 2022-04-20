
import { Outlet } from 'react-router-dom';
import s from './Layout.module.scss';
import gsap from 'gsap';
import { useRef, useEffect } from 'react'
import { CustomLink } from './CustomLink';
import { Mode } from './Mode/Mode';

const Layout = () => {

    const header = useRef(null),
        footer = useRef(null);
    useEffect(() => {
        const elemOne = header.current,
            elemTwo = footer.current;
        gsap.fromTo(elemOne, { y: ' -200%' }, { y: 0, delay: .5, duration: .2 });
        gsap.fromTo(elemTwo, { y: '200%' }, { y: 0, delay: .5, duration: .2 });
    });
    return (
        <>
            <div className={s.wrapper}>
                <header className={s.header} ref={header}>
                    <div className={s.container}>
                        <div className={s.header__inner}>
                            <h1 className={s.logo}>Arkhangelsky</h1>
                            <nav className={s.nav}>
                                <ul className={s.menu}>
                                    <CustomLink to='/'>About me</CustomLink>
                                    <CustomLink to='/task'>Task</CustomLink>
                                </ul>

                            </nav>
                            <div className={s.hamburger}>
                                <div className={s.span}></div>
                                <div className={s.span}></div>
                                <div className={s.span}></div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className={`${s.container} ${s.main}`}>

                    <Outlet />
                    <Mode />

                </main>

                <footer className={s.footer} ref={footer}>
                    <div className={s.container}>
                        <div className={s.footer__inner}>
                            <h3 className={s.title}>
                                Created Arkhangelsky Anton 2022</h3>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export { Layout };