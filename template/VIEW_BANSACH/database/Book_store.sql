create database Book_Store
go
use Book_Store
go

create table _user (
	_user_id  INT IDENTITY(1,1) PRIMARY KEY,
	_user_name NVARCHAR(100),
	_user_email VARCHAR(50),
	_password VARCHAR(16),
	_user_phone VARCHAR(10),
	_user_address NVARCHAR(200)
)

create table products(
	products_id int identity(1,1) primary key,
	products_name nvarchar(200),
	sublisher_id int,--id nha xuat ban
	auther_id int,--id tac gia
	translator_id int,--id dich gia
	cat_id int,-- id the loai
	amount_id int,--id so luong
	republish int,--so tai ban
	qty_page int,--so trang
	_description text,--mo ta
	_weight int,
	made_in nvarchar(100),
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
)

create table sublisher(
	sublisher_id int identity(1,1) primary key,
	sublisher_name nvarchar(100),
	email nvarchar(100),
	mobile varchar(15),
	_status int,
	_address varchar(255),
	_description text,--mo ta
)

create table translator(
	translator_id int identity(1,1) primary key,
	translator_name nvarchar(100),
	email nvarchar(100),
	mobile varchar(15),
	_status int,
	_address varchar(255),
	_description text,--mo ta
)

create table auther(
	auther_id int identity(1,1) primary key,
	auther_name nvarchar(100),
	email nvarchar(100),
	mobile varchar(15),
	_status int,
	_address varchar(255),
	_description text,--mo ta
)

create table category(
	cat_id int identity(1,1) primary key,
	cat_name nvarchar(100),
	_status int,
	metakeyword nvarchar(255),
	metadescription nvarchar(255),
	created_at datetime,
	updated_at datetime
)

create table sale(
	sale_id int identity(1,1) primary key,
	discount float,
	_status int,
	metakeyword nvarchar(255),
	metadescription nvarchar(255),
)

create table sale_detail(
	products_id int,
	sale_id int,
	_begin datetime,
	_finish datetime
)

create table amount(
	amount_id int identity(1,1) primary key,
	_status  int , -- 0la nhap 1 la xuat
	provider_id int,
	import_date datetime,
	export_date datetime
)

create table provider(
	provider_id int identity(1,1) primary key,
	_status int,
	provider_name nvarchar(100),
	provider_address nvarchar(255),
	provider_phone varchar(15),
	provider_email nvarchar(100),
	_description text
)

ALTER TABLE products
ADD CONSTRAINT FK_P_Sublisher FOREIGN KEY (sublisher_id) REFERENCES sublisher(sublisher_id)
ALTER TABLE products
ADD CONSTRAINT FK_P_translator FOREIGN KEY (translator_id) REFERENCES translator(translator_id)
ALTER TABLE products
ADD CONSTRAINT FK_P_auther FOREIGN KEY (auther_id) REFERENCES auther(auther_id)
ALTER TABLE products
ADD CONSTRAINT FK_P_category FOREIGN KEY (cat_id) REFERENCES category(cat_id)
ALTER TABLE products
ADD CONSTRAINT FK_P_amount FOREIGN KEY (amount_id) REFERENCES amount(amount_id)
ALTER TABLE sale_detail
ADD CONSTRAINT FK_P_products FOREIGN KEY (products_id) REFERENCES products(products_id)
ALTER TABLE sale_detail
ADD CONSTRAINT FK_P_sale FOREIGN KEY (sale_id) REFERENCES sale(sale_id)
ALTER TABLE amount
ADD CONSTRAINT FK_P_provider FOREIGN KEY (provider_id) REFERENCES provider(provider_id)
-----------------------------
drop database Book_Store
drop table _user



---------------------------------------------------------
DELETE dbo._user
DELETE dbo.products
DELETE dbo.[order] 

DELETE dbo.amount
DELETE dbo.auther
DELETE dbo.category
DELETE dbo.feedback

DELETE dbo.payment

DELETE dbo.provider
DELETE dbo.sale
DELETE dbo.sale_detail
DELETE dbo.sublisher
DELETE dbo.translator
DELETE dbo.transport
DELETE dbo.wishlist
DELETE dbo.order_detail