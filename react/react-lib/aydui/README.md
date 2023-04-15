# aydui

> UI Component Library for React

[![NPM](https://img.shields.io/npm/v/aydui.svg)](https://www.npmjs.com/package/aydui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save aydui
```

## Usage

```tsx
import React from 'react'

import { Button } from 'aydui'
import 'aydui/dist/index.css'

function App (){
  return (
    <>
     <Button theme="primary">Button</Button>
     <Button theme="secondary">Button with onClick event</Button>
     <Button theme="accent" className="customBtn">Button with custom className</Button>
    </>
  ) 
}
```

## License

MIT © [keremaydemir123](https://github.com/keremaydemir123)
