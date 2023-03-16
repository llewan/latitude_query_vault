Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/user/:id/queries", to: "user#queries"
  get "/user/:id/sources", to: "user#sources"
  post '/login', to: 'user#login'
  delete '/logout', to: 'user#logout'

  post "/execute", to: "query#execute"
end
