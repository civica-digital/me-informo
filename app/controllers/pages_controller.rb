class PagesController < ApplicationController
  def index
    @page_classes = "index"
  end
  def informationgranted
    @page_classes = "informationgranted informationgranted_index"
  end
  def demand
  end
end
