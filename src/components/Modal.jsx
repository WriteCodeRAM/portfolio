import React from 'react';
import '/src/modal.css'

const Modal = ({ repos }) => {
  return (
    <div className='modal-container'>
       <div className={`modal ${repos.border}`} >
        <div className="modal-header">

        <h2 className={repos.color}>{repos.title}</h2>
        <p>{repos.description}</p>
        
        </div>
       
       <div className="modal-projects">

        <div className="project-1">

        {repos.img1 && <a href={repos.href1}> <img src={repos.img1} className={repos.border} alt="Image 1" /></a>}
        {<p>{repos.desc1}</p>}
        </div>
        <div className="project-2">

        {repos.img2 && <a href={repos.href2}> <img src={repos.img2} className={repos.border}  alt="Image 2" /></a>}
        {<p>{repos.desc2}</p>}
        </div>
        <div className="project-3">

        {repos.img3 && <a href={repos.href3}> <img src={repos.img3} className={repos.border}  alt="Image 3" /></a>}
        {<p>{repos.desc3}</p>}
        </div>
       </div>
       </div>
    </div>
  );
}

export default Modal;
