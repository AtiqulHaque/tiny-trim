# truncate-text.js
This is a tiny Truncate text framework or libary for crop the text.

#### Useges

Add the libary into the head 

Just create an object of 

var tt = TruncateText(10);
or 
var tt = $T(10);

then call tt.render('Porttitor sit penatibus hic illo penatibus penatibus.')

-----------------------------------------------
or you can change default variable 

var tt = TruncateText(20, '----', false);

First parameter define Truncate  length which start from 0 to length.
Second prameter define tail charcters which will add after trim the text.
Third parameter define adjust the length if true then it will crop the whole word

----------------------------------

It has also some chain functionality for on the fly change the settings
tt.changeLength(60).render(text);
tt.changeTail(',,,,,,').render(text);
 
