class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :logged_in_user
  include SessionsHelper
  
  def user_logged_in?
    if session[:user_id]
      current_user
    end
    return if @current_user
    redirect_to login_path
  end

  def logged_in_user
    unless logged_in?
      # flash[:danger] = "Please log in."
      redirect_to login_url
    end
    @projects = Project.where(user_id: current_user.id)
  end

end
