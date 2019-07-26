/** @jsx h */
import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = props => (
  <div class="App">
    <Header />
    <main class="w-full max-w-screen-xl mx-auto px-6">
    <Router>
        <Home path="/" />
        <About path="/about" />
        <NotFound default />
    </Router>
    </main>
  </div>
);

export default App;
