const res = require("express/lib/response");
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN,
});

const sendWelcomeEmail = async (email, name) => {
  mg.messages.send({
    to: email,
    from: "roshankumar.sahu1999@gmail.com",
    subject: "Welome",
    text: `Welome to the App, ${name},Let me know your experience with the app`,
  });
};
const sendGoodByeEmail = async (email, name) => {
  mg.messages.send({
    to: email,
    from: "roshankumar.sahu1999@gmail.com",
    subject: "Sorry to Dissapoint You!",
    text: `We deeply regret your for ur inconvinience ${name}. We will keep working to better our services`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail,
};
// const data = {
//   from: "roshankumar.sahu1999@gmail.com",
//   to: "roshankumar.sahu1999@gmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!",
// };
// const func = async () => {
//   try {
//     const response = await mg.messages().send(data);
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };
// func();
