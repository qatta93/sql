-- Example dummy table
DROP TABLE IF EXISTS Instructors;

CREATE TABLE Instructors
(
  Id integer CONSTRAINT order_details_pk PRIMARY KEY,
  "Name" varchar(120) NOT NULL
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
    ("id" ASC NULLS LAST)
    TABLESPACE pg_default;


-- YOUR PROPER TABLE CREATED AND FILLED DATA BELOW HERE
-- YOU CAN COMMENT OUR EXAMPLE OUT IF YOU WANT.
