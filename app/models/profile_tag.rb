class ProfileTag < ActiveRecord::Base

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tag"
end
