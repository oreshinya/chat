class AddIndexToPosts < ActiveRecord::Migration
  def change
    add_index :posts, :room_id
  end
end
