import React from 'react';

type Props = {
    type?: "primary" | "secondary" | "error";
    size?: "m" | "l" | "s";
    disabled?: boolean;
    icon?: string;
    classNames?: string;
    fontSize?: string;
    onClick: () => void;
    title: string;
}

export function Button({type = "primary", size = "m", disabled = false, icon, classNames = '', fontSize , onClick, title = ''}: Props) {
    classNames += 'flex items-center justify-center w-full cursor-pointer rounded-2 text-primary';
    let color = type === 'primary' ? 'bg-primary-button' : type === "secondary" ? 'bg-secondary-button' : 'bg-primary-button-error';
    let opacity = disabled ? 'opacity-50' : '';
    let hover = type === 'primary' ? 'hover:bg-primary-button-hover' :  type === "secondary" ? 'secondary-button-hover' : '';
    let height = size === "l" ? 'h-[62px]' : 'h-[49px]';

    return (
        <section className={`${classNames} ${color} ${height} ${hover} ${opacity}`}>
            {title}
        </section>
    );
}
