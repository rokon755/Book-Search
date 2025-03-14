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


function App() {

  return (
    <>
      <UseHeaderContext />
      <UseMemoHooks />
      <MyUseRef />
      <MyUseStateHooks />
      <Form />
      <DataFromCustom />
      <DataFetch />
      <Toggle />
      <Avatar />
      <Boimela />
      <ToggleSwitch />
      <RegistrationForm />
      <LoginForm />


    </>
  )
}

export default App
