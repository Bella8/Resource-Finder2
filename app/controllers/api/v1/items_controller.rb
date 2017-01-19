class Api::V1::ItemsController < Api::V1::BaseController
  def index
    respond_with Item.all
  end

  def create
    # resources_values = {"housing" => "Homeless", "dv" => "Yes", "employment" => "Out of work – looking for work" }
    # "division": "Homeless Services"
    # "division":  "Domestic Violence"
    # "division": "Workforce Services"

    # empty hash?
    # puts"my items" + item_params
    # binding.pry
    # if resources_values.values.include?(item_params.values)

    if item_params['housing'] == "Homeless"
      search = "Homeless Services"
      zip = item_params['zip']
      housing_value = Resource.list_of_services(search, zip)
    end
    if item_params['dv'] == "Yes"
      search = "Domestic Violence"
      zip = item_params['zip']
      dv = Resource.list_of_services(search, zip)
    end
    if item_params['employment'] == "Out of work – looking for work"
      search = "Workforce Services"
      zip = item_params['zip']
      employment = Resource.list_of_services(search, zip)
    end

    if item_params['insurance'] == "No" || item_params['snap'] == "No"
      insurance_snap = "http://www.dhs.state.il.us/page.aspx?item=33698"
    end
    if item_params['child'] == "Yes"
      child_care = "http://www.actforchildren.org/"
    end

    Item.create(item_params)
    # respond_with :api, :v1, housing_value
    # rendering the housing information
    render json: [insurance_snap, child_care, housing_value, dv, employment]
    # puts housing_value
    # render json: dv_value
    # if get info from server on javascipt then redirect.
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
