DROP TABLE detalle_venta;
DROP TABLE producto;
DROP TABLE venta;
DROP TABLE cliente;
DROP TABLE usuario;
DROP TABLE rol;
DROP TABLE estado_usuario;
DROP TABLE estado_venta;
DROP DATABASE gestion_ventas;
CREATE SCHEMA `gestion_ventas` ;
USE gestion_ventas;
CREATE TABLE estado_venta(
    id int NOT NULL AUTO_INCREMENT,
    codigo varchar(20) NOT NULL,
    descripcion varchar(255) NOT NULL,			
    PRIMARY KEY (id)
)ENGINE = InnoDB;

CREATE TABLE estado_usuario(
    id int NOT NULL AUTO_INCREMENT,
    codigo varchar(20) NOT NULL,
    descripcion varchar(255) NOT NULL,			
    PRIMARY KEY (id)
)ENGINE = InnoDB;

CREATE TABLE rol(
 id INT NOT NULL AUTO_INCREMENT,
 codigo varchar(20) NOT NULL,
    descripcion varchar(255) NOT NULL,			
    PRIMARY KEY (id)
)ENGINE = InnoDB;

CREATE TABLE usuario(
   id INT NOT NULL AUTO_INCREMENT,
   login varchar(50) NOT NULL,
   id_rol int NOT NULL,
   id_estado int NOT NULL,
   PRIMARY KEY (id), 
   FOREIGN KEY (id_estado) REFERENCES  estado_usuario(id),
   FOREIGN KEY (id_rol) REFERENCES  rol(id)    
)ENGINE = InnoDB;

CREATE TABLE cliente(
   numero_documento varchar(255) NOT NULL,
   nombres varchar(255) NOT NULL,
   apellidos varchar(255) NOT NULL,
   PRIMARY KEY (numero_documento)
)ENGINE = InnoDB;

CREATE TABLE venta(
    id int NOT NULL AUTO_INCREMENT,
    valor_total decimal(5,2) NOT NULL,
    identificador varchar(255),
    fecha DATETIME NOT NULL,
    estado int NULL,
    numero_documento varchar(255) NOT NULL,
    id_usuario int,
    PRIMARY KEY (id),
    FOREIGN KEY (estado) REFERENCES estado_venta(id),
    FOREIGN KEY (documento_cliente) REFERENCES cliente(numero_documento),
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
)ENGINE = InnoDB;

CREATE TABLE producto(
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    valor_unitario DECIMAL(5,2) NOT NULL,
    descripcion varchar(100) NOT NULL,	
    estado varchar(20) NOT NULL,
   id_usuario int,
    PRIMARY KEY (id),
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
)ENGINE = InnoDB;

CREATE TABLE detalle_venta(
 id int NOT NULL AUTO_INCREMENT,
 cantidad int NOT NULL,
 precio_unitario decimal(5,2) NOT NULL,
 id_producto int NOT NULL,
 id_venta int NOT NULL,
 documento_vendedor 	varchar(255) NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (id_producto) REFERENCES producto(id),
 FOREIGN KEY (id_venta) REFERENCES venta(id)
)ENGINE = InnoDB;

INSERT INTO rol VALUES(1,'adm','Administrador');
INSERT INTO rol VALUES(2,'ven','Vendedor');

INSERT INTO estado_venta(id,codigo,descripcion)VALUES(1,'01','En proceso');
INSERT INTO estado_venta(id,codigo,descripcion)VALUES(2,'02','Cancelada');
INSERT INTO estado_venta(id,codigo,descripcion)VALUES(3,'02','Entregada');


INSERT INTO estado_usuario VALUES(1,'pen','Pendiente');
INSERT INTO estado_usuario VALUES(2,'aut','Autorizado');
INSERT INTO estado_usuario VALUES(3,'noAut','No Autorizado');