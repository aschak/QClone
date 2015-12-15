json.extract! question, :title, :body, :author_id


json.author do
  json.username question.author.username
end
