import { useEffect } from 'react';
import p5 from 'p5';
import './App.css';
// import './modal.css'
import Nav from './components/Nav';
import Description from './components/Description';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const background = new p5((p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        p.background(150);
        p.noStroke();
        for (let i = 0; i < 14000; i++) {
          p.rect(p.random(p.width), p.random(p.height), 2, 2);
        }
      };
    });

    return () => {
      background.remove();
    };
  }, []);

  return (
    <>
      <div className="container">
        <Nav />
        <Description />
        <Footer />
      </div>
    </>
  );
};

export default App;
