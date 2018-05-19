Rails.application.routes.draw do
  root 'todos#index'
  get 'signup' => 'users#new'

  get 'page/hello'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
