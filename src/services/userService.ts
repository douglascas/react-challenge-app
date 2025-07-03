export const fetchUsers = async () => {
	const path = 'https://jsonplaceholder.typicode.com/users';
	const response = await fetch(path);
	
	if (!response.ok) throw new Error('Failed to fetch users');
	return response.json();
};