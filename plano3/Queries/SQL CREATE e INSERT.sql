CREATE TABLE Funcionario
(
	Id INT PRIMARY KEY CLUSTERED NOT NULL,
	Cpf VARCHAR(11) UNIQUE NOT NULL,
	Nome VARCHAR(150)
)

CREATE TABLE Turno
(
	Id int PRIMARY KEY CLUSTERED NOT NULL,
	Periodo VARCHAR(150)
)

CREATE TABLE TipoHorario
(	
	Id int PRIMARY KEY CLUSTERED NOT NULL,
	TipoHorario VARCHAR(150)NOT NULL,
)

CREATE TABLE Historico
(
	IdFuncionario INT FOREIGN KEY REFERENCES Funcionario(Id) NOT NULL,
	IdTurno INT FOREIGN KEY REFERENCES Turno(Id) NOT NULL,
	TipoHorario VARCHAR(150)NOT NULL,
	Hora DATETIME2 NOT NULL
)


INSERT INTO TipoHorario (Id, TipoHorario) 
VALUES(1,'Entrada Expediente'),
(2,'Entrada Almoço'),
(3,'Entrada Pausa'),
(4,'Saida Almoço'),
(5,'Saida Pausa'),
(6,'Saida Expediente');


INSERT INTO Turno (Id, Periodo) 
VALUES 
(1,'Manhã'),
(2,'Tarde'),
(3,'Noite')

DROP TABLE Historico

CREATE TABLE Historico
(
	IdFuncionario INT FOREIGN KEY REFERENCES Funcionario(Id) NOT NULL,
	IdTurno INT FOREIGN KEY REFERENCES Turno(Id) NOT NULL,
	IdTipoHorario INT FOREIGN KEY REFERENCES TipoHorario(Id) NOT NULL,
	Hora DATETIME2 NOT NULL,
)

ALTER TABLE Funcionario DROP COLUMN Periodo

ALTER TABLE Funcionario ADD IdTurno INT FOREIGN KEY REFERENCES Turno(Id) NOT NULL

INSERT INTO Funcionario (Id,Cpf,Nome) VALUES
(1,'12345678900','Shaco Lobato da Silva',2),
(2,'23456789001','Yasuo Ganímedes Oliveira',3),
(3,'34567890102','Riven Cunha Luz',1),
(4,'45678901203','Kled Pompeia Silva',3),
(5,'78901234504','Jax Montana Dias',1),
(6,'01234567805','Katarina Dias da Cunha',2),
(7,'12345678906','Karma Nonato Oliveira',3),
(8,'23445678907','Lucian Ganímedes Souza',2),
(9,'45678912308','Zed Orácio Oliveira',1)