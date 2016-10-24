var express = require('express');
var app = express();
app.get('/',function(req,res){
res.sendFile(__dirname+'/'+'index.html');
});
function Mon(month){
 if(month==='January') return 1;
 if(month==='February') return  2;
 if(month==='March') return 3;
 if(month==='April') return 4;
 if(month==='May') return 5;
 if(month==='June') return  6;
 if(month==='July') return  7;
 if(month==='August') return  8;
 if(month==='September') return  9;
 if(month==='October') return  10;
 if(month==='November') return 11;
 if(month==='December') return  12;
  }
app.get('/:month%20:day,%20:year', function(req,res){
  var month = req.params.month;
  var day = req.params.day;
  var year= req.params.year;
  var n = Mon(month);
  var date = new Date(Date.UTC(parseInt(year),parseInt(n)-1,parseInt(day)));
  var unixtimes = date.toJSON();
  var unixtime = new Date(unixtimes).getTime()/1000;
  var re={
    unix: unixtime,
    natural : month+' '+day+','+year
  };

  res.end(JSON.stringify(re));

});
function Mon1(month){
 if(month===1) return 'January';
 if(month===2) return  'February';
 if(month===3) return 'March';
 if(month===4) return 'April';
 if(month===5) return 'May';
 if(month===6) return  'June';
 if(month===7) return  'July';
 if(month===8) return  'August';
 if(month===9) return  'September';
 if(month===10) return  'October';
 if(month===11) return 'November';
 if(month===12) return  'December';
  }
app.get('/:unixt',function(req,res){
 var unixt = req.params.unixt;
 var n = parseInt(unixt)*1000;
 var dateTime= new Date(n);
 var a = dateTime.toString();
 var date2 = new Date(a);
 var month1 = date2.getMonth()+1;
 var day1 = date2.getDate();
 var year1 = date2.getFullYear();
var month2 = Mon1(month1);
var re1 = {
 unix : unixt,
 natural : month2+' '+day1+','+year1
}
res.end(JSON.stringify(re1));
});
app.listen(process.env.PORT);
