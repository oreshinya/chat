class RoomsController < WebsocketRails::BaseController
  def create
    room = Room.find_or_create_by(name: message[:room_name])
    if room
      trigger_success room.posts
    else
      trigger_error
    end
  end

  def create_post
    room = Room.where(name: message[:room_name]).first
    post = room.posts.create(body: message[:tmp_post])
    if post
      trigger_success
      room.broadcast_post post
    else
      trigger_error
    end
  end

  def status
    room = Room.where(name: message[:room_name]).first
    trigger_success({
      subscribersCount: room.subscribers_count
    })
  end
end
