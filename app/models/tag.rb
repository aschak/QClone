class Tag < ActiveRecord::Base
  validates :tag_name, presence: true, uniqueness: true

  has_many :taggings,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tagging"

  has_many :questions,
    through: :taggings,
    source: :question

  has_many :profile_tags,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "ProfileTag"

  has_many :users,
    through: :profile_tags,
    source: :user
end
