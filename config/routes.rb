Rails.application.routes.draw do

  get 'movies/search/:keywords', to 'movies#show'

  root to: 'static#index'
end
