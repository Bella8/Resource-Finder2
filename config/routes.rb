Rails.application.routes.draw do
  root to: 'site#index'
  stormpath_rails_routes

  get '/form' => 'site#form'
  get '/:id' =>'site#search', as: "search"

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end

end
