class User < ApplicationRecord
  has_many :user_sources
  has_many :sources, through: :user_sources

  def self.authenticate(username, password)
    user = find_by(username: username)
    if user && BCrypt::Password.new(user.password) == password
      user
    else
      nil
    end
  end
end
