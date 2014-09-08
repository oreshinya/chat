WebsocketRails::EventMap.describe do
  namespace :rooms do
    subscribe :create, to: RoomsController, with_method: :create
    subscribe :create_post, to: RoomsController, with_method: :create_post
  end
end
