class InvestorsController < ApplicationController

    get "/investors" do
    investors = Investor.all
    investors.to_json(include: [:stock_transactions])
    end

    get "/investors/:id" do
    investors = Investor.find(params[:id])
    investors.to_json(include: [:stock_transactions])
    end

    # post "/investors" do
    #     Investor.create(params[:name]).to_json
    # end



 end