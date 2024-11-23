-- Create the database if it doesn't exist
CREATE DATABASE todolist;

-- Connect to the database
\c todolist;

-- Create index for performance
CREATE INDEX idx_todo_completed ON todos(completed);