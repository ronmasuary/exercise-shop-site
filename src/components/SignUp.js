import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp({ addUser }) {

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// יצרתי סטייט של אובייקט משתנה חדש. בהתחלה כל השדות ריקים ו-האם מחובר=שקר
    const [user, setUser] = useState({
        userName: '',
        password: '',
        isLoggedIn:false
    })

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//פונקציה אשם מקבלת אלמנט מהאינפוט כשמתבצע שינוי. יצרתי משתנה מקומי כדי להכיל את הערך הנוכחי שהוכנס לאינפוט
// כדי לא לחכות לרינדור שיתבצע רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עדכנתי את הסטייט של אובייקט המשתמש החדש כאשר השם הוא המשתנה המקומי ושאר השדות הם כפי שהיו
    const changeName = (e) => {
        let name = e.target.value
        setUser({
            userName: name,
            password: user.password,
            isLoggedIn:user.isLoggedIn
        })
    }
    
//פונקציה אשם מקבלת אלמנט מהאינפוט כשמתבצע שינוי. יצרתי משתנה מקומי כדי להכיל את הערך הנוכחי שהוכנס לאינפוט
// כדי לא לחכות לרינדור שיתבצע רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עדכנתי את הסטייט של אובייקט המשתמש החדש כאשר הסיסמא היא המשתנה המקומי ושאר השדות הם כפי שהיו
    const changePass = (e) => {
        let pass = e.target.value;
        setUser({
            userName: user.userName,
            password: pass,
            isLoggedIn:user.isLoggedIn
        })
    }

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונצקיה אשר מקבלת איבנט שיהיה לו שימוש בהמשך. הפונקציה תרוץ כאשר יש אירוע לחיצה על הלינק
// בודקת האם השם שהוכנס הוא לא מחרוזת ריקה. אם הוא כן אז בעזרת איבנט חוסמת את המעבר לעמוד הבית ומציגה שגיאה.
// אם הוא לא- קוראת לפונצקיה שמוסיפה משתמש חדש מ-אפ ושולחת אלייה את אובייקט המשתנה החדש 
    const add = ( event) => {
        debugger;
        if (user.userName===''){
            event.preventDefault();
            alert('Error') 
            return
        }
        addUser(user)     
    }
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------


    return (
        <div>
            <h3>sign up</h3>
            <form>
                <label>choose a user name:</label><br />
                <input value={user.userName} onChange={e => changeName(e)} type="text"></input>

                <br />

                <label>choose a password:</label><br />
                <input value={user.password} onChange={e => changePass(e)} type="password"></input>
                <br />

               <Link to='/' onClick={add}><button >sign up</button></Link> 



            </form>

        </div>
    )
}
