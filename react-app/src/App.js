import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';

class App extends Component {
  // 생성자
  // props 를 생성자 인자로 전달 (필수) -> props 는 read-only (불변)
  // 
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id:2,
      subject:  { title: 'WEB', sub: 'world wide web' },
      welcome: {title: 'welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language.' },
        {id:2, title:'CSS', desc:'CSS is for design.' },
        {id:3, title:'Javascript', desc:'Javascript is for interactive.' },
      ]
    }
  }

  // state -> props -> component 로 변화된 값이 전달되도록 한다.
  getContent() {
    var _title, _desc, _article = null;
    var _idx = this.state.selected_content_id-1;
    if (this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
        _title = this.state.contents[_idx].title;
        _desc = this.state.contents[_idx].desc;
        _article = 
          <ReadContent 
            title={this.state.contents[_idx].title} 
            desc={this.state.contents[_idx].desc}></ReadContent>;
    }
    return _article;
  }

  // 렌더 함수
  // event 를 하위 컴포넌트에 내리는 방법
  // 이벤트를 정의 후, state 에 바인딩 -> 하위 컴포넌트는 state 에 바인딩 된 event 함수를 호출
  // state 에 값을 변화시키려면 무조건 setState 함수를 이용해야 함.
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}
        >          
        </Subject>
        <TOC
          onChangePage={function(id) {
            console.log(id);
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        >
        </TOC>
        {/* <Content 
          title={_title} 
          desc={_desc}
        >
        </Content> */}
        {this.getContent()}
      </div>
    );
  }
}

export default App;
