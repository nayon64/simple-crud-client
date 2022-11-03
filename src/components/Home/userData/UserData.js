import React, { useState } from 'react';

const UserData = () => {

	const [user,setUser]=useState({})

	const handleSubmit = event => {
		event.preventDefault()
		console.log(user)
		
		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				'content-type': 'application/json',
			},
			body:JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.acknowledged) {
					alert("succesfuly Data update")
					event.target.reset()
				}
			})
	}


	const handleValue = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newUser = { ...user }
		newUser[field] = value
		setUser(newUser)
	}


	return (
		<div>
			<h1>This is user</h1>
			<form onSubmit={handleSubmit}>
				<input onBlur={ handleValue} type="text" name='name' placeholder='Enter your name' required />
				<br />
				<input onBlur={ handleValue} type="text" name='address' placeholder='Enter your address' required />
				<br />
				<input onBlur={ handleValue} type="email" name="email" placeholder='Enter your Email' required />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default UserData;