create database atvdevweb;
use atvdevweb;

create table cliente (
	nome VARCHAR(30),
    email VARCHAR(50));
    
create table pedidos (
	nome_pedido VARCHAR(30),
	preco_pedido FLOAT);

insert into cliente values ('Rodrigo', 'rodrigo@gmail.com');
insert into cliente values ('Leonardo', 'leonardo@gmail.com');
insert into cliente values ('Felipe', 'felipe@gmail.com');

insert into pedidos values ('apagador', 20.00);
insert into pedidos values ('caneta', 5.00);
insert into pedidos values ('borracha', 3.00);

