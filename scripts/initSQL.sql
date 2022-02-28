-- Example dummy table
DROP TABLE IF EXISTS Instructors;

CREATE TABLE Instructors
(
  Instructor_Id integer PRIMARY KEY,
  Instructor_Name varchar(120) NOT NULL
);

INSERT INTO Instructors
  (Instructor_Id, Instructor_Name)
VALUES
  (1, 'Johan');
INSERT INTO Instructors
  (Instructor_Id, Instructor_Name)
VALUES
  (2, 'Josephine');
INSERT INTO Instructors
  (Instructor_Id, Instructor_Name)
VALUES
  (3, 'Oscar');


CREATE INDEX "idx_Instructors_id"
    ON public."instructors" USING btree
    (Instructor_Id ASC NULLS LAST)
    TABLESPACE pg_default;


-- YOUR PROPER TABLE CREATED AND FILLED DATA BELOW HERE
-- YOU CAN COMMENT OUR EXAMPLE OUT IF YOU WANT.
