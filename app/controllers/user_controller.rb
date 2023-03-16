class UserController < ApplicationController
  before_action :find_user, :require_login, except: [:login, :logout]

  def queries
    queries = Query.where(source: @user.sources)

    render json: queries
  end

  def sources
    sources = @user.sources

    render json: sources
  end

  def login
    user = User.find_by(username: params[:username])

    if user && User.authenticate(user.username, params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid email or password" }, status: :unprocessable_entity
    end
  end

  def logout
    session.delete(:user_id)
    head :no_content
  end

  private

  def find_user
    @user = User.find(params[:id])
  end
end
