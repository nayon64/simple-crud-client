import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
	const users = useLoaderData()
	const [displayUser,setDisplayUser]=useState(users)
	const handleDelete = (user) => {
		console.log(user)
		const agree=window.confirm(`Are you confirmd delect : ${user.name}`)
		if (agree) {
			// console.log(user._id)
			fetch(`http://localhost:5000/users/${user._id}`, {
				method: "DELETE",
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					const remainingUser = displayUser.filter(use => use._id !== user._id)
					setDisplayUser(remainingUser)
					if (data.deletedCount) {
						alert('successful delete')
					}
				})
		}
	}
	return (
		<div>
			<h1>this is home:{displayUser.length}</h1>
			{
				displayUser.map(user => <p key={user._id}>{user.name} {user.email}
					<Link to={`/update/${user._id}`}><button>Update</button></Link>
					<button onClick={() => handleDelete(user)}>X</button></p>)
			}
		</div>
	);
};

export default Home;