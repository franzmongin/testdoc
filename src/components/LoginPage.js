import React, {useState} from 'react'

export default function LoginPage() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCredentials({ ...credentials, [name]: value });
    }
    const handleSubmit =  async (e) => {
        try{
            e.preventDefault();
            const response = await fetch(`http://localhost:8000/api/login_check`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                "username": String({}),
                "password": String({})
              }),
            });
            console.log(await response.json())
            return await response.json();
          }catch (err) {
            e.preventDefault();
            console.log(err);
          }
    }
    return (
        <div>
            <form>
                <label>Email
                    <input type="text" value={credentials.username} onChange={handleChange}/>
                </label>
                <label>Password
                    <input type="text" value={credentials.password} onChange={handleChange}/>
                </label>
                <input type="submit" value="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}
