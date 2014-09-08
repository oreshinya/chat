class RoomsController < WebsocketRails::BaseController
  def create
    room = Room.find_or_create_by(name: message[:room_name])
    if room && !room.reached_subscriber_limit?
      trigger_success room.posts
    else
      error_status = 0
      if room.reached_subscriber_limit?
        error_status = 1
      end
      trigger_failure({statusCode: error_status})
    end
  end

  def create_post
    room = Room.where(name: message[:room_name]).first
    post = room.posts.create(body: message[:tmp_post])
    if post
      trigger_success
      room.broadcast_post post
    else
      trigger_failure
    end
  end

  def status
    room = Room.where(name: message[:room_name]).first
    trigger_success({
      subscribersCount: room.subscribers_count
    })
  end
end
