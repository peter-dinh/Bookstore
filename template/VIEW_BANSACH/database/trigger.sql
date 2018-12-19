delete from amount
select amount from amount where products_id=1 group by amount, amount_id having amount_id=MAX(amount_id)
insert into amount(_status,provider_id,i_date,products_id,amount,a_import,a_export) values(1,1,'10-10-2018',1,40,20,0)
go
create trigger tg_insert_amount
on amount 
for insert
as
declare @amount int, @products_id int
select @amount=amount, @products_id=products_id from inserted
update products set products.amount=@amount where products.products_id=@products_id
go
create trigger tg_insert_product
on products
for insert
as
declare @
