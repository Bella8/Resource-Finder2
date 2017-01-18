class ResourcesController < ApplicationController

  def index
    # if item_params['housing'] == "Homeless"
    #   search = "Homeless Services"
    #   zip = item_params['zip']
    #   housing_value = Resource.list_of_services(search, zip)
    # end
      @data = Resource.list_of_services(search, zip)
  # end

  # def item_params
  #   params.require(:item).permit(:date, :caseid, :zip, :housing, :dv, :employment, :insurance, :snap, :child)
  # end

end
