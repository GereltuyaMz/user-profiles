const UserCard = ({ userImg, firstName, jobTitle, userId, deleteUser }) => {
	return (
		<div className="flex space-between gap-3 py-4 px-3 border rounded-lg items-center">
			<img className="w-10 h-10 rounded-full" src={userImg} alt="" />
			<div>
				<h3>{firstName}</h3>
				<p className="text-xs">{jobTitle}</p>
			</div>
			<button
				className="border border-solid text-xs px-1 h-6 rounded bg-red-400"
				onClick={() => deleteUser(userId)}
			>
				Delete
			</button>
		</div>
	);
};

export default UserCard;
