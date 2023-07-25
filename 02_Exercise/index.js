const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.get('/', (req, res) => 
{
  
  
    // res.render("index.ejs",{
    //   dayType:"Weekend" ,
    //   advice : "Enjoy your day" ,
    // }) ;

    // time to add data dynamically 
    // first let take data about the date 

  const today = new Date();
  const day = today.getDay(today);

  // console.log(day); -> it will give me a output like 1,2,3,4,5,6,7 , each number means a day 1 -> monday

  let type = "Weekday";
  let ad = "Work your ass off";

  if (day == 0 || day == 6) 
  {
    type = "Weekend";
    ad = "Enjoy your day";
  }

  res.render("index.ejs",
  {
    dayType: type ,
    advice : ad ,
  
  }) ;

    
});

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})