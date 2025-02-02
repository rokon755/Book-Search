import Boimela from "./components/Boimela/Boimela"
import Avatar from "./Learn/Lifting_The_State_Up/Avatar"
import DataFetch from "./Learn/DataFetchDemo/DataFetch";
import Form from "./Learn/FormControl/Form"
import Toggle from './Learn/Toggler/Toggle';
import DataFromCustom from "./Learn/useCustomHook/dataFromCustom";


function App() {

  return (
    <>
      <DataFromCustom />
      <DataFetch />
      <Toggle />
      <Form />
      <Avatar />
      <Boimela />

    </>
  )
}

export default App
