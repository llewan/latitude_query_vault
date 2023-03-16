class CreateQueries < ActiveRecord::Migration[7.0]
  def change
    create_table :queries do |t|
      t.references :source, null: false, foreign_key: true
      t.text :query_text
      t.text :result_json

      t.timestamps
    end
  end
end
