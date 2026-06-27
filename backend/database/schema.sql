Create Database
CREATE DATABASE HostelExpenses;

USE HostelExpenses;
GO

-- Create Members Table
CREATE TABLE Members (
   MemberId INT IDENTITY(1,1) PRIMARY KEY,
   Name NVARCHAR(100) NOT NULL,
   CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Create Expenses Table with Date column
CREATE TABLE Expenses (
   ExpenseId INT IDENTITY(1,1) PRIMARY KEY,
   Description NVARCHAR(255) NOT NULL,
   Amount DECIMAL(10,2) NOT NULL,
   PayerId INT NOT NULL,
   Category NVARCHAR(50),
   Date DATE NULL,
   CreatedAt DATETIME DEFAULT GETDATE(),
   FOREIGN KEY (PayerId) REFERENCES Members(MemberId)
);
GO

-- Create ExpenseSplits Table (Junction table)
CREATE TABLE ExpenseSplits (
   SplitId INT IDENTITY(1,1) PRIMARY KEY,
   ExpenseId INT NOT NULL,
   MemberId INT NOT NULL,
   FOREIGN KEY (ExpenseId) REFERENCES Expenses(ExpenseId) ON DELETE CASCADE,
   FOREIGN KEY (MemberId) REFERENCES Members(MemberId) ON DELETE CASCADE
);
GO

-- Insert sample members
INSERT INTO Members (Name) VALUES ('Dharshini'), ('Sahana'), ('Karthika');
GO

-- Insert sample expenses with dates
INSERT INTO Expenses (Description, Amount, PayerId, Category, Date) VALUES 
('Parotta', 80.00, 1, 'food', '2025-06-02'),
('Semiya', 30.00, 1, 'grocery', '2025-06-03'),
('Milk', 15.00, 1, 'grocery', '2025-06-03'),
('Tea Powder', 12.00, 1, 'grocery', '2025-06-03'),
('Shampoo', 20.00, 1, 'grocery', '2025-06-03'),
('Naa saha ku 379 tharanum', 379.00, 2, 'food', '2025-05-27'),
('Naa karthika akka ku 76 tharanum', 76.00, 3, 'food', '2025-06-01');
GO


-- Verify data
SELECT * FROM Members;
SELECT * FROM Expenses;
SELECT * FROM ExpenseSplits;
GO