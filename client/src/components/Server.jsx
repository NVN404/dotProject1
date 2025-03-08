const sendMailTo = (subject, formData) => {
    const { name, email, phone, message } = formData;
  
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nikhil.4002.50.82@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
  
    // Open Gmail in a new tab
    window.open(mailtoLink, "_blank");
  };
  
  
  export default sendMailTo;
  