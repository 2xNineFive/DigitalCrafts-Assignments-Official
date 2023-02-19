


echo "Hello, $1. We are preparing your starter files for your new project called $2." 

mkdir $2 
cd $2
mkdir html css js
cd html && touch index.html
cd ../css && touch style.css
cd ../js && touch main.js

echo "Whats up, $1! Your dank files for $2 are ready to fire up!"

