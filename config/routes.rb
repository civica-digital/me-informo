Rails.application.routes.draw do
  get '/sujetos' => 'pages#informationgranted'
  get '/solicitud' => 'pages#demand'
  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
