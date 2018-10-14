import * as React from 'react';

export interface StateProps {
  count: number
}

export interface DispatchProps {
  increment: () => void,
  decrement: () => void,
}

type ComponentProps = StateProps & DispatchProps;

export class Counter extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.increment}>+</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}