class RoomsController < WebsocketRails::BaseController
  def create
    room = Room.find_or_create_by(name: message[:roomName])
    if room
      trigger_success room
    else
      trigger_error
    end
  end
end
