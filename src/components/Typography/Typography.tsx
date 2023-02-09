import clsx from 'clsx';
import React, { ReactNode } from 'react';
import typographyStyles from './Typography.module.css';

export type TagTypes = 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type TypographyProps = {
    tag?: TagTypes;
    styles?: object;
    className?: string;
    children: ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
    tag = 'div',
    styles = {},
    className,
    children,
}) => {
    const TypographyTag = tag;

    return (
        <TypographyTag className={clsx(className, typographyStyles.typography, typographyStyles[tag])} style={styles}>
            {children}
        </TypographyTag>
    );
};