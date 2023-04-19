import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
    <div className="social-media">
      <i className="fa-brands fa-facebook-f" />
      <i className="fa-brands fa-github" />
      <i className="fa-brands fa-twitter" />
      <i className="fa-solid fa-mountain" />
    </div>
    <div className="copyright-content flex1">
      <div className="copyright">
        <span className="small">
          Designed &amp; Developed By Developer Room
        </span>
      </div>
      <div className="key-points">
        <p>
          <i className="fa-solid fa-check" /> KYC Verified
        </p>
        <p>
          <i className="fa-solid fa-check" /> MCN Ventures
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
