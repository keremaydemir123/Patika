import * as React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    theme?: 'primary' | 'secondary' | 'accent';
}
export declare const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export {};
