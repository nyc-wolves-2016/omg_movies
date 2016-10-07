Rails.application.routes.draw do

  get 'movies/search', to: 'movies#search'
  get 'movies/:id', to: 'movies#show'

  root to: 'static#index'
end
