class CocktailsController < ApplicationController
    set :default_content_type, 'application/json'
    set :method_override, true

    get "/cocktails" do
        @cocktails = Cocktail.all
        @cocktails.to_json
    end

    get "/cocktails/:id" do
        cocktail = Cocktail.find_by_id(params[:id])
        if cocktail
            cocktail.to_json
        else
            { errors: ["Cocktail not found"], status: "Not Found"}.to_json
        end
    end


  post "/cocktails" do #-----WORKS!
    #binding.pry
    #Initailize and persists new cocktail
    cocktail = Cocktail.create(
      # could also just put params here
      cocktail_name: params[:cocktail_name],
      image: params[:image],
    )
    # confirming the new cocktail and return in JSON
    cocktail.to_json
  end

  patch "/cocktails/:id" do 
    # binding.pry
    cocktail = Cocktail.find(params[:id])
    cocktail.update(
      cocktail_name: params[:cocktail_name],
      image: params[:image],
      )
    cocktail.to_json
  end

  delete "/cocktails/:id" do
    cocktail = Cocktail.find_by_id(params[:id])
    cocktail.destroy
  end


end

