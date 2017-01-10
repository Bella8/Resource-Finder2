class Resource

  attr_accessor :agency, :division, :program_model, :site_name, :phone_number, :address, :city, :state, :zip

  def initialize(resource_info)
    self.agency = resource_info[:agency]
    self.division = resource_info[:division]
    self.program_model = resource_info[:program_model]
    self.site_name = resource_info[:site_name]
    self.phone_number = resource_info[:phone_number] ||= nil
    self.address = resource_info[:address] ||= nil
    self.city = resource_info[:city] ||= nil
    self.state = resource_info[:state] ||= nil
    self.zip = resource_info[:zip] ||= nil
  end

  def self.list_of_services
    @resources_data = ChiApiWrapper.list_of_services
    return @resources_data
  end
end
