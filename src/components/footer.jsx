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
          <div><img src="./email.png" alt="Email Icon" className="Icon" /><br />
<a href="mailto:info@bereshit.com">info@bereshit.com</a></div><br />
          <div><img src="./telephone.png" alt="Telephone Icon" className="Icon" /><br /><a href="tel:+27630013711">+27670537445</a></div><br />
        </div>

        <div className="Socials">
          <h3>Socials</h3><br />
          <a href="www.linkedin.com/malebosambo"><img src="./linkedin.png" alt="LinkedIn" className="Icon" /></a>
          <a href="www.twitter.com/lovais000"><img src="./twitter.png" alt="Twitter" className="Icon" /></a>
        </div>
      </div>
    </>
  )
}