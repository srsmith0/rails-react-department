import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Department from './components/Department/Department';
import DepartmentView from './components/Department/DepartmentView';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemView from './components/Department/ItemView';

function App() {
  return (
<Container>
  <NavBar />
  <Switch>
    <Route exact path="/" component={Department} />
    <Route exact path="/departments" component={Department} />
    <Route exact path="/departments/:id" component={DepartmentView} />
    <Route exact path="/departments/:department_id/items" component={ItemList} />
    <Route exact path='/departments/:department_id/items/:id' component={ItemView} />
  </Switch>
</Container>
  );
}

export default App;
