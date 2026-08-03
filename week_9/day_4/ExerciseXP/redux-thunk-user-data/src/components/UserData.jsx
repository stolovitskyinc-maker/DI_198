import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';

function UserData() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  const handleRefetch = () => dispatch(fetchUser(userId));
  // jsonplaceholder only has users 1-10, so any id above that 404s,
  // which is a handy way to demo the error path.
  const handleSimulateError = () => dispatch(fetchUser(9999));

  return (
    <div style={styles.card}>
      <h2>User Data (Redux Thunk Demo)</h2>

      <div style={styles.controls}>
        <label>
          User ID:{' '}
          <input
            type="number"
            min="1"
            max="10"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            style={styles.input}
          />
        </label>
        <button onClick={handleRefetch} style={styles.button}>
          Fetch
        </button>
        <button onClick={handleSimulateError} style={styles.button}>
          Simulate Error
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}

      {!loading && !error && data && data.name && (
        <div style={styles.details}>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Website:</strong> {data.website}</p>
          <p><strong>Company:</strong> {data.company?.name}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    fontFamily: 'system-ui, sans-serif',
    maxWidth: 480,
    margin: '2rem auto',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: 8,
  },
  controls: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  input: {
    width: 60,
  },
  button: {
    cursor: 'pointer',
  },
  error: {
    color: '#c0392b',
  },
  details: {
    lineHeight: 1.6,
  },
};

export default UserData;
