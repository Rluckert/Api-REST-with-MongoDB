process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if(process.env.NODE_ENV === 'dev'){
  process.env.URL_DB = 'mongodb://127.0.0.1:27017/mongo-prueba'
}else{
  process.env.URL_DB = 'mongodb+srv://rluckert:rluckert2018*@cluster0-hmkr2.mongodb.net/mongo-prueba?retryWrites=true'
}