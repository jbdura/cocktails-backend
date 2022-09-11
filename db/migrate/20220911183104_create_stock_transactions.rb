class CreateStockTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :stock_transactions do |t|
      t.string :company_name
      t.integer :price
      t.string :date
      t.integer :investor_id
    end
  end
end
