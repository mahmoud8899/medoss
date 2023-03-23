import express from 'express'
import nodemailer from "nodemailer"
const router = express.Router()



router.post('/api/send/', async (req, res) => {

    const { email, phone, Rubrik, thetext } = req.body


    try {

        await main(req.body).catch(console.error)


        return res.status(200).json('sussdfuly')

    } catch (error) {

        return res.status(400).json({
            message: error.message
        })
    }


})




// async..await is not allowed in global scope, must use a wrapper
async function main(newMessage) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'cpsrv12.misshosting.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'info@medoss.se', // generated ethereal user
            pass: 'Aa102030@!', // generated ethereal password
        },
    });


    console.log('show me data.', newMessage)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"new Message of customer" <info@medoss.se>', // sender address
        to: "mahmoud.talat899@gmail.com", // list of receivers
        subject: "new message  ✔", // Subject line
        html: `<div> 
         <h1> object : ${newMessage?.thehelp}  </h1>
         <h1> email : ${newMessage?.email}</h1>
         <h1> last object : ${newMessage?.theobject} </h1>
         <h1>message  : ${newMessage?.message}</h1>
         </div>`
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}





export default router