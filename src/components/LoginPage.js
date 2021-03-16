import React, {useState} from 'react'

export default function LoginPage() {
    const [emailValue, setemailValue] = useState("coucou");
    const [passwordValue, setpasswordValue] = useState("coucou");
    
    const handleEmailChange = (e) => {
        setemailValue(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setpasswordValue(e.target.value)
    }
    const handleSubmit =  async (e) => {
        try{
            // console.log(emailValue);
            // console.log(passwordValue);
            const bodyValue = JSON.stringify({username: emailValue, password: passwordValue})
            // console.log(JSON.stringify(bodyValue));
            e.preventDefault();
            const token = await fetch(`http://localhost:8000/api/login_check`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: bodyValue,
            }).then(function(response){
                return response.json()
            });
            console.log(token)
            window.localStorage.setItem("authToken", token)
          }catch (err) {
            e.preventDefault();
            console.log(err);
          }
    }
    return (
        <div>
            <form>
                <label>Email
                    <input type="text" value={emailValue} onChange={handleEmailChange}/>
                </label>
                <label>Password
                    <input type="text" value={passwordValue} onChange={handlePasswordChange}/>
                </label>
                <input type="submit" value="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}
