import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Meal from './components/Meal/Meal';
import MealInfo from './components/MealInfo/MealInfo';


function App() {


  return (
    <>
      <Router basename='/spa-food-project'>
        <Header/>
          <main className='container content'>
          <Switch>
        <Route exact path="/" >
              <Home/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/meal/:name" component={Meal}/>
          <Route path="/info/:id" component={MealInfo}/>
        </Switch>
          </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
