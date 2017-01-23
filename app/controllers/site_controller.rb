class SiteController < ApplicationController
    skip_before_action :require_authentication!, :except => :root
  def index
    # @items = Item.all
    @items = Item.where("caseid =?", params[:caseid])
  end

  def mainpage
  end

  def from
  end

  def allitems
  end


  def search
      @item = Item.find(params[:id])
  end
  def edit
  end

  def delete
  end

end
