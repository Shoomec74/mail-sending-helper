const mailer = require("nodemailer");
const mailConf = require("./mail.js");
const transport = mailer.createTransport(mailConf);

const themeMessage = "Моющие средства для вашего производства";
const HTML = '<h3>Предложение действует до 22.04.2022г.</h3><br><p>У нас по прежнему рекордно низкие цены на моющие средства для вашего производства. Во вложении каталог с моющими средстами промышленной серии и для профессиональной кухни вашего предприятия.</p><br><p>C уважением, Евгений Русаков</p><br><p>Телефон: 89634770888</p><br><p>Email: evgeny.rusakov@cleanwave.pro</p>';
const CSS = '<style>p{margin:0;padding:0}</style>';

let mailOptions = {
  from: mailConf.auth.user,
  to: "shoomec@yandex.ru, kostum_92@mail.ru",
  subject: themeMessage,
  html: CSS + HTML,
  attachments: [
    {
      name: "Промышленная серия", 
      path: "./attacments/Промышленная серия.pdf",
    },
    {
      name: "Профессиональная кухня", 
      path: "./attacments/Для проф кухни.pdf",
    }
  ],
};

function mailCallback(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
}

transport.sendMail(mailOptions, mailCallback);