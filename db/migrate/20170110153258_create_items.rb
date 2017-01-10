class CreateItems < ActiveRecord::Migration
  def change
    create_table :item do |t|
      t.datetime :date
      t.integer :caseid
      t.integer :zip
      t.string :housing
      t.boolean :dv
      t.string :employment
      t.boolean :insurance
      t.boolean :snap
      t.boolean :child

      t.timestamps null: false
    end
  end
end
