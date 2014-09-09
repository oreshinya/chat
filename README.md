#Setup
```
bundle install --path vendor/bundle
bundle exec rake db:create
bundle exec rake db:migrate

npm install
```

#Server
* start rails server
* start gulp watch
```
bundle exec invoker start invoker.ini
```
