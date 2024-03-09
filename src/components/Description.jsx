import React, { useEffect, useState } from 'react';
import Modal from './Modal';

function Description() {
  const [activeRepo, setActiveRepo] = useState(null);
  const [graduationCountdown, setGraduationCountdown] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const repos = {
    react: {
      title: 'React',
      color: 'react',
      border: 'react-border',
      description:
        'React is my preferred frontend library, I have been using it for over a year now and would call myself proficient.',
      img1: '/rq.png',
      img2: '/rr.png',
      img3: '/sg.png',
      href1: 'https://github.com/WriteCodeRAM/ReelQuotes',
      href2: 'https://github.com/WriteCodeRAM/ReelRave',
      href3: 'https://github.com/WriteCodeRAM/SeatGeekDashboard',
      desc1:
        'Full-Stack app made with React and Supabase, allows users to test their movie trivia skills and climb the leaderboard.',
      desc2:
        'Full-Stack app made with React and Supabase, allows users to participate in a movie discussion forum.',
      desc3:
        'Leverages the SeatGeek API, allowing users to view events in their city and filter events based on type/genre.',
    },
    node: {
      title: 'Node',
      color: 'nodeJS',
      border: 'node-border',
      description:
        "Node's ability to allow me to use JavaScript on the backend to create quick scripts and servers makes it a no brainer when I am developing web applications.",
      img1: '/tw.png',
      img2: '/placeholder.jpeg',
      href1:
        'https://github.com/WriteCodeRAM/terminalWordle/blob/main/project/app.js',
      href2: 'https://github.com/WriteCodeRAM/GenerateAccessTokens',
      desc1:
        "Terminal Wordle leverage rapidAPI word endpoint, awarded most aesthetically-pleasing project at Capital One's Tech Mini-Mester.",
      desc2:
        'Script allowing users to regenerate OAuth2 tokens at custom set intervals, streamlining the otherwise manual and repetitive process of obtaining new access tokens.',
    },
    python: {
      title: 'Python',
      color: 'python',
      border: 'python-border',
      description:
        'Python is my interview language of choice, here are some noteworthy projects that I have created using it thus far.',
      img1: '/rc.png',
      img2: '/bsa.png',
      href1: 'https://github.com/WriteCodeRAM/ReelCharts',
      href2: 'https://github.com/WriteCodeRAM/BookStoreAPI',
      desc1:
        'App made using the streamlit framework, group project for Human-Computer Interaction class. Responsible for home page.',
      desc2:
        'Created a RESTful API for a fictitious book store using Python/Flask and MySQL for a group project.',
    },
    others: {
      title: 'Others',
      color: 'others',
      border: 'others-border',
      description:
        "Others includes side projects i've created for school or on my free time, these are mainly done with plain HTML/CSS/JS.",
      img1: '/ttt.png',
      img2: '/eas.png',
      img3: '/kw.png',
      href1: 'https://writecoderam.github.io/Tic-Tac-Toe/',
      href2: 'https://writecoderam.github.io/Etch-a-sketch/',
      href3: 'https://writecoderam.github.io/kindaWordle/',
      desc1: 'Tic-Tac-Toe game that includes PvP and a very bad AI mode.',
      desc2:
        'Etch-a-Sketch app that allows users to draw on a black or white canvas.',
      desc3: 'Wordle clone that tracks users stats through local storage.',
    },
  };

  //(May 1, 2024)
  const graduationDate = new Date('2024-05-01T00:00:00Z');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const timeDifference = graduationDate - now;

      if (timeDifference <= 0) {
        setGraduationCountdown('Graduation Day!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setGraduationCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    calculateCountdown();

    // Update the countdown every second
    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const handleSpanClick = (repoName) => {
    setActiveRepo(repos[repoName]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="description-container">
      <p>I am a full-stack developer</p>
      <p>
        who uses{' '}
        <span className="react" onClick={() => handleSpanClick('react')}>
          react
        </span>
        ,{' '}
        <span className="nodeJS" onClick={() => handleSpanClick('node')}>
          nodeJS
        </span>
        ,{' '}
        <span className="python" onClick={() => handleSpanClick('python')}>
          python
        </span>{' '}
        and{' '}
        <span className="others" onClick={() => handleSpanClick('others')}>
          others
        </span>
        .{' '}
      </p>
      <p className="graduation">Graduating in: {graduationCountdown}</p>

      {activeRepo && (
        <Modal repos={activeRepo} isOpen={modalOpen} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Description;
