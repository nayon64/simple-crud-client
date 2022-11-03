import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
	const storedUser = useLoaderData()
	const [user, setUser] = useState(storedUser)
	console.log(storedUser)
	
	const handleUpdate = (event) => {
		event.preventDefault()
		fetch(`http://localhost:5000/users/${storedUser._id}`, {
			method: "PUT",
			headers: {
				'content-type': 'application/json',
			},
			body:JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				alert('update')
		})
		console.log(user)
	}
	const handleChangeData = (event) => {
		const field = event.target.name
		const value = event.target.value
		const updateuser = { ...user }
		updateuser[field] = value
		setUser(updateuser)
	}
	return (
		<div>
			<h1>This is update page</h1>
			<form onSubmit={handleUpdate}>
				<input onChange={handleChangeData} type="text" name="name" defaultValue={user.name} placeholder='Enter your name'/>
				<br />
				<input onChange={handleChangeData} type="text" name='address' defaultValue={user.address} placeholder='Enter your address' />
				<br />
				<input onChange={handleChangeData} type="email" name='email' defaultValue={user.email} placeholder='Enter your email' />
				<br />
				<button>Update</button>
			</form>
		
		</div>
	);
};

export default Update;