WebsocketRails::EventMap.describe do
  namespace :rooms do
    subscribe :create, to: RoomsController, with_method: :create
  end
end
