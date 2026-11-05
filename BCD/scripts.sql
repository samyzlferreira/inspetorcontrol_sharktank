CREATE DATABASE inspetorcontrol;

USE inspetorcontrol;

CREATE TABLE salas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(30) UNIQUE,
    sala_id INT NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id)
);

CREATE TABLE inspetores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE frequencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    data DATE NOT NULL,
    alunos_presentes INT NOT NULL,
    alunos_faltantes INT NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    UNIQUE (sala_id, data)
);

CREATE TABLE faltas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    aluno_id INT NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

CREATE TABLE saidas_antecipadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    aluno_id INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    motivo VARCHAR(255) NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

CREATE TABLE entradas_atrasadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    aluno_id INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    motivo VARCHAR(255) NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

CREATE TABLE medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    aluno_id INT NOT NULL,
    inspetor_id INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (inspetor_id) REFERENCES inspetores(id)
);

CREATE TABLE ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id)
);

CREATE TABLE documentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    aluno_id INT NOT NULL,
    nome_documento VARCHAR(150) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    arquivo VARCHAR(255),
    observacoes TEXT,
    validado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (sala_id) REFERENCES salas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

CREATE TABLE cardapios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    nutricionista VARCHAR(100) NOT NULL,
    arquivo VARCHAR(255)
);

CREATE TABLE refeicoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cardapio_id INT NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (cardapio_id) REFERENCES cardapios(id)
);