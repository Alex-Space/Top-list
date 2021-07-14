import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearence: 'primary' | 'ghost';
    arrow?:  'right' | 'down' | 'none';
}