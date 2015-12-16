json.extract! question, :title, :body, :id, :author_id


json.author do
  json.username question.author.username
end
