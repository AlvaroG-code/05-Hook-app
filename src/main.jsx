import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWitchCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { HooksApp } from "./HooksApp";
// import "./08-useReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TodoApp />
    </StrictMode>
);
