const sendMailTo = (subject, { name, email, phone, message }) => {
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:dpslakkur2010@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dpslakkur2010@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = mailtoLink;
  } else {
    window.open(gmailLink, "_blank");
  }
};

export default sendMailTo;
