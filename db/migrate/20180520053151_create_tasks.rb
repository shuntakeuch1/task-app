class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.string :title
      t.string :body
      t.boolean :is_completed
      t.timestamps
    end
  end
end
