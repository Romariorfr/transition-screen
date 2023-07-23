import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, AnimatedProps, useSpringRef, SpringValue } from '@react-spring/web';
import styles from './styles.module.css';
import './App.css';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';

interface PageProps {
  onClick: () => void;
  style: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

const pages: ((props: PageProps) => React.ReactElement)[] = [
  ({ style, onClick }) => <animated.div style={{ ...style }}><Page1 onClick={onClick} /></animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style }}><Page2 onClick={onClick} /></animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style }}><Page3 onClick={onClick} /></animated.div>,
];

function App() {
  const [index, setIndex] = useState(0);

  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div className={`flex fill ${styles.container}`}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} onClick={handleNextClick} />;
      })}
    </div>
  );
}

export default App;
