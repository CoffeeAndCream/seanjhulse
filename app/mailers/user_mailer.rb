class UserMailer < ApplicationMailer
  def contact_email(user, email, phone, subject, body)
    @user = user
    @email = email
    @phone = phone
    @body = body
    mail(to: 'seanjhulse@gmail.com', subject: subject)
  end
end
