class ApplicationController < ActionController::API
  def require_login
    unless session[:user_id]
      render json: { error: "You must be logged in" }, status: :unauthorized
    end
  end
end
