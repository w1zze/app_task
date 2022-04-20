

import { Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    return (
        <>
            <Link to={to}
                style={{
                    color: 'var(--color-dark)',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontWeight: '600',
                    marginLeft: '4rem'
                }}
                {...props}>
                {children}
            </Link>
        </>
    );
}

export { CustomLink };