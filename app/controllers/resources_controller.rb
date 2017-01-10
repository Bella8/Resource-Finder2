class ResourcesController < ApplicationController

  def index
      @data = Resource.list_of_services
  end

end
