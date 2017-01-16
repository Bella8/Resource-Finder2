class SiteController < ApplicationController
  def index
    @items = Item.all
  end

  def mainpage
  end

  def from
  end

  def allitems
  end

  def search
    @client_info = Item.search(params[:query])
    if request.xhr?
      render :json => @client_info.to_json
    else
      render :index
    end
  end

  def edit
  end

  def delete
  end

end
