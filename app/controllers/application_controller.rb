class ApplicationController < ActionController::Base
  API = "http://www.omdbapi.com/?"
  protect_from_forgery with: :exception
end
