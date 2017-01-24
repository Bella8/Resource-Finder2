class Api::V1::ItemsController < Api::V1::BaseController
  before_action :require_authentication!
  def index
    respond_with Item.all
  end

  def create
    api_resources = {}
    url_resources ={}

    if item_params['housing'] == "Homeless"
      search = "Homeless Services"
      zip = item_params['zip']
      housing_value = Resource.list_of_services(search, zip)
      api_resources['Homeless Services:'] = housing_value
    end
    if item_params['dv'] == "Yes"
      search = "Domestic Violence"
      zip = item_params['zip']
      dv = Resource.list_of_services(search, zip)
      api_resources['Domestic Violence:'] = dv
    end
    if item_params['employment'] == "Out of work – looking for work"
      search = "Workforce Services"
      zip = item_params['zip']
      employment = Resource.list_of_services(search, zip)
      api_resources['Workforce Services:'] = employment
    end

    if item_params['insurance'] == "No" || item_params['snap'] == "No"
      insurance_snap = "http://www.dhs.state.il.us/page.aspx?item=33698"
      url_resources['Insurance or Snap Benefits:'] = insurance_snap
    end
    if item_params['child'] == "Yes"
      child_care = "http://www.actforchildren.org/"
      url_resources['Child Care:'] = child_care
    end

    Item.create(item_params)
    render json: {api_resources: api_resources, url_resources: url_resources}
  end

  def search_term
    if term.downcase == "housing" || term.downcase == "homeless services"
      search = "Homeless Services"
      zip = 60640
      housing_value = Resource.list_of_services(search, zip)
    end
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
