class Item < ActiveRecord::Base
    validates :caseid, :zip, numericality: true, length: { is: 5 }
    validates :caseid, uniqueness: true
    validates :zip, :housing, :employment,  presence: true

end
