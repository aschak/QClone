json.extract! question, :title, :body, :author_id, :id


json.author do
  json.username question.author.username
end
