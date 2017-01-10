class ChangTableNameItem < ActiveRecord::Migration
  def change
     rename_table :item, :items
  end
end
