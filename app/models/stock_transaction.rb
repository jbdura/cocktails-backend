class StockTransaction < ActiveRecord::Base
    belongs_to :investor
end