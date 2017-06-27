# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Film.destroy_all
f1 = Film.create title: "Bridesmaids", country: "United States", running_time: "125"
f2 = Film.create title: "Spy", country: "United States", running_time: "120"
f3 = Film.create title: "The Martian", country: "United States", running_time: "141"
f4 = Film.create title: "Gladiator", country: "United Kingdom", running_time: "155"
f5 = Film.create title: "Les Miserables", country: "United Kingdom", running_time: "158"
f6 = Film.create title: "The King's Speech", country: "United Kingdom", running_time: "119"

puts "Created #{ Film.all.length } films."

Director.destroy_all
d1 = Director.create name: "Paul Feig", nationality: "American", dob: "1962/09/17"
d2 = Director.create name: "Ridley Scott", nationality: "British", dob: "1937/11/30"
d3 = Director.create name: "Tom Hooper", nationality: "British", dob: "1972/10/05"

puts "Created #{ Director.all.length } directors"

Actor.destroy_all
a1 = Actor.create name:"Kristen Wiig", nationality:"American", dob:"1973/08/22"
a2 = Actor.create name:"Melissa McCarthy", nationality:"American", dob:"1970/08/26"
a3 = Actor.create name:"Rose Byrne", nationality:"Australian", dob:"1979/07/24"
a4 = Actor.create name:"Matt Damon", nationality:"American", dob:"1970/10/08"
a5 = Actor.create name:"Russell Crowe", nationality:"Kiwi", dob:"1964/04/07"
a6 = Actor.create name:"Joaquin Phoenix", nationality:"American", dob:"1974/10/28"
a7 = Actor.create name:"Anne Hathaway", nationality:"American", dob:"1982/11/12"
a8 = Actor.create name:"Colin Firth", nationality:"British", dob:"1960/09/10"

puts "Created #{ Actor.all.length } actors"

Genre.destroy_all
g1 = Genre.create genre:"Comedy"
g2 = Genre.create genre:"Romance"
g3 = Genre.create genre:"Action"
g4 = Genre.create genre:"Sci-Fi"
g5 = Genre.create genre:"Drama"
g6 = Genre.create genre:"Musical"
g7 = Genre.create genre:"Historical"

puts "Created #{ Genre.all.length } genres"

d1.films << f1 << f2
d2.films << f3 << f4
d3.films << f5 << f6

puts "Director '#{ d1.name }' has #{d1.films.length } films."

a1.films << f1 << f2
a2.films << f1 << f2
a3.films << f1
a4.films << f3
a5.films << f4 << f5
a6.films << f4
a7.films << f5
a8.films << f6

puts "'#{ a1.name }' has #{a1.films.length } films."

f1.genres << g1 << g2
f2.genres << g1 << g3
f3.genres << g4
f4.genres << g5 << g7
f5.genres << g5 << g6
f6.genres << g5 << g7

puts "'#{ g1.name }' genre has #{f1.films.length } films."
