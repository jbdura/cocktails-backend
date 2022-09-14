class Cocktail < ActiveRecord::Base
    has_many :reviews

    #Must have a name. Presence determines if attribute is there
    #and wont save if not. Uniqueness validates if the name has 
    #already been taken. Can see errors with cocktail.errors.full_messages
    validates :cocktail_name, presence: true, uniqueness: true
    
end