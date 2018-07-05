class InitialSchema < ActiveRecord::Migration[5.1]

  def change
    enable_extension "uuid-ossp"

    create_table :contents, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :content_type, null: false
      t.string :identifier, null: false
      t.json :content

      t.timestamps
    end

    create_table :posts, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string "title"
      t.string "post_type"
      t.string "url"
      t.text "body"
      t.string "image"

      t.timestamps
    end
  end
end
