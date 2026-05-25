# Exercise 1: Bank Account
# Part I: Create BankAccount class with balance, deposit(), and withdraw()
# Part II: Create MinimumBalanceAccount inheriting from BankAccount
# Part III: Add authentication attributes and authenticate() method
# Part IV: BONUS Create an ATM class to manage multiple accounts

class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to perform this action.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Deposit amount must be a positive number.")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to perform this action.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive number.")
        self.balance -= amount
        return self.balance


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to perform this action.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive number.")
        if self.balance - amount < self.minimum_balance:
            raise Exception(f"Withdrawal denied. Balance cannot drop below minimum limit of {self.minimum_balance}.")
        self.balance -= amount
        return self.balance


class ATM:
    def __init__(self, account_list, try_limit):
        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("Account list must contain only BankAccount or MinimumBalanceAccount instances.")
        
        try:
            if not isinstance(try_limit, (int, float)) or try_limit <= 0:
                raise Exception()
            self.try_limit = try_limit
        except Exception:
            print("Invalid try limit entered. Defaulting to 2.")
            self.try_limit = 2

        self.account_list = account_list
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- ATM MAIN MENU ---")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option (1-2): ").strip()

            if choice == "1":
                username = input("Enter username: ").strip()
                password = input("Enter password: ").strip()
                self.log_in(username, password)
            elif choice == "2":
                print("Thank you for using the ATM. Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            if account.authenticate(username, password):
                self.current_tries = 0  # Reset tries on successful login
                self.show_account_menu(account)
                return

        self.current_tries += 1
        remaining = self.try_limit - self.current_tries
        print(f"Invalid username or password. Remaining attempts: {max(0, remaining)}")
        
        if self.current_tries >= self.try_limit:
            print("Maximum login attempts reached. System shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print(f"\n--- Account Menu (Welcome, {account.username}) ---")
            print(f"Current Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit/Log out")
            choice = input("Select an option (1-3): ").strip()

            try:
                if choice == "1":
                    amount = float(input("Enter deposit amount: "))
                    new_balance = account.deposit(amount)
                    print(f"Success! New balance: {new_balance}")
                elif choice == "2":
                    amount = float(input("Enter withdrawal amount: "))
                    new_balance = account.withdraw(amount)
                    print(f"Success! New balance: {new_balance}")
                elif choice == "3":
                    account.authenticated = False  # Secure account on exit
                    print("Logged out successfully.")
                    break
                else:
                    print("Invalid option.")
            except ValueError:
                print("Error: Please enter a valid number.")
            except Exception as e:
                print(f"Transaction Error: {e}")


# Code for validation testing
if __name__ == "__main__":
    # Create sample accounts
    acc1 = BankAccount("user1", "secure123", 500)
    acc2 = MinimumBalanceAccount("user2", "pass456", 1000, minimum_balance=100)
    
    accounts = [acc1, acc2]
    
    # Initialize the ATM (uncomment line below to run interactive menu)
    # atm_system = ATM(accounts, try_limit=3)
