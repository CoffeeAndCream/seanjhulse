class HomeController < ApplicationController
  include ApplicationHelper

  def show
    @user = session[:userinfo]
  end
end
