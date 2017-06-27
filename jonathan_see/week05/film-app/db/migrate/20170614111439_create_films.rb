class CreateFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :films do |t|
      t.string :title
      t.string :country
      t.string :running_time

      t.timestamps
    end
  end
end
