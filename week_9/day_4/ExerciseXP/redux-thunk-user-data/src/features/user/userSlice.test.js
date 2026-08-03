import { describe, it, expect, vi, beforeEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUser } from './userSlice';

describe('userSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { user: userReducer } });
    global.fetch = vi.fn();
  });

  it('sets loading state while the request is in flight, then stores data on success', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1, name: 'Leanne Graham', email: 'leanne@example.com' }),
    });

    const dispatchPromise = store.dispatch(fetchUser(1));

    await dispatchPromise;

    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.data.name).toBe('Leanne Graham');
  });

  it('stores an error message when the request fails', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await store.dispatch(fetchUser(9999));

    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.error).toMatch(/404/);
    expect(state.data).toEqual({});
  });

  it('stores an error message on network failure', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network Error'));

    await store.dispatch(fetchUser(1));

    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Network Error');
  });
});
