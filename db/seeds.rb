# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({name: "Rails Tutorial",email: "example@railstutorial.org",password:"foobar",password_confirmation:"foobar" })
1.upto 10 do |i|

  Project.create({user_id: 1, title: "Project #{i}", body:"hellow Project#{i}"})

  1.upto 10 do |item|
    Task.create({project_id: "#{i}", title: "task #{item} ", body:'Hello word Api Roop', is_completed: false})
  end

end
