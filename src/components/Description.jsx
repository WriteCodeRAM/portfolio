import React, { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import Modal from './Modal';

// const octokit = new Octokit({
//   auth: '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', 
// });

function Description() {

  const [activeRepo, setActiveRepo] = useState(null);
  const [graduationCountdown, setGraduationCountdown] = useState('');



  
  const repos = {
    react: {
      title: 'React',
      color: 'react',
      border: 'react-border', 
      description: 'React is my preferred frontend library, I have been using it for about a year now and would call myself proficient.',
      img1: '/src/images/rq.png',
      img2: '/src/images/rr.png',
      img3: '/src/images/sg.png',
    },
    node: {
      title: 'Node',
      color: 'nodeJS',
      border: 'node-border', 
      description: "Node's ability to allow me to use JavaScript on the backend to create quick scripts and servers makes it a no brainer when I am developing web applications.",
      img1: '',
      img2: '',
    },
    python: {
      title: 'Python',
      color: 'python',
      border: 'python-border', 
      description:  'I am relatively new to Python, with only two noteworthy projects that I have created using it thus far.',
      img1: '/src/images/rc.png',
      img2: '',
    },
    others: {
      title: 'Others',
      color: 'others',
      border: 'others-border', 
      description: "Others includes side projects i've created for school or on my free time, these are mainly done with plain HTML/CSS/JS.",
      img1: '/src/images/ttt.png',
      img2: '/src/images/eas.png',
      img3: '/src/images/kw.png',
    },
  };

 


  // useEffect(() => {
  //   async function getRepos() {
  //     try {
  //       const response = await octokit.rest.repos.listForAuthenticatedUser();
  //       const repos = response.data;
  //       console.log(repos); 

  //       const filteredReactRepos = repos.filter(repo => repo.description == 'react');
  //       const filteredNodeRepos = repos.filter(repo => repo.description == 'nodeJS')
  //       const filteredPythonRepos = repos.filter(repo => repo.description == 'python')
  //       const filteredOtherRepos = repos.filter(repo => repo.description == 'other')

  //       setReactRepos(filteredReactRepos);
  //       setReactRepos({
  //         ...reactRepos, 
  //         repos: filteredReactRepos
  //       });
  //       setNodeRepos({
  //         ...nodeRepos, 
  //         repos: filteredNodeRepos
  //       })
  //       setPythonRepos({
  //         ...pythonRepos, 
  //         repos: filteredPythonRepos
  //       })
  //       setOtherRepos({
  //         ...otherRepos, 
  //         repos: filteredOtherRepos
  //       })
        
        
  //       console.log(reactRepos);

  //     } catch (error) { 
  //       console.error('Error fetching repositories:', error);
  //     }

  //   }

  //   getRepos();
  // }, []);

    //(May 1, 2024)
    const graduationDate = new Date('2024-05-01T00:00:00Z');

    useEffect(() => {
      // Calculate the remaining time
      const calculateCountdown = () => {
        const now = new Date();
        const timeDifference = graduationDate - now;
  
        if (timeDifference <= 0) {

          setGraduationCountdown('Graduation Day!');
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          setGraduationCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      };
  
      // Calculate the countdown immediately
      calculateCountdown();
  
      // Update the countdown every second
      const countdownInterval = setInterval(calculateCountdown, 1000);
  
      return () => {
        clearInterval(countdownInterval);
      };
    }, []);

    const handleSpanClick = (repoName) => {
      setActiveRepo(repos[repoName]);
      console.log(repos[repoName])
    };
  
  



  return (
    <div className='description-container'>
        <p>I am a full-stack developer</p>
        <p>who uses <span className='react' onClick={() => handleSpanClick('react')}>react</span>, <span className="nodeJS"  onClick={() => handleSpanClick('node')}>nodeJS</span>, <span className="python"  onClick={() => handleSpanClick('python')}>python</span> and <span className="others"  onClick={() => handleSpanClick('others')}>others</span>. </p>
        <p className='graduation'>
        Graduating in:  {graduationCountdown}
      </p>

   
      {activeRepo && (
        <Modal  repos={activeRepo} />
      )}
    </div>
  )
}

export default Description