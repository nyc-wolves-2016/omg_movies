module Parser < ApplicationRecord
  API = "http://www.omdbapi.com/?"

  def self.find_movie(args={})
    query_string = "t=#{args.fetch(:title)}&y=#{args.fetch(:year,"")}&plot=#{args.fetch(:plot)}&r=json"
    search = API + query_string
  end
end
