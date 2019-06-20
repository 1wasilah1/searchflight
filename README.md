# Searchflight
SearchFlight app using javascript/node.js can help you to find a flight make easily
# Version
1.0.0
# dependencies
    "colors": "^1.3.3",
    "commander": "^2.20.0",
    "inquirer": "^5.2.0",
    "pad": "^2.0.3",
    "sort-json-array": "^0.1.7"
# author
Wasil
# license
ISC
# bin
./bin/index.js
# preferGlobal
true
# Installation
npm install
npm link
# Running
searchflight from <parameter> to <parameter> by price/travel_time
# sample
# one-trip

# default
searchflight from CGK to SIN by price
# transit
searchflight from PDG to SIN by price
# output
[{"from":"PDG","to":"SIN","price":1200000,"travel_time":"1h16m40s","routes":[{"flight_no":"T115","from":"PDG","to":"CGK","price":"900000","travel_time":"2200"},
{"flight_no":"T113","from":"CGK","to":"SIN","price":"300000","travel_time":"2400"}]},{"from":"PDG","to":"SIN","price":1700000,"travel_time":"1h40m","routes":[{"
flight_no":"T116","from":"PDG","to":"DPS","price":"1200000","travel_time":"1800"},{"flight_no":"T111","from":"DPS","to":"SIN","price":"500000","travel_time":"42
00"}]}]

you can use multi trip
# multi-trip
searchflight from CGK to SIN by price && searchflight from PDG to SIN by price && searchflight from DPS to SIN by travel_time
