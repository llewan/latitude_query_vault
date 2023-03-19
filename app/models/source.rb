class Source < ApplicationRecord
  def forward_query(query)
    sleep(3)

    mock = [
      {
        "name" => "#{self.id} Apple",
        "image" => "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      },
      {
        "name" => "#{self.source_name} Banana",
        "image" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      },
      {
        "name" => "#{self.source_connection_string} Pineapple",
        "image" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      }
    ]

    return JSON.generate(mock)
  end
end
