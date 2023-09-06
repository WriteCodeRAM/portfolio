import React from 'react';
import { useEffect } from 'react';
import '/src/modal.css'

const Modal = ({ repos,  isOpen, closeModal }) => {


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.modal-container')) {
        closeModal();
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;



  return  (
    <div className='modal-container' >
       <div className={`modal ${repos.border}`} >
        <div className="modal-header">

        <h2 className={repos.color}>{repos.title}</h2>
        <p>{repos.description}</p>
        
        </div>
       
       <div className="modal-projects">

        <div className="project-1">

        {repos.img1 && <a href={repos.href1}  target="_blank" rel="noopener noreferrer"> <img src={repos.img1} className={repos.border} alt="Image 1"></img></a>}
        {<p>{repos.desc1}</p>}
        </div>
        <div className="project-2">

        {repos.img2 && <a href={repos.href2} target="_blank" rel="noopener noreferrer"> <img src={repos.img2} className={repos.border}  alt="Image 2"></img></a>}
        {<p>{repos.desc2}</p>}
        </div>
        <div className="project-3">

        {repos.img3 && <a href={repos.href3} target="_blank" rel="noopener noreferrer"> <img src={repos.img3} className={repos.border}  alt="Image 3" target="_blank" ></img></a>}
        {<p>{repos.desc3}</p>}
        </div>
       </div>
       </div>

    </div>
  
  );
  
}

export default Modal;