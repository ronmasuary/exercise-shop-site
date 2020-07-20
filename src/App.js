import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import Title from './components/Title'
import './App.css';
import SignUp from './components/SignUp';
import Menu from './components/Menu'
import Login from './components/Login';
import Cart from './components/Cart';
import Edit from './components/Edit';

function App() {
  
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// מגדיר סטייט של מערך משתמשים. כל משתמש הוא אובייקט שמכיל: שם,סיסמא והאם מחובר
const [users,setUsers]=useState([{userName:'ron',password:'123', isLoggedIn:false}]);

// מגדיר סטייט של כותרת ברוכים הבאים, כל עוד אף משתמש לא מחובר הסטייט הוא- אורח
const [titleUser,setTitleUser]=useState('guest');

//מגדיר סטטיט של מערך מוצרים. כל מוצר הוא אובייקט שמכיל:שם, מחיר והאם למכירה
// בהתחלה כל המוצרים למכירה ומוצגים במסך הבית. כשמוצר הוא לא למכירה הוא מוצג בעגלה
const [products,setProducts]=useState([
{name:'computer ', price:100,forSale:false},
{name:'pen ',price:10,forSale:true},
{name:'motorbike ',price:5000,forSale:true},
{name:'TV ',price:250,forSale:true},
{name:'couch ',price:550,forSale:true},
{name:'camera ',price:700,forSale:true},
{name:'knife ',price:17,forSale:true},
{name:'hammer ',price:15,forSale:true},
{name:'flashlight ',price:85,forSale:true}]);



//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה להוספת משתמש למערך המשתמשים. הפונקציה הזו נשלחת לעמוד ההרשמה ומקבלת אובייקט משתמש ממנו
// כאשר יש ניסיון התחברות הפונקציה הזו בודקת בעזרת לולאה האם שם המשתמש שהוכנס קיים כבר במערך המשתמשים. 
// אם קיים- יוצא מהפונקיה ולא ממשיך
//אם לא קיים- מפזר את המערך כי ליצור מערך חדש ומוסיף את המשתמש החדש לסוף המערך
const addUser=(user)=>{
  for (let i=0;i<users.lengte;i++){
  if(users[i].userName===user.userName){
    return;
  }
}
setUsers([...users,user])
}

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//פונקציה אשר מקבלת משתמש מעמוד ההתחברות. והופכת את אותו משתמש ל-מחובר. 
// מוצאת את המשתמש שהתקבל במערך המקורי בעזרת המתודה למציאת אינדקס
//findIndex- יצרתי משתנה חדש שיכיל את האינדקס של המשתמש ששם המשתמש שלו שווה בדיוק לשם המשתמש של המשתמש שהתקבל
// השתמשתי במשתנה שמייצג את האינדקס המתאים כדי לשנות את המערך ככה שהמשתמש המתאים יהפוך ל-מחובר
// בגלל שעכשיו יש משתמש מחובר למערכת, עשיתי סט לשם שנמצא בברוכים הבאים ושיניתי אותו לשם המשתמש של המשתמש שעכשיו מחובר

const userInLogged=user=>{
  debugger;
  let usersIndex=users.findIndex(e=>e.userName===user.userName);
  users[usersIndex].isLoggedIn=user.isLoggedIn;
  setTitleUser(user.userName)
}
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה אשר נשלחת ל-אדיט. הפונקציה מקבלת מוצר חדש מהקומפוננטה ובעזרת סט מוסיפה אותו למערך המוצרים
const addProduct=pro=>{
  setProducts([...products,pro])
}

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------


  return (
    <div className="App">
      <Router>
        <Title />
<Menu users={users} userInLogged={userInLogged} setTitleUser={setTitleUser} titleUser={titleUser} />
        
<Switch>
<Route
exact path='/' component={()=>(<Home titleUser={titleUser}  products={products} users={users} />)}
/>

<Route exact path='/signup' component={()=>(<SignUp addUser={addUser}/>)}/>

<Route exact path='/login' component={()=>(<Login  titleUser={titleUser} setTitleUser={setTitleUser}  users={users} userInLogged={userInLogged}/>)}/>

<Route exact path='/cart' component={()=>(<Cart products={products}/>)}/>

<Route exact path='/edit' component={()=>(<Edit addProduct={addProduct}/>)}/>


</Switch>
      </Router>
    </div>
  );
}


export default App;
