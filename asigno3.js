// Chapter no.9
// 1 Faviort Pakistani dish
let fdish = prompt("What is your favorite Pakistani dish");
if(fdish == "Chicken"){
   {
    alert("You'll enjoy it! your order is ready")
  }
}
else if(fdish == "Dumpukh"){
  {
   alert("You'll enjoy it! your order is ready")
 }
}
else if(fdish == "Tekka booti"){
  {
   alert("You'll enjoy it! your order is ready")
 }
}
else{
    alert("This not Pakistani Food.")
}

// 2 User name and City
let user = prompt("What is your name?")
let city = prompt("What is your city name?")

alert("Assalamu alaikum! Aapka sheher kaisa hai? Hello! How's your city?")

//Chapter no.10
// 1 For asking bike  If Statement
let bike = prompt("You have a bike?")

if(bike == "Yes"){
  alert("Aapki bike kitni purani hai? Kya aap usse rozana chalaate hain?")
}
else if(bike == "No"){
  alert("You are a childern?")
}
else{
  alert("Why you have not a bike?")
}

//2 For Eid Day
let eid = prompt("Aaj kiaa ha?")

if(eid == "Eid ha"){
  alert("Eid Mubarak! Aapke ghar mein kya khana ban raha hai? Happy Eid! What's cooking at your place?")
}
else if(eid == "Jumma ha"){
  alert("Jumma Mubark ho")
}
else{
  alert("2 din bakeey ha eid ko")
}
//chapter no.11
// && opreater
let age = prompt("Enter your age");
let matrial = prompt("Are you married?");
if(age == 25 && matrial == "Yes"){
  alert("Aap shadi-shuda hain aur 25 saal ke ho chuke hain!")
}
else{
  alert("Aap abe tak lawnad ho!")
}
//OR opreator
let ciyt = prompt("What is your favoriate city?")

if(ciyt == "Peshawar" || ciyt == "Lahore" || ciyt == "Islamabad" || ciyt == "Karachi"){
  alert("Wow ya aapka pasandeeda sheher ha")
}
else{
  alert("Why you have not favorite a city?")
}
// NOT 
prompt("You have a driving licence?")
let licence = true;

if(!licence == "Yes"){
  alert("You are now driving");
}
else{
  alert("You are not eligible for driving");
}
// chapter no.12 
// If-else and Else-If

let coun = prompt("Which is your favorite city?")

if(coun == "Peshawar"){
  if(coun == "Islamabad"){
    if(coun == "Karachi"){
      alert("Aapke sheher ki khubsurati toh alag hi hai!")
    }
    else{
      alert("Aapke sheher ki khubsurati toh alag hi hai!")
    }
  }
  else{
    alert("Aapke sheher ki khubsurati toh alag hi hai!")
  }
}
else{
  alert("Aap kaha ka ho bahi?")
}

// If-else and Else-If
let sibling = prompt("Aapka ketna behen bahi ha brother?")

if(sibling == 5){
  if(sibling <5 && sibling ==3){
    if(sibling <3){
      alert("This is small family")
    }
    else{
      alert("This is medium family")
    }
   
  }
  else{
    alert("This is a big family")
    }
}
else{
  alert("Yaar aapky gaher my kese na murghee andoo pa betyeee ha kia! Just for fun")
  }

  // Chapter no.13
  // Testing set of conditions
let music = prompt("Which country of music you like?")

if(music == "Pakistani"){
      if(music == "Indian"){
        alert("Aapke music ka taste toh international hai")
        }
   else{
    alert("Aapke music ka taste toh international hai")
       }
}

// How many languages

let language = prompt("How many languages you can speek?")

if(language == "Urdu"){
  if(language == "English"){
    if(language == "Arabic"){
      alert("You know many languages!")
    }
    else{
      alert("You know many languages!")
    }
  }
  else{
    alert("You know many languages!")
  }
}
else{
  alert("Tum ko koye language nahi athee")
}
// Chapter no.4 
//  Student Eligibility

let agee = prompt("How many year's older?")
let grade = prompt("What is your grade?")
let gpa = prompt("What is your GPA?")

if(agee == 17 || agee > 17){
  if(grade == 11 || grade > 11){
    if(gpa == 3.5 || gpa > 3.5){
      alert("Aap scholarship ke liye eligible hain!")
    }
    else{
      alert("Aap scholarship ke liye eligible hain!")
    }
  }
  else{
    alert("Aap scholarship ke liye eligible hain!")
  }
}
else{
  alert("You are not eligible for scholarship!")
}
// Sale maintenence

let price = prompt("Enter your prouduct prices?")
let mstatus = prompt("Enter your Membership status!")
if(price == 1000 || price > 1000){
  if(mstatus == "Gold" || mstatus == "Platinum"){
    alert("Aapko discount mil raha hai!")
  }
  else{
    alert("Aapko discount mil raha hai!")
  }
}
else{
  alert("Aapko discount nahi mil rahee ha please aap puray pasay jamma karlo!")
}