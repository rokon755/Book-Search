import Boimela from "./components/Boimela/Boimela"
import Avatar from "./Learn/Lifting_The_State_Up/Avatar"
import DataFetch from "./Learn/DataFetchDemo/DataFetch";
import Form from "./Learn/FormControl/Form"
import Toggle from './Learn/Toggler/Toggle';
import DataFromCustom from "./Learn/useCustomHook/dataFromCustom";
import MyUseStateHooks from './Learn/States/MyUseStateHooks';
import MyUseRef from "./Learn/States/MyUseRef";


function App() {

  return (
    <>
      {/* <MyUseRef /> */}
      <DataFromCustom />
      <Form />
      <DataFetch />
      <Toggle />
      <MyUseStateHooks />
      <Avatar />
      <Boimela />

    </>
  )
}

export default App
