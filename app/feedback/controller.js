const nodemailer = require('nodemailer')
const config = require('environmental').config()
const validator = require('validator')
const transporter = nodemailer.createTransport(config.nodemailer);


module.exports.feedback = function*(){
  var requestParams = this.request.body.fields
  var senderEmail = requestParams.email
  var message = validator.escape(requestParams.message)
  var senderName = validator.escape(requestParams.name || '')

  if(!validator.isEmail(senderEmail)){
    this.status = 400
    this.body = {
      message: 'Invalid email address'
    }
    return
  }

  var result = yield new Promise(function(resolve, reject){
    transporter.sendMail({
      from: config.nodemailer.name,
      replyTo: senderEmail,
      to: config.mail.team,
      subject: 'Shiny metal feedback',
      html: `<p>"${ senderName }" <${ senderEmail }>:</p> <p>${ message }</p>`,
      headers: {
        'Reply-To': `"${ senderName }" ${ senderEmail }\r\n`,
      }
    }, function(error, response){
      if(error){
        resolve({
          status: 500,
          message: 'Email was not sent'
        })
      } else {
        resolve({
          status: 202
        })
      }
    })
  })

  this.status = result.status
  if(result.message){
    this.body = {
      message: result.message
    }
  }
}
