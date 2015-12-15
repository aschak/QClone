json.array! @questions do |question|
  json.partial! question, partial: './question'
end
