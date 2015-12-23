class Upvote < ActiveRecord::Base
  validates :user_id, :question_id, presence: true
  validates :user_id, scope: [:question_id]

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: "Question"

end
