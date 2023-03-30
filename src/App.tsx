import { useState } from 'react';
import type { FC } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

type AppProp = {
  count?: number
}

const Head = styled.h1.attrs({
  type: 'title'
})`
  color: ${(props: AppProp) => props.count % 3 ? 'pink' : 'blue'};

  :hover {
    color: red;
  }
`

const App: FC = () => {

  const [count, setCount] = useState<number>(0);

  return <div className="App">
    <Head count={count}>hello react!</Head>
    <Button type="primary"
      onClick={() => {setCount(count + 1)}}
    >Button</Button>
  </div>
}

export default App;