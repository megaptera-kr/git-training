# git-training
Git 연습을 위한 저장소

### MT-setting-week1

### TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

맥북(Mac)기준

작성 중 문제가 생길시 sudo를 활용하자

### Node.js 설치하기

폴더를 하나 만들고 VScode로 폴더열기

```bash
mkdir my-app
cd my-app
code .
```

npm 패키지 생성

```bash
npm init -y
```

'.gitignore' 파일 생성 및 작성 // 최소한  node_modules를 push하지 않도록하자!

```bash
touch .gitignore
```

.gitignore파일에 /node_modules/, /dist/, /.parcel-cache/ 작성하기

### Typescript 설치하기

```bash
npm install -D typescript
npx tsc --init
```

'tsconfig.json' 파일의 jsx속성을 변경한다 ("jsx": "react-jsx")

### ESlint 설정

```bash
npm install -D eslint
npx eslint --init
```

'npx eslint --init'의 선택사항을 적절히 선택해주고, 개발환경을 구축한다. '.eslintrc.js' 파일에 'jest:true'를 잡아준다!
'.eslintignore'파일을 작성한다.

```bash
touch .eslintignore
```

'.eslintignore' 파일에 /node_modules/, /dist/, /.parcel-cache/ 작성하기

### REACT 설치

```bash
npm install react react-dom
npm install -D @types/react @types/react-dom
```

### 테스팅도구 설치 (jest)

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

'jest.config.js' 파일생성후 내용 작성

```bash
touch jest.config.js
```

https://github.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js 의 내용을 파일에 작성

### Parcel설치

```bash
npm install -D parcel
```

'package.json'의 scripts, source 부분을 수정한다.

https://github.com/ahastudio/CodingLife/blob/main/20220726/react/package.json 참고!

### react 기본 설정

```bash
touch index.html
touch src/main.tsx
```

기본폴더에 'index.html'파일과 src폴더를 만들어 'main.tsx'파일을 만든다.

```bash
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

```bash
//main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
 return(
  <div>
   hello world!
  </div>
 )
}

function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((<App />));
}

main();
```

'index.html'에 src폴더의 'main.tsx'파일을 스크립트로 연결한다.

이렇게하고 npm실행을 하면?

```bash
npm start
```

@parcel/core: Failed to resolve 'process' from './node_modules/react-error-overlay/lib/index.js'
이런식의 오류가 뜬다.

해결법! 아래의 코드를 추가하자!

```bash
//package.json


"alias": {
    "process": false
  },
```

package.json의 script아래에 아래의 코드를 추가하면 해결된다.