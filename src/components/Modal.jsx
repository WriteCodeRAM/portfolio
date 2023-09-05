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

        {repos.img1 && <img src={repos.img1} className={repos.border} alt="Image 1" />}
        {repos.img2 && <img src={repos.img2} className={repos.border}  alt="Image 2" />}
        {repos.img3 && <img src={repos.img3} className={repos.border}  alt="Image 3" />}
       </div>
       </div>
    </div>
  );
}

export default Modal;
