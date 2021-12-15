import MobXContext from "../src/store/mobXContext";
import MobXStore from "../src/store/mobxStore";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MobXContext.Provider value={new MobXStore()}>
      <Story/>
    </MobXContext.Provider>
  )
]