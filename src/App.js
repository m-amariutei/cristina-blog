import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Spring from './components/pages/Spring'
import Summer from './components/pages/Summer'
import Fall from './components/pages/Fall'
import Winter from './components/pages/Winter'
import DressesArticle from './components/pages/DressesArticle';
import NatureArticle from './components/pages/NatureArticle';
import ConfortableArticle from './components/pages/ConfortableArticle';
import EnvironmentArticle from './components/pages/EnvironmentArticle';
import ColorArticle from './components/pages/ColorArticle';
import JacketsArticle from './components/pages/JacketsArticle';
import SocialMedia from './components/pages/SocialMedia';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/printemps' component={Spring} />
          <Route path='/ete' component={Summer} />
          <Route path='/automne' component={Fall} />
          <Route path='/hiver' component={Winter} />
          <Route path='/robes' component={DressesArticle} />
          <Route path='/nature' component={NatureArticle} />
          <Route path='/confortable' component={ConfortableArticle} />
          <Route path='/environnement' component={EnvironmentArticle} />
          <Route path='/couleur' component={ColorArticle} />
          <Route path='/manteaux' component={JacketsArticle} />
          <Route path='/media' component={SocialMedia} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
