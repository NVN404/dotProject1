const sendMailTo = (subject, { name, email, phone, message }) => {
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nikhil.4002.50.82@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.open(mailtoLink, "_blank");
};

export default sendMailTo;
