class Post < ActiveRecord::Base

  LATEST_RECORD_COUNT = 50

  scope :latest, -> {
    order("id DESC").limit(LATEST_RECORD_COUNT)
  }

end
