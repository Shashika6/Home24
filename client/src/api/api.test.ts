import api from './api';

global.fetch = jest.fn();

describe('api function', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should make a successful request', async () => {
    const mockResponse = { data: 'test' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const url = 'https://example.com/api';
    const response = await api(url);

    expect(global.fetch).toHaveBeenCalledWith(url, expect.anything());

    expect(response).toEqual(mockResponse);
  });

  it('should handle failed requests', async () => {
    const mockError = new Error('Failed to fetch');
    global.fetch = jest.fn().mockRejectedValue(mockError);

    const url = 'https://example.com/api';
    await expect(api(url)).rejects.toThrowError(mockError);

    expect(global.fetch).toHaveBeenCalledWith(url, expect.anything());
  });
});