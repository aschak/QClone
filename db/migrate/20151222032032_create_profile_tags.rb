class CreateProfileTags < ActiveRecord::Migration
  def change
    create_table :profile_tags do |t|
      t.integer :tag_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :profile_tags, :tag_id
    add_index :profile_tags, :user_id
  end
end
