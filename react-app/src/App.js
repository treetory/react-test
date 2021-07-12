import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';

class App extends Component {
  // 생성자
  // props 를 생성자 인자로 전달 (필수) -> props 는 read-only (불변)
  // 
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome', // welcome | read | create | update | delete
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

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  // state -> props -> component 로 변화된 값이 전달되도록 한다.
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = 
        <ReadContent 
          title={_content.title} 
          desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // push 는 원본을 바꾼다. -> push 를 쓰면 shouldComponentUpdate 에서 상태변화를 캐치할 수 없다.
        //this.state.contents.push({id: this.max_content_id, title: _title, desc: _desc});
        // concat 은 원본은 그대로, 원본을 복제하여 추가하는 것을 붙인 새로운 배열을 반환한다. 무조건 concat 을 사용해 버릇해라.
        // this.setState(
        //   {contents: this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc})}
        // );
        // Array.from, Object.assign 을 이용하면 불변성을 유지하면서 할 수 있다.
        var newContents = Array.from(this.state.contents);
        newContents.push({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: newContents,
          // contents: this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc}),
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>;
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while( i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents: _contents,
          mode: 'read'
        });
        
      }.bind(this)}></UpdateContent>;
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
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        >
        </TOC>
        <Control onChangeMode={function(_mode) {
          if (_mode === 'delete') {
            if (window.confirm('really?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              });
              alert('deleted');
            }
          } else {
            this.setState({mode: _mode});
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
