import { Switch, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Work from './pages/work/Work';

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