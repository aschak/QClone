class Tagging < ActiveRecord::Base

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: "Question"

  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tag"

end
