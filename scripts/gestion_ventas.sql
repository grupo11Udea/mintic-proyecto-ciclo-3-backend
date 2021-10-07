DROP TABLE detalle_venta;
DROP TABLE producto;
DROP TABLE venta;
DROP TABLE cliente;
DROP TABLE usuario;
DROP TABLE vendedor;
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

CREATE TABLE vendedor(
   numero_documento varchar(255) NOT NULL,
   nombres varchar(255) NOT NULL,
   apellidos varchar(255) NOT NULL,
   PRIMARY KEY (numero_documento) 
)ENGINE = InnoDB;


CREATE TABLE usuario(
   id INT NOT NULL AUTO_INCREMENT,
   login varchar(50) NOT NULL,
   password varchar(100) NOT NULL,
   rol int NOT NULL,
   estado int NOT NULL,
   vendedor varchar(255) NOT NULL,
   PRIMARY KEY (id), 
   FOREIGN KEY (estado) REFERENCES  estado_usuario(id),
   FOREIGN KEY (rol) REFERENCES  rol(id), 
   FOREIGN KEY (vendedor) REFERENCES  vendedor(numero_documento)	   
)ENGINE = InnoDB;

CREATE TABLE cliente(
   numero_documento varchar(255) NOT NULL,
   nombres varchar(255) NOT NULL,
   apellidos varchar(255) NOT NULL,
   PRIMARY KEY (numero_documento)
)ENGINE = InnoDB;




CREATE TABLE venta(
    identificador_unico int NOT NULL AUTO_INCREMENT,
    valor_total decimal(5,2) NOT NULL,
    identificador varchar(255),
    fecha DATETIME NOT NULL,
    estado int NULL,
    documento_cliente varchar(255) NOT NULL,
    PRIMARY KEY (identificador_unico),
    FOREIGN KEY (estado) REFERENCES estado_venta(id),
    FOREIGN KEY (documento_cliente) REFERENCES cliente(numero_documento)
)ENGINE = InnoDB;

CREATE TABLE producto(
    identificador int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    valor_unitario DECIMAL(5,2) NOT NULL,
    estado varchar(20) NOT NULL,
    usuario int NOT NULL,
    PRIMARY KEY (identificador),
    FOREIGN KEY (usuario) REFERENCES usuario(id)
)ENGINE = InnoDB;

CREATE TABLE detalle_venta(
 id_detalle_venta int NOT NULL AUTO_INCREMENT,
 cantidad int NOT NULL,
 precio_unitario decimal(5,2) NOT NULL,
 id_producto int NOT NULL,
 id_venta int NOT NULL,
 documento_vendedor 	varchar(255) NOT NULL,
 PRIMARY KEY (id_detalle_venta),
 FOREIGN KEY (id_producto) REFERENCES producto(identificador),
 FOREIGN KEY (id_venta) REFERENCES venta(identificador_unico),
 FOREIGN KEY (documento_vendedor) REFERENCES vendedor(numero_documento)
)ENGINE = InnoDB;


