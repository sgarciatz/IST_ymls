#! /bin/bash
echo "The script of the Users API is been executed!"
cd ./API_users
npm install
node index.js
cd ../
echo "The script of the Users API has finished! (STATUS CODE = " $? ")" 
