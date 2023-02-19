# HTML 106
## Both Javascript and CSS can be included in an HTML document if they are formatted with the proper tags.


**Javascript**
```html
    <script type="text/javascript">
        console.log('Hello from inside the HTML document!');
    </script>
```

**CSS**
```html
  <style>
        h1 {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        p {
            font-size: 1.35rem;
        }
    </style>
```

### There are good use cases for inserting styles and scripts indside of an HTML document. One use case for this technique is if you need to dynamically add code to your website in order for it to do something you like. For exxample, the Live Server add-on in my VS Code Editor inserts some JS so that the website refreshes everytime I save my document. I am unsure how it is doing it, but that code is written in the HTML document. 