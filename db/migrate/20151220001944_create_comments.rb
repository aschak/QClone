class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :answer_id, null: false 

      t.timestamps null: false
    end

    add_index :comments, :author_id
    add_index :comments, :answer_id
  end
end
