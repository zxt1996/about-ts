import { type } from 'os';
import React, { FunctionComponent } from 'react';

type CardProps = {
    title: string,
    paragraph?: string
} & typeof defaultProps

const defaultProps = {
    who: "Joni"
}

// 可以定义一个传递给 FunctionComponent 的类型，然后组件的props 包含已定义的类型和组件的children
export const Card: FunctionComponent<CardProps> = ({ title, paragraph }) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <div>
                {paragraph}
            </div>
        </div>
    )
}


// Typing defaultProps
Card.defaultProps = defaultProps;