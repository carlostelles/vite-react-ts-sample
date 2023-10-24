import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    appearance: 'button' | 'a' | typeof Link;
    to?: string;
};

export default function Button({ appearance: Component, to, children, ...props }: ButtonProps): React.ReactElement {
    return <Component to={to || ""} {...props}>
        {children}
    </Component>;
}


