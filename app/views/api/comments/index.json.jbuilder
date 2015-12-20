json.array! @comments do |comment|
  json.partial! answer, partial: './answer'
end
