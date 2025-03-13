const sendMailTo = (subject, { name, email, phone, message }) => {
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const recipient = "nikhil.4002.50.82@gmail.com";

  // Gmail compose URL
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

  // Open Gmail in a new tab
  window.open(gmailLink, "_blank");
};

export default sendMailTo;
