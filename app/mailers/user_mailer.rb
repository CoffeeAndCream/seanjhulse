class UserMailer < ApplicationMailer
  def contact_email(user, email, body)
    @user = user
    @email = email
    @body = body
    mail(to: 'seanjhulse@gmail.com', subject: "Email from your wesbite")
  end
end
