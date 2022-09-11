class Investor < ActiveRecord::Base
    has_many :stock_transactions

    validates :name, uniqueness: true
end