CREATE DATABASE taskmanager;
USE taskmanager;

CREATE TABLE task(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type VARCHAR(255) NOT NULL
);

INSERT INTO task (TITLE, DESCRIPTION, TYPE) VALUES ('Task 1', 'task description 1', 'STORY');
INSERT INTO task (TITLE, DESCRIPTION, TYPE) VALUES ('Task 2', 'task description 2', 'STORY');
INSERT INTO task (TITLE, DESCRIPTION, TYPE) VALUES ('Task 3', 'task description 3', 'DEFECT');
INSERT INTO task (TITLE, DESCRIPTION, TYPE) VALUES ('Task 4', 'task description 4', 'STORY');