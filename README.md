# react-test
react 연습을 위해 이것저것 해본 것들을 모두 모아놓은 저장소

# **react-app** : 생활코딩 react-app 제작하기 테스트

1. class 스타일의 컴포넌트
2. bind(this) 를 이용한 컴포넌트 바인딩 (이벤트 함수에게)

    ```
        onSubmit={
            function(e) { 
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)
        }
    ```
3. state 는 최상위 App 에서 두고, props 를 통해 state 를 하위 컴포넌트로 전달
4. class 스타일 컴포넌트의 라이프사이클은 별다르게 활용하지 않음 (오로지 render() 만 사용)

# **react-router-dom-test** : 생활코딩 react-router-dom 사용하기 테스트

1. BrowserRouter 로 App 을 감싼 후, Switch 를 통해 선택된 Route 경로로 이동하도록 구성
2. NavLink 는 link 주소 선택을 받는다.
3. Route 는 설정된 path 를 통해 렌더링할 컴포넌트를 결정한다.

# **react-class-vs-function-test** : 생활코딩 클래스 스타일 과 함수형 스타일 컴포넌트 비교 테스트

1. 함수형 스타일 컴포넌트에서 hook 을 이용하여 life-cycle 과 state 를 관리하는 방식을 연습
2. 클래스 스타일 컴포넌트에서 life-cycle 과 props 를 통한 state 의 전달하는 방식을 연습

# **react-redux-test** : 생활코딩 react-redux 사용하기 테스트

1. redux 를 통해 store 구성 
2. Provider 를 통해 store 를 제공, react-redux 의 connect 함수를 통해 mapStateToProps, mapDispatchToProps 의 바인딩 하는 방식의 구현 (ReactReduxWrapper 를 생성함)
3. store 에 direct 로 접근하여 dispatch, subscribe 하는 방식의 구현 (Wrapper 를 생성함)
4. 두가지 방식의 구현을 통해 Provider 의 사용과, store 의 direct 접근을 모두 확인해봄
5. reducer 를 구성하는 것은 따로 하지 않았음

# **calucator-test**, **counter-app-test** : react 공식 사이트의 예제 변환하기 테스트

1. react 공식 사이트의 예제가 클래스 스타일로 만들어져 있음
2. 이를 함수형 스타일로 변환하고, hook 을 이용하도록 변환하는 것을 연습

# **react-mobx-functional-component-test** : Mobx + react 사용하기 테스트

1. mobx 가 6.x.x 부터 데코레이터 (@observable 등) 사용이 deprecated 됨
2. 이에 함수형 스타일로 컴포넌트를 구성하여 mobx 를 사용하는 것을 연습
3. mobx 의 store 는 class 로 구성 (공식 문서가... 이렇게 하라고 함...)
4. observable 과 action 만 사용해봄

# **react-apexcharts-test** : apexcharts 라이브러리를 mobx 와 함께 사용하기 테스트

1. material-ui 에서 템플릿으로 제공한 것을 이용
2. apexcharts 라이브러리의 data 갱신을 mobx store 를 이용하도록 연습

# **react-data-grid-test** : react-data-grid 라이브러리를 mobx 와 함께 사용하기 테스트

1. excel like data-grid 라이브러리인 https://github.com/adazzle/react-data-grid 를 이용
2. mobx 로 store 관리하도록 구성
3. store 가 data-grid 에 바인딩되어 동적 데이터 렌더링이 되는지 테스트

# **react-storybook-taskbox** : storybook 과 react 를 함께 사용하기 테스트 (storybook 공식 tutorial)

1. react 컴포넌트 만들기
2. mobx 와 react 컴포넌트의 바인딩
3. [XXX].stories.jsx 구성을 통한 컴포넌트 템플릿과 arguments 의 바인딩을 통해 다양한 컴포넌트 생성 테스트
4. [XXX].test.js 구성을 통한 npm test 케이스의 생성
5. chromatic 연동을 통한 UI 테스트 퍼블리싱 환경 구성