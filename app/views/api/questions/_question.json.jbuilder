json.extract! question, :title, :body, :id, :author_id, :created_at


json.author do
  json.username question.author.username
end
