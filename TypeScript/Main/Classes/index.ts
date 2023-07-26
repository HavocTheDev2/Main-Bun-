import fs from "fs";
import * as rl from "readline";

interface User {
  id: number;
  name: string;
  age: number;
}

class UserDatabase {
  private data: { DataBase: User[] } = { DataBase: [] };

  constructor() {
    // Read the existing user data from the file
    try {
      const fileData = fs.readFileSync("data.json", "utf8");
      if (fileData) {
        this.data = JSON.parse(fileData);
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Add a new user to the database
  addUser(user: User) {
    // Generate a new ID for the user
    const id =
      this.data.DataBase.length > 0
        ? this.data.DataBase[this.data.DataBase.length - 1].id + 1
        : 0;
    user.id = id;

    // Add the user to the database
    this.data.DataBase.push(user);

    // Write the updated data back to the file
    fs.writeFileSync("data.json", JSON.stringify(this.data));

    // Write in Bold, Green
    console.log(
      "\x1b[1m\x1b[32m%s\x1b[0m",
      `User ${user.name} added successfully!\x1b[0m`
    );
  }

  // Get all users from the database
  getUsers(): User[] {
    return this.data.DataBase;
  }

  // Update an existing user in the database
  updateUser(user: User) {
    // Find the index of the user in the database
    const index = this.data.DataBase.findIndex((u) => u.id === user.id);

    // Update the user in the database
    if (index !== -1) {
      this.data.DataBase[index] = user;

      // Write the updated data back to the file
      fs.writeFileSync("data.json", JSON.stringify(this.data));
    }
  }

  // Delete an existing user from the database by ID
  deleteUserById(id: number) {
    // Find the index of the user in the database
    const index = this.data.DataBase.findIndex((u) => u.id === id);

    // Delete the user from the database
    if (index !== -1) {
      this.data.DataBase.splice(index, 1);

      // Write the updated data back to the file
      fs.writeFileSync("data.json", JSON.stringify(this.data));
    }
  }

  // Delete all users from the database
  deleteAllUsers() {
    // Delete all users from the database
    this.data.DataBase = [];

    // Write the updated data back to the file
    fs.writeFileSync("data.json", JSON.stringify(this.data));

    // Write in Bold, Blue
    console.log(
      "\x1b[1m\x1b[34m%s\x1b[0m",
      `All users deleted successfully!\x1b[0m`
    );
  }

  // Get a user from the database by name
  deleteUserByName(name: string) {
    // Find the index of the user in the database
    const index = this.data.DataBase.findIndex((u) => u.name === name);

    // Delete the user from the database
    if (index !== -1) {
      this.data.DataBase.splice(index, 1);

      // Write the updated data back to the file
      fs.writeFileSync("data.json", JSON.stringify(this.data));

      // Write in Bold, Blue
      console.log(
        "\x1b[1m\x1b[34m%s\x1b[0m",
        `User ${name} deleted successfully!\x1b[0m`
      );
    }
  }

  // Delete User by User type
  deleteUser(self: User) {
    // Find the index of the user in the database
    const index = this.data.DataBase.findIndex((u) => u.id === self.id);

    // Delete the user from the database
    if (index !== -1) {
      this.data.DataBase.splice(index, 1);

      // Write the updated data back to the file
      fs.writeFileSync("data.json", JSON.stringify(this.data));

      // Write in Bold, Blue
      console.log(
        "\x1b[1m\x1b[34m%s\x1b[0m",
        `User ${self.name} deleted successfully!\x1b[0m`
      );
    }
  }
}

const input = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userDatabase = new UserDatabase();
input.question('What is your name? : ', (name) => {
  input.question('What is your age? : ', (age) => {
    const user: User = {
      id: 0,
      name: name,
      age: parseInt(age),
      };
      userDatabase.addUser(user);
      input.close();
    });
  });

