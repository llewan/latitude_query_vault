Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  get "/user/:id/queries", to: "user#queries"
  get "/user/:id/sources", to: "user#sources"

  post '/login', to: 'user#login'
  delete '/logout', to: 'user#logout'
  get "/logged_in", to: "user#is_logged_in"

  post "/execute", to: "query#execute"
end
