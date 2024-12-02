# Project-Bulning Frontend

## 프로젝트 구조

- 기본 구조: vite + typescript + react
- 스타일링: emotion css
- 테스트 프레임워크: vitest
- UI 테스트 도구: storybook
- CI: github actions
- CD: github actions + Docker (검토중)

### 폴더 구조

```bash
src
├─ assets
│  └─ icons
├─ constants
│  ├─ route paths 등 상수 저장 모듈
├─ components
│  ├─ 재사용 가능한(비즈니스 로직에 독립적인) 컴포넌트 모듈
├─ hooks
│  ├─ 재사용 가능한(비즈니스 로직에 독립적인) react hook 모듈
├─ features
│  ├─ 특정 기능을 수행하는 컴포넌트 모듈
├─ mock
│  ├─ mock data 모듈
├─ styles
│  ├─ styling 관련 모듈
├─ types
│  ├─ request, response, dto 등 필요한 타입 정의 모음
└─utils
   └─ 기타 재사용 가능한 유틸함수 모듈 모음
```

## 프로젝트 설치하고 실행하기

### node.js, yarn 설치

- 번들러인 vite의 사용을 위해 v20 이상의 node.js가 필요합니다. 
  - https://nodejs.org/en/download/package-manager
- 패키지 매니저의 경우 v4 이상의 yarn을 사용합니다(yarn berry).
  - https://html-jc.tistory.com/693
  - 위 페이지에서 zero install 설정 전까지 하시면 됩니다.

위의 요구사항을 모두 만족했다면, 
프로젝트 최상위에서 아래 명령어를 통해 프로젝트 의존성을 설치해주세요.
```bash
yarn install
```

### scripts
dev 서버 실행
```bash
yarn dev
```
storybook 실행
```bash
yarn storybook
```
프로젝트 테스트 및 빌드
```bash
yarn ci
```

## 협업 가이드라인

### 브랜치 전략
브랜치 전략은 [이 링크](https://www.notion.so/apptive/145e3d4189a580e4bc52c015307d0b96)를 참조해주세요.

### Commit Message Convention
커밋 메시지 컨벤션은 [AngularJS Commit Message Convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 따릅니다.

### Code Convention
코드 컨벤션은 airbnb javascript style guide를 따릅니다. eslint를 통해 코드 품질을 관리하므로 IDE에서 eslint 관련 설정이 필요할 수 있습니다. 
