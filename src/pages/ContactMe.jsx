import React, { useState } from 'react';

const Contactme = () => {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const data = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const res = await data.json();
      if (!data.ok) {
        setStatus(res.message || 'Unable to send message');
        return;
      }

      setStatus('Message sent successfully');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch {
      setStatus('Network error while sending message');
    }
  };

  return (
    <div>
      Contactme
      <form onSubmit={handleSendEmail}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleOnchange}
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleOnchange}
            placeholder="Email"
            required
          />
        </div>
        <div style={{ paddingTop: '20px' }}>
          <textarea
            name="message"
            rows="10"
            cols="50"
            value={form.message}
            onChange={handleOnchange}
            placeholder="Your message"
            required
          />
        </div>
        <button style={{ width: '140px', height: '40px' }} type="submit">
          Contact Me
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Contactme;
