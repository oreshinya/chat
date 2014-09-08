class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.references :room
      t.text :body

      t.timestamps
    end
  end
end
