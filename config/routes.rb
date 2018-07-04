Rails.application.routes.draw do
  root to: 'root#index'

  namespace :api do
    resources :content, param: :identifier
    patch 'refresh_campaign_id' => 'content#refreshCampaignId'
    
    get 'posts/:post_type' => 'posts#index'
    get 'posts/:post_type/:url' => 'posts#show'
    post 'posts' => 'posts#create'
    patch 'posts/:id' => 'posts#update'
    delete 'posts/:post_type/:url' => 'posts#destroy'
  end

  get '*path', to: 'root#index', :constraints => lambda{|req| req.path !~ /\.(css|min.css|min.js)$/ }
end
