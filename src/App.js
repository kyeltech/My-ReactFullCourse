import React from 'react';
import './App.css';
// import Greet  from './Components/React/Function'
// import Welcome from "./Components/React/Class"
// import Jsx from "./Components/React/Jsx"
// import Counter from './Components/React/Setstate'
// import Destructing from './Components/React/Destructing'
// import Click from './Components/React/FunctionClick'
// import ClassClick from './Components/React/ClassClick'
// import EventBind from './Components/React/EventBind'
// import ParentComponent from './Components/React/ParentComponent'
// import UserLogin from './Components/React/UserLogin';
// import Mapping from './Components/React/Mapping'
// import IndexAsKey from './Components/React/IndexAsKey'
// import Form from './Components/React/Form'
// import Table from './Components/React/Table'
// import LifecycleA from './Components/React/LifecycleA'
// import ParentComp from './Components/React/ParentComp'
// import RefDemo from './Components/React/RefDemo'
// import FocusInput from './Components/React/FocusInput'
// import PortalDemo from './Components/React/PortalDemo'
// import Hero from './Components/React/Hero'
// import FRParent from './Components/React/FRParent'
import ClickCounter from './Components/React/ClickCounter';
import HoverCount from './Components/React/HoverCount';
// import heroError from './Components/React/heroError'
// import ForwardParentInput from './Components/React/ForwardParentInput'
// import withCounter from './Components/React/withCounter'

function App() {

  return (
    <div className="App">
      {/* <withCounter /> */}
      <ClickCounter name="Ezkiel"/>
      <HoverCount  name="Kyel"/>
      {/* <FRParent /> */}
      {/* <heroError>
      <Hero heroName='batman' />
      <Hero heroName='Superman' />
      <Hero heroName='Joker' />
      </heroError> */}
      {/* <PortalDemo /> */}
      {/* <ForwardParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <IndexAsKey /> */}
      {/* <Mapping /> */}
   {/* <Greet /> */}
         {/* <Welcome />
       <Jsx /> */}
       {/* <Counter /> */}
       {/* <Destructing /> */}
       {/* <Click /> */}
       {/* <ClassClick /> */}
       {/* <EventBind /> */}
       {/* <ParentComponent /> */}
       {/* <UserLogin /> */}
    </div>
  );

}

export default App;
