import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

export type ButtonTheme = 'accent' | 'white' | 'black';
export type ButtonSize = 's' | 'l';

export type ButtonProps = {
    size?: ButtonSize;
    theme?: ButtonTheme;
    rounded?: boolean;
    onClick?: () => void;
    disabled?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >;

/**
 * @param {ButtonSize} [props.size]
 * * sm - 309px x 57px
 * * lg - 1297px x 120px
 * @param {ButtonTheme} [props.theme]
 * * accent
 * * white
 * * black
 * @param {boolean} [props.rounded] - set rounded borders
 * @returns
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    size = 'm',
    theme= 'accent',
    onClick = () => {},
    children,
    rounded = true,
    className,
    disabled= false,
    ...props
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                styles.button,
                styles[theme],
                styles[size],
                className,
                {
                    [styles.rounded]: rounded,
                },
            )}
            {...props}
        >
            {children}
        </button>
    );
};
