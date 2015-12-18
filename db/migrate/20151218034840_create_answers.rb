class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end

    add_index :answers, :author_id
    add_index :answers, :question_id
  end
end
