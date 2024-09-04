import React from 'react';

export default function Footer() {

  return (
    <>
      <div className="Footer">
        <div className="Legal">
          <h3>Legal</h3><br />
          <p>Copyright © 2024. Bereshit. All rights reserved.</p><br />
        </div>

        <div className="Contacts">
          <h3>Contacts</h3><br />
          <p>Email: info@bereshit.com</p>
          <p>Cell: +27670537445</p><br />
        </div>

        <div className="Socials">
          <h3>Socials</h3><br />
          <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Icon" /></a>
          <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Icon" /></a>
        </div>
      </div>
    </>
  )
}