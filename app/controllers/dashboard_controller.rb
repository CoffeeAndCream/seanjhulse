class DashboardController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = current_user
  end
  def contact
    @user = params[:email][:user]
    @email = params[:email][:email]
    @phone = params[:email][:phone]
    @subject = params[:email][:subject]
    @body = params[:email][:body]
    respond_to do |format|
      # Tell the UserMailer to send a welcome email after save
      UserMailer.contact_email(@user, @email, @phone, @subject, @body).deliver_now
      format.js { render 'email_sent.js'}
    end
  end
end
