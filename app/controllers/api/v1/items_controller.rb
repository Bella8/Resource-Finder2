class Api::V1::ItemsController < Api::V1::BaseController
  def index
    respond_with Item.all
  end

  def create
    values = {"housing" => "Homeless Services", "dv" => "Domestic Violence", "employment" => "Workforce Services", "insurance" => "No", "snap" => "No", "child" => "No" }
    # empty hash?
    if item_params['housing'] == "Homeless"
      search = "Homeless Services"
      zip = item_params['zip']
      housing_value = Resource.list_of_services(search, zip)
    end
    # if item_params['dv'] == "Yes"
    #   search = "Domestic Violence"
    #   dv_value = Resource.list_of_services(search)
    # end
    Item.create(item_params)
    # respond_with :api, :v1, housing_value
    # rendering the housing information 
    render json: housing_value
    # render json: dv_value
    # redirect_to resources_search_path
    # if get info from server on javascipt then redirect.
  end

  # def resources
  #   housing_value = Resource.list_of_services(search)
  # end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  def update
    item = Item.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item
  end


  private

  def item_params
    params.require(:item).permit(:date, :caseid, :zip, :housing, :dv, :employment, :insurance, :snap, :child)
  end
end
