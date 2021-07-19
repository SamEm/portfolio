import { Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Work from './pages/Work';

export default function PageRouting() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/work' component={Work} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  )
}