class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body
      t.integer :author_id, null:false

      t.timestamps null: false
    end

    add_index :questions, :author_id
    add_index :questions, :title, unique: true
  end
end
