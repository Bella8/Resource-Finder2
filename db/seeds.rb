# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Item.create!([
  {
  date: DateTime.new(2017,1,9,8),
  caseid:1234,
  zip: 60640,
  housing: "Homeless/Live in a shelter",
  dv: true,
  employment: "Underemployed",
  insurance: true,
  snap: false,
  child: true
},
{
date: DateTime.new(2017,2,9,8),
caseid:1334,
zip: 60640,
housing: "Homeless/Live in a shelter",
dv: true,
employment: "Underemployed",
insurance: true,
snap: false,
child: true
},
  ])
