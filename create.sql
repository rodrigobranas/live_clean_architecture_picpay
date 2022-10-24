drop table branas.purchase;
create table branas.purchase (
	card_number text,
	soft_descriptor text,
	amount numeric,
	date timestamp,
	currency text
);

insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234123412341234', 'Amazon', 100, '2022-10-10T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234123412341234', 'Netflix', 30, '2022-10-09T10:00:00', 'USD');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234123412341234', 'MELI', 300, '2022-10-02T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234123412341234', 'Google Ads', 200, '2022-10-20T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234123412341234', 'Google Ads', 200, '2022-07-10T10:00:00', 'USD');