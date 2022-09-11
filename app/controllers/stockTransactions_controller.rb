class StockTransactionsController < ApplicationController

   get "/stocktransactions" do
      transactions = StockTransaction.all
      transactions.to_json(include: [:investor])
   end

   get "/stocktransactions/:id" do
      transaction = StockTransaction.find(params[:id])
      transaction.to_json
   end

   post "/stocktransactions" do 
      createInvestor = Investor.find_or_create_by(name: params[:investor][:name])
      createBlog = createInvestor.stock_transactions.build(params[:stock_transactions])

      if createInvestor.id && createBlog.save
         createBlog.to_json(include:[:investor])
      else 
         { errors: createBlog.errors.full_messages }.to_json
      end
   end

   delete "/stocktransactions/:id" do 
      transaction = StockTransaction.find(params[:id])
      transaction.destroy
      transaction.to_json
   end

   patch "/stocktransactions/:id" do 
      edit = StockTransaction.find(params[:id])
      edit.update(price: params[:price])
      edit.to_json
   end

end