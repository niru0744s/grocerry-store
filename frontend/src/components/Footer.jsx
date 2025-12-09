import React, { useState } from 'react';
import './footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', message: ''
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill name, email and message.' });
      return;
    }
    // MOCK submit - replace this with a server call (fetch/axios)
    setStatus({ type: 'sending', text: 'Sending...' });
    setTimeout(() => {
      setStatus({ type: 'ok', text: 'Message sent. We will get back to you soon.' });
      setForm({ name: '', email: '', phone: '', address: '', message: '' });
    }, 900);
  };

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      {/* slanted top using svg */}
      <div className="footer-slope" aria-hidden>
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="slope-svg">
          <polygon points="0,10 100,0 100,10" fill="var(--dark)"/>
        </svg>
      </div>

      <div className="footer-inner">
        <div className="footer-left">
          <h2 id="footer-heading" className="footer-title">CONTACT US</h2>
          <p className="footer-sub">We are looking forward to hearing from you soon</p>

          <div className="footer-address">
            <div className="addr-icon">✉️</div>
            <div>
              <div className="addr-label">ADDRESS</div>
              <address className="addr-text">
                Aurora Casa / SS Crackers<br/>
                12 Festival Market<br/>
                Parade Road, YourCity<br/>
                PIN - 123456
              </address>
            </div>
          </div>

          <div className="footer-socials" aria-hidden>
            <a href="#" className="social"><WhatsAppIcon/></a>
            <a href="#" className="social"><FacebookIcon/></a>
            <a href="#" className="social"><TelegramIcon/></a>
            <a href="#" className="social"><EmailIcon/></a>
          </div>
        </div>

        <div className="footer-right">
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="row two">
              <label className="field">
                <input name="name" value={form.name} onChange={onChange} placeholder="Name" aria-label="Name" />
              </label>
              <label className="field">
                <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className='email-input' aria-label="Email" />
              </label>
            </div>

            <div className="row two">
              <label className="field">
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" aria-label="Phone" />
              </label>
              <label className="field">
                <input name="address" value={form.address} onChange={onChange} placeholder="Address" className='address-input' aria-label="Address" />
              </label>
            </div>

            <div className="row">
              <label className="field">
                <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" aria-label="Message" rows="5" />
              </label>
            </div>

            <div className="row actions">
              <button type="submit" className="btn-done">Done</button>
              {status && <div className={`form-status ${status.type}`}>{status.text}</div>}
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Aurora Casa — All rights reserved</small>
      </div>
    </footer>
  );
}
