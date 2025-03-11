const sendMailTo = (subject, { name, email, phone, message }) => {
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:nikhil.4002.50.82@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

export default sendMailTo;
