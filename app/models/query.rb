class Query < ApplicationRecord
  belongs_to :source

  def self.run_query(source, query_text)
    cached_query = self.find_by(source: source.id, query_text: query_text)

    if cached_query
      return cached_query.result_json
    else
      # If not cached, run the query and cache the result
      result = source.forward_query(query_text)
      self.create(query_text: query_text, result_json: result, source: source)
      return result
    end
  end

end
