# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

password = 'qwerty123'
user1 = User.create(username: "Leonardo", password: BCrypt::Password.create(password))
user2 = User.create(username: "Bob", password: BCrypt::Password.create(password))

source1 = Source.create(source_name: "My Database", source_type: "mysql", source_connection_string: "mysql://user:password@localhost/my_database")
source2 = Source.create(source_name: "Another Database", source_type: "postgresql", source_connection_string: "postgresql://user:password@localhost/another_database")
source3 = Source.create(source_name: "And Another Database", source_type: "sqlite", source_connection_string: "sqlite://user:password@localhost/and_another_database")
source4 = Source.create(source_name: "Microsoft sql server", source_type: "microsoftsqlserver", source_connection_string: "microsoftsqlserver://user:password@localhost/microsoft_sql_server")

UserSource.create(user: user1, source: source1)
UserSource.create(user: user1, source: source2)
UserSource.create(user: user1, source: source3)
UserSource.create(user: user2, source: source4)

query1 = Query.create(source: source1, query_text: "SELECT * FROM users WHERE email = 'leolewan@gmail.com'", result_json: "'id': 1, 'surname':'Lewan', 'email': 'leolewan@gmail.com'")
query2 = Query.create(source: source1, query_text: "SELECT * FROM users WHERE name = 'Leonardo'", result_json: "'id': 1, 'surname':'Lewan', 'email': 'leolewan@gmail.com'")
query3 = Query.create(source: source1, query_text: "SELECT * FROM users WHERE id = 1", result_json: "'id': 1, 'surname':'Lewan', 'email': 'leolewan@gmail.com'")

