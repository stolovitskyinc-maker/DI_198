const { dbQuery, dbGet, dbAll } = require('../config/db');

class UserModel {
  // Use transactional logic to safely write to both tables during registration
  static async registerUserTransaction({ username, email, first_name, last_name, hashedPassword }) {
    try {
      await dbQuery('BEGIN TRANSACTION');

      // 1. Insert into users table
      const userResult = await dbQuery(
        `INSERT INTO users (username, email, first_name, last_name) VALUES (?, ?, ?, ?)`,
        [username, email, first_name, last_name]
      );

      // 2. Insert into hashpwd table
      await dbQuery(
        `INSERT INTO hashpwd (username, password) VALUES (?, ?)`,
        [username, hashedPassword]
  );

      await dbQuery('COMMIT');
      return { id: userResult.lastID, username, email };
    } catch (error) {
      await dbQuery('ROLLBACK');
      throw error;
    }
  }

  static async findByUsername(username) {
    return await dbGet('SELECT * FROM users WHERE username = ?', [username]);
  }

  static async getPasswordByUsername(username) {
    return await dbGet('SELECT password FROM hashpwd WHERE username = ?', [username]);
  }

  static async findAll() {
    return await dbAll('SELECT id, username, email, first_name, last_name FROM users');
  }

  static async findById(id) {
    return await dbGet('SELECT id, username, email, first_name, last_name FROM users WHERE id = ?', [id]);
  }

  static async updateById(id, { email, first_name, last_name }) {
    await dbQuery(
      'UPDATE users SET email = ?, first_name = ?, last_name = ? WHERE id = ?',
      [email, first_name, last_name, id]
    );
    return this.findById(id);
  }
}

module.exports = UserModel;
