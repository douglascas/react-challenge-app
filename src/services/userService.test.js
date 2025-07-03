import { fetchUsers } from './userService';

describe('fetchUsers', () => {
  const mockUsers = [{ id: 1, name: 'John Doe' }];

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should fetch users and return data', async () => {
    (global.fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    const users = await fetchUsers();
    expect(users).toEqual(mockUsers);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('should throw an error if response is not ok', async () => {
    (global.fetch).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchUsers()).rejects.toThrow('Failed to fetch users');
  });
});