class CreateSources < ActiveRecord::Migration[7.0]
  def change
    create_table :sources do |t|
      t.string :source_name
      t.string :source_type
      t.string :source_connection_string

      t.timestamps
    end
  end
end
