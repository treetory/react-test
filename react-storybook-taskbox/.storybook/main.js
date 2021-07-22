module.exports = {
  /*
    구성한 stories 파일들을 찾는 경로를 설정
    /src/components 에 Task 스토리를 새로 만들었으므로 추가
  */
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}