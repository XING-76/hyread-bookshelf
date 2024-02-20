import React from 'react';
import './style.scss';

interface Props {
    className?: string;
    onClick?: Function;
    children?: string;
    row?: boolean;
    col?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

const Grid: React.FC<any> = (props: Props) => {
    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLDivElement;
        if (element.getAttribute('data-stop-prop')) return;
        if (onClick) onClick(event);
    };

    const { className = '', children, onClick, row = false, col = false, xs, sm, md, lg, xl, xxl } = props;
    const gridRow = row ? 'grid__row' : '';
    const gridCol = col ? 'grid__col' : '';

    const colXs = xs ? `grid__colxs_${xs}` : '';
    const colSm = xs ? `grid__colsm_${sm}` : '';
    const colMd = xs ? `grid__colmd_${md}` : '';
    const colLg = xs ? `grid__collg_${lg}` : '';
    const colXl = xs ? `grid__colxl_${xl}` : '';
    const colXxl = xs ? `grid__colxxl_${xxl}` : '';

    return (
        <div
            onClick={handleOnClick}
            className={`${gridRow} ${gridCol} ${colXs} ${colSm} ${colMd} ${colLg} ${colXl} ${colXxl} $ ${className}`}>
            {children}
        </div>
    );
};

export default Grid;
