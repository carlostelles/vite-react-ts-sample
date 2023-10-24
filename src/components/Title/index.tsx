import React, { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Title({ as: Component, children, ...props }: TitleProps): React.ReactElement {
    return <Component {...props}>{children}</Component>;
}


