json.array! @comments do |comment|
  json.partial! comment, partial: './comment'
end
