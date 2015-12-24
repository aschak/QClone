# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :answers,
    primary_key: :id,
    foreign_key: :question_id,
    dependent: :destroy,
    class_name: "Answer"

  has_many :taggings,
    primary_key: :id,
    foreign_key: :question_id,
    dependent: :destroy,
    class_name: "Tagging"

  has_many :comments,
    through: :answers,
    source: :comments

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :upvotes,
    primary_key: :id,
    foreign_key: :question_id,
    dependent: :destroy,
    class_name: "Upvote"

  accepts_nested_attributes_for :taggings

end
