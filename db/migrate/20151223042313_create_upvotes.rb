class CreateUpvotes < ActiveRecord::Migration
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.boolean :voted, default: false

      t.timestamps null: false
    end

    add_index :upvotes, [:user_id, :question_id], unique: true  
  end
end
