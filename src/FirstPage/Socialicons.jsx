import React from 'react'
import "./Icons.css"
const Socialicons = () => {
  return (
    <div className="icons">
      <div className="wrapper">
        <div className="button">
          <a href="https://www.facebook.com/paliwal.arin" target="_blank">
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>paliwal.arin</span>
          </a>
        </div>
        <div className="button">
          <a href="https://twitter.com/arin_paliwal" target="_blank">
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <span>arin_paliwal</span>
          </a>
        </div>
        <div className="button">
          <a href="https://www.instagram.com/arin.paliwal/" target="_blank">
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>arin.paliwal</span>
          </a>
        </div>
        <div className="button">
          <a href="https://github.com/arin-paliwal" target="_blank">
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>arin-paliwal</span>
          </a>
        </div>
        <div className="button">
          <a href="https://www.linkedin.com/in/arinpaliwal/" target="_blank">
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>arinpaliwal</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socialicons