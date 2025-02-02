import Boimela from "./components/Boimela/Boimela"
import Avatar from "./study/Lifting_The_State_Up/Avatar"
import DataFetch from "./study/DataFetchAPI/DataFetch";
import Form from "./study/FormControl/Form"
import Toggle from './study/Toggler/Toggle';
import DataFromCustom from "./study/useCustomHook/dataFromCustom";


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
