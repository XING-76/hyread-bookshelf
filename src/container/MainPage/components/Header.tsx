import { useState, useEffect } from 'react';
import Grid from '@modules/Grid';
import IconClose from '@modules/Icon/IconClose';
import './css/header.scss';

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return (
        <div className="header__field">
            <Grid row className={`${width < breakpoint ? 'middle' : ''}`}>
                <div className="header__title">我的書櫃</div>
                {width < breakpoint ? (
                    <div className="header__btn">
                        <IconClose />
                    </div>
                ) : null}
            </Grid>
        </div>
    );
}

export default Header;
