/*
  css import 추가
*/
import '../src/index.css';

/*
  아래 파라미터는 스토리북의 기능과 addons 의 동작 제어를 위해 쓰인다.
*/
export const parameters = {
  /*
    스토리 북 UI에 표출된 액션 패널을 클릭할 때, callbacks 를 생성할 수 있게 해줌
  */
  actions: { argTypesRegex: "^on[A-Z].*" },
  /*
    
  */
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
