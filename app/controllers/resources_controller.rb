class ResourcesController < ApplicationController

  def index
    search= params[:search]
    zip = params[:zip]
    if search.downcase == "housing" || search.downcase == "homeless services"
      search = "Homeless Services"
      zip = zip
      @data = housing_value = Resource.list_of_services(search, zip)
    end
    if search.downcase == "work" || search.downcase == "employment"
      search = "Workforce Services"
      zip = zip
      @data = housing_value = Resource.list_of_services(search, zip)
    end

    if search.downcase == "youth" || search.downcase == "youth services"
      search = "Youth Services"
      zip = zip
      @data = housing_value = Resource.list_of_services(search, zip)
    end
  end
end
