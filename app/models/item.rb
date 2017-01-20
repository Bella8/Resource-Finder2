class Item < ActiveRecord::Base
    validates :caseid, :zip, numericality: true, length: { is: 5 }
    validates :housing, :dv, :employment, :insurance, :snap, :child, presence: true

end
