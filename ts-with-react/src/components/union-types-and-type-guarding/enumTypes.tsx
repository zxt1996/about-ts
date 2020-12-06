import React from 'react';

export enum ButtonSize {
    default = "default",
    small = "small",
    large = "large"
}

interface Props {
    size: ButtonSize
}

export const PrimaryBUtton = (
    props: Props & React.HTMLProps<HTMLButtonElement>
) => <button size={ButtonSize.default} {...props}/>