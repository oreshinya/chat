class Room < ActiveRecord::Base

  SUBSCRIBER_LIMIT_PER_CHANNEL = 10

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

  def reached_subscriber_limit?
    subscribers_count >= SUBSCRIBER_LIMIT_PER_CHANNEL
  end

  def latest_posts
    posts.latest
  end

end
