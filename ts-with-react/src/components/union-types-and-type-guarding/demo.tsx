import React from 'react';

class AboutType extends React.Component<
    {},
    {
        count: number | null;
    }
> {
    state = {
        count: null
    };

    increment = (amt: number) => {
        this.setState(state => ({
            count: (state.count || 0) + amt
        }))
    }

    render() {
        return (
            <div onClick={() => this.increment(1)}>
                {this.state.count}
            </div>
        )
    }
}