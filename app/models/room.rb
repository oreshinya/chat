class Room < ActiveRecord::Base
  has_many :posts

  def channel
    WebsocketRails[name]
  end

  def broadcast_post post
    channel.trigger :new_post, post
  end

  def subscribers_count
    channel.subscribers.size
  end
end
