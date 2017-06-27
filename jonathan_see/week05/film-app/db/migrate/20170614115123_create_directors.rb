class CreateDirectors < ActiveRecord::Migration[5.0]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :nationality
      t.string :dob

      t.timestamps
    end
  end
end
