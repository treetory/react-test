import { createContext } from "react";
import MobXStore from "./mobxStore";

const MobXContext = createContext<MobXStore>(new MobXStore());

export default MobXContext;
