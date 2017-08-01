class DashboardController < ApplicationController
  before_action :authenticate_user!
  include Secured

  def show
    @user = current_user
  end
  def contact
    @user = params[:email][:user]
    @email = params[:email][:email]
    @body = params[:email][:body]
    respond_to do |format|
      # Tell the UserMailer to send a welcome email after save
      begin
      UserMailer.contact_email(@user, @email, @body).deliver_now
      format.js { render 'email_sent.js'}
      rescue Net::SMTPAuthenticationError, Net::SMTPServerBusy, Net::SMTPSyntaxError, Net::SMTPFatalError, Net::SMTPUnknownError => e
        format.js { render 'email_failed.js'}
      end
    end
  end
end
