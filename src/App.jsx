import Boimela from "./components/Boimela/Boimela"
import Avatar from "./Learn/Lifting_The_State_Up/Avatar"
import DataFetch from "./Learn/DataFetchDemo/DataFetch";
import Form from "./Learn/FormControl/Form"
import Toggle from './Learn/Toggler/Toggle';
import DataFromCustom from "./Learn/useCustomHook/dataFromCustom";
import MyUseStateHooks from './Learn/States/MyUseStateHooks';
import MyUseRef from "./Learn/States/MyUseRef";
import UseMemoHooks from "./Learn/States/UseMemoHooks";
import UseHeaderContext from "./Learn/usecontext/UseHeaderContext";
import ToggleSwitch from "./Learn/Practise/ToggleSwitch";
import RegistrationForm from "./Learn/Practise/registation/RegistrationForm";
import LoginForm from "./Learn/Practise/Login/LoginForm";
import PokemonSingle from "./Learn/DataFetchDemo/PokemonSingle";
import JsonPlaceholderData from "./Learn/DataFetchDemo/JsonPlaceholderData";


function App() {

  return (
    <>
      <UseHeaderContext />
      <hr />
      <UseMemoHooks />
      <hr />
      <MyUseRef />
      <hr />
      <MyUseStateHooks />
      <hr />
      <Form />
      <hr />
      <DataFromCustom />
      <hr />
      <DataFetch />
      <hr />
      <Toggle />
      <hr />
      <Avatar />
      <hr />
      <Boimela />
      <hr />
      <ToggleSwitch />
      <hr />
      <RegistrationForm />
      <hr />
      <LoginForm />
      <hr />
      <PokemonSingle />
      <hr />
      <JsonPlaceholderData />
      <hr />

    </>
  )
}

export default App
