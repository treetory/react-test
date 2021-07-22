/*
    각 스토리에 대한 스냅샷 테스트를 생성하려면 아래 명령어를 통해 addon 을 추가
    yarn add -D @storybook/addon-storyshots react-test-renderer
    
    이 후, 이 파일을 만들어 initStoryshots 을 실행하는 코드 생성
    
    yarn test
    를 실행하면 shapshot 테스트를 수행함
*/
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();