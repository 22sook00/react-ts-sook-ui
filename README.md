# react-ts-sook-ui

안녕하세요 🙇🏻‍♀️ <br/>
자주쓰는 공통컴포넌트 모음 Zip🏠 입니다. <br/>
해당 프로젝트는 React + TypeScript + Vite 기반으로 세팅되었으며
스타일은 Tailwindcss 로 작성되었습니다.

Hello 👋🏻 <br/>
This is a kinda of collection of frequently used common components. <br/>
The project was set up based on React + TypeScript + Vite and Tailwindcss.

> 🔥 still,, TEST .. ing .. ,, 🫥

## 🤔 How to use

Import Both thing that the component wolud you use and style.css

> ⚠️ Please be aware of that your styles will not work if you do not import the CSS.

```js
import { Button } from "react-ts-sook-ui";
import "react-ts-sook-ui/dist/style.css";
```

## 🎨 Basic Color system

<b>ThemeProps</b>
| Prop | Type | Default | Description |
| ----- | ----------------------------------------------------------------- | ------- | ----------- |
| theme | "primary" ,"success" , "progress" , "error" , "warning" , "light" | primary | 테마컬러 |

##### Text Color

<div style="width:fit-content; display:flex;  gap:10px;">
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#475569; color:white"> light </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#334155; color:white"> default </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#1e293b; color:white"> dark </span>
</div>

##### Theme Color

<div style="width:fit-content; display:flex;  gap:10px;">
<span style="text-align:center; border-radius:4px; padding:4px 8px; background-color:#6ed8cd"> primary </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#2b96ed"> success </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#7374f3"> progress </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#f43f5e"> error </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#fcd34d"> warning </span>
<span style="text-align:center;border-radius:4px; padding:4px 8px; background-color:#edf0f3"> light </span>
</div>

## 🎊 API

#### Button

| Prop        | Type                                               | Default | Description                         |
| ----------- | -------------------------------------------------- | ------- | ----------------------------------- |
| theme       | ThemeProps                                         | true    | 기본 컬러테마설정                   |
| onClick     | (e?: React.MouseEvent<HTMLButtonElement>) => void; |         | 클릭이벤트                          |
| text        | string                                             |         | 버튼 텍스트                         |
| size        | "sm" , "md" , "lg"                                 | md      | 버튼 사이즈                         |
| disabled    | boolean                                            | false   | 버튼 비활성화                       |
| type        | "button" ,"submit" , "reset";                      | button  | 버튼 타입                           |
| isRing      | boolean                                            | true    | 버튼 클릭 시 나타나는 아웃라인 효과 |
| isOutline   | boolean                                            |         | 버튼 아웃라인 적용                  |
| customStyle | string                                             |         | 사용자 지정 스타일                  |

#### Badge

| Prop        | Type               | Default | Description                                                          |
| ----------- | ------------------ | ------- | -------------------------------------------------------------------- |
| text        | string             |         | 뱃지 텍스트                                                          |
| size        | "sm" , "md" , "lg" | md      | 뱃지 사이즈                                                          |
| theme       | ThemeProps         | primary | 기본 컬러테마설정                                                    |
| customStyle | string             |         | 사용자 지정 스타일. 텍스트 컬러의 0.2 만큼의 opacity 가 배경이 된다. |

#### Highlight

| Prop        | Type                            | Default | Description        |
| ----------- | ------------------------------- | ------- | ------------------ |
| text        | string                          |         | 밑줄 텍스트        |
| size        | "xs" , "sm" , "md" , "lg" ,"xl" | md      | 텍스트 사이즈      |
| theme       | ThemeProps                      | primary | 기본 컬러테마설정  |
| customColor | string                          |         | 사용자 지정 스타일 |

#### Dialog

| Prop               | Type               | Default | Description                         |
| ------------------ | ------------------ | ------- | ----------------------------------- |
| title              | string             |         | 헤더 타이틀                         |
| size               | "sm" , "md" , "lg" | md      | 다이얼로그 사이즈                   |
| children           | React.ReactNode    |         | 다이얼로그 내부 컨텐츠              |
| handleClosePopup   | () => void         |         | 다이얼로그 닫기 클릭                |
| handleConfirmPopup | () => void         |         | 다이얼로그 확인 클릭                |
| cancelText         | string             | 닫기    | 다이얼로그 닫기 텍스트              |
| confirmText        | string             | 확인    | 다이얼로그 확인 텍스트              |
| type               | "button" ,"submit" | button  | 다이얼로그 확인버튼 타입            |
| disabled           | boolean            | false   | 다이얼로그 확인 버튼 비활성화       |
| isXIcon            | boolean            | true    | 다이얼로그 헤더의 X 아이콘 표시여부 |
| isFixedButton      | boolean            | true    | 다이얼로그 버튼 표시여부            |

#### Colorpicker

| Prop         | Type                                  | Default | Description                         |
| ------------ | ------------------------------------- | ------- | ----------------------------------- |
| theme        | ThemeProps                            | primary | 아이드롭퍼 버튼컬러 타이틀          |
| size         | "sm" , "md" , "lg"                    | md      | 컬러피커 사이즈                     |
| withInput    | boolean                               | true    | 컬러피커 input 여부                 |
| disabled     | boolean                               | false   | 컬러피커 input 액션 비활성화        |
| isEyedropper | boolean                               | true    | Eyedropper 기능을 추가/제외 여부    |
| customStyle  | string , number                       | true    | 사용자 지정 스타일                  |
| getColor     | React.Dispatch<SetStateAction<Color>> | true    | 컬러피커에서 선택한 컬러상태값 추출 |

### 🔗 npm Link

https://www.npmjs.com/package/react-ts-sook-ui?activeTab=readme
