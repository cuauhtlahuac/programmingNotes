```js
import React, { Component } from 'react';

type Props = {}
type State = {}
const LogicHoc = (WrappedComponent: any) => {
    return (
        class HOC extends Component<Props, State> {
            constructor(props: any) {
                super(props)
            }
            render() {
                return (
                    <WrappedComponent
                      {this.props}
                    />
                )
            }
        }
    )
}

export default LogicHoc;
```

In the import file you only save the Hoc in a new  variable:

```
import LogicHoc from "./LogicHoc";

const LogicComponent = LogicHoc(Component);


