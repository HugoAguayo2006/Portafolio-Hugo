import React, { useState } from 'react';

const Contactme = () => {
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

    try {
      const data = await fetch('/api/server', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const res = await data.json();
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSendEmail}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleOnchange}
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleOnchange}
          placeholder="Email"
        />
      </div>

      <div style={{ paddingTop: '20px' }}>
        <textarea
          name="message"
          rows="10"
          cols="50"
          value={form.message}
          onChange={handleOnchange}
          placeholder="Message"
        />
      </div>

      <button type="submit" style={{ width: '140px', height: '40px' }}>
        Contact Me
      </button>
    </form>
  );
};

export default Contactme;