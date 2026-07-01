
select * from usuarios;

insert into usuarios(idusuarios, nome, senha) values(1,"ricardo", "123456");
insert into usuarios(idusuarios, nome, senha) values(2,"maria", "654321");


CREATE TABLE delegacia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(200) NOT NULL,
    status TINYINT NOT NULL,
    telefone VARCHAR(30),
    logradouro VARCHAR(150),
    numero VARCHAR(20),
    complemento VARCHAR(150),
    bairro VARCHAR(120),
    cidade VARCHAR(120),
    estado CHAR(2),
    e_mail VARCHAR(150),
    cep VARCHAR(15),
    codTipoLogradouro VARCHAR(5),   -- AV, R, etc.
    codNucleo INT,                  -- valores numéricos
    codRegional INT                 -- valores numéricos (001 → 1)
);

     
     INSERT INTO delegacia 
(descricao,status,telefone,logradouro,numero,complemento,bairro,cidade,estado,e_mail,cep,codTipoLogradouro,codNucleo,codRegional) 
VALUES
('DE',1,'','RANGEL PESTANA','315','','315','SAO PAULO','SP','rosato@tce.sp.gov.br','','AV',NULL,26),
('Protocolo - UR-01',1,'(18) 3622-2107','CAFE FILHO','402','','JARDIM ICARAY','ARACATUBA','SP','rosato@tce.sp.gov.br','16020550','AV',18,1),
('Protocolo - UR-02',1,'(14) 3237-1530','JOSE FRANCISCO AUGUSTO','5-4','','JARDIM GODOI','BAURU','SP','rosato@tce.sp.gov.br','17021640','R',29,2),
('Protocolo - UR-03',1,'(19) 3207-2333','CARLOS GRIMALDI','880','','JARDIM CONCEICAO','CAMPINAS','SP','rosato@tce.sp.gov.br','13091000','AV',32,3),
('Protocolo - UR-04',1,'(14) 3422-2416','PROFESSOR FRANCISCO MORATO','381','','JARDIM SAO GERALDO','MARILIA','SP','rosato@tce.sp.gov.br','17501020','R',33,4),
('Protocolo - UR-05',1,'(18) 3221-2847','JOSE CUPERTINO','179','','JARDIM MARUPIARA','PRESIDENTE PRUDENTE','SP','rosato@tce.sp.gov.br','19060090','R',34,5),
('Protocolo - UR-06',1,'(16) 3624-1700','ADOLFO ZEO','426','','RIBEIRANIA','RIBEIRAO PRETO','SP','rosato@tce.sp.gov.br','14096470','R',31,6),
('Protocolo - UR-07',1,'(12) 3941-8356','HEITOR VILA LOBOS','781','','VILA EMA','SAO JOSE DOS CAMPOS','SP','rosato@tce.sp.gov.br','12243260','AV',30,7),
('Protocolo - UR-08',1,'(17) 3227-8255','JOSE MUNIA','5400','','CHACARA MUNICIPAL','SAO JOSE DO RIO PRETO','SP','rosato@tce.sp.gov.br','15090500','AV',28,8),
('Protocolo - UR-09',1,'(15) 3228-1521','MARCO FRANCISCO GARCIA CHIURATTO','180','','JARDIM SAIRA','SOROCABA','SP','rosato@tce.sp.gov.br','18085840','R',27,9);


INSERT INTO delegacia (descricao,status,telefone,logradouro,numero,complemento,bairro,cidade,estado,e_mail,cep,codTipoLogradouro,codNucleo,codRegional) VALUES
	 ('Protocolo - UR-10',1,'(19) 3541-7099','MAXIMILIANO BARUTO','471','','JARDIM UNIVERSITARIO','ARARAS','SP','rosato@tce.sp.gov.br','13607339','AV',26,'010'),
	 ('Protocolo - UR-11',1,'(17) 3442-6552','MARIA BATISTA','209','','BOA VISTA','FERNANDOPOLIS','SP','rosato@tce.sp.gov.br','15600000','R',25,'011'),
	 ('Protocolo - UR-12',1,'(13) 3821-3237','CLARA GIANOTTI DE SOUZA','1049','','CENTRO','REGISTRO','SP','rosato@tce.sp.gov.br','11900000','AV',24,'012'),
	 ('Protocolo - UR-13',1,'(16) 3335-3738','PRUDENTE DE MORAES','307','','CENTRO','ARARAQUARA','SP','rosato@tce.sp.gov.br','14801170','AV',23,'013'),
	 ('Protocolo - UR-14',1,'(12) 3132-2087','DOMINGOS RODRIGUES ALVES','316','','CENTRO','GUARATINGUETA','SP','rosato@tce.sp.gov.br','12500040','R',22,'014'),
	 ('Protocolo - UR-15',1,'(18) 3723-6287','PEREIRA BARRETO','1781','','CENTRO','ANDRADINA','SP','rosato@tce.sp.gov.br','16901022','R',21,'015'),
	 ('Protocolo - UR-16',1,'(15) 3521-8430','CORONEL ACACIO PIEDADE','384','','CENTRO','ITAPEVA','SP','rosato@tce.sp.gov.br','18400180','AV',20,'016'),
	 ('Protocolo - UR-17',1,'(16) 3839-0249','JOSE BONIFACIO','803','','JARDIM INDEPENDENCIA','ITUVERAVA','SP','rosato@tce.sp.gov.br','14500000','R',19,'017'),
	 ('Protocolo - UR-18',1,'(18) 3521-1133','PADRE NOBREGA','531','','','ADAMANTINA','SP','rosato@tce.sp.gov.br','17800000','AV',17,'018'),
	 ('Protocolo - DF-01',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',8,NULL);
INSERT INTO delegacia (descricao,status,telefone,logradouro,numero,complemento,bairro,cidade,estado,e_mail,cep,codTipoLogradouro,codNucleo,codRegional) VALUES
	 ('Protocolo - DF-02',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',9,NULL),
	 ('Protocolo - DF-03',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',10,NULL),
	 ('Protocolo - DF-04',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',11,NULL),
	 ('Protocolo - DF-05',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',12,NULL),
	 ('Protocolo - DF-06',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',13,NULL),
	 ('Protocolo - DF-07',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',14,NULL),
	 ('Protocolo - DF-08',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',15,NULL),
	 ('Protocolo - DF-09',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',7,NULL),
	 ('Protocolo - DF-10',1,'','Rangel Pestana','315','','','São Paulo','SP','rosato@tce.sp.gov.br','','AV',16,NULL),
	 ('Protocolo - UR-19',1,'(19) 3818-8832','CATANDUVA','145','','JARDIM PLANALTO VERDE','MOGI-GUACU','SP','rosato@tce.sp.gov.br','13843193','R',290,'019');
INSERT INTO delegacia (descricao,status,telefone,logradouro,numero,complemento,bairro,cidade,estado,e_mail,cep,codTipoLogradouro,codNucleo,codRegional) VALUES
	 ('Protocolo - UR-20',1,'','Presidente Wilson','100','','','SANTOS','SP','rosato@tce.sp.gov.br','','AV',305,'020'),
	 ('Protocolo - DCG',1,'','RANGEL PESTANA','315','','CENTRO','SAO PAULO','SP','rosato@tce.sp.gov.br','','AV',476,NULL),
	 ('Protocolo - Cartórios',1,'','Rangel Pestana','315','','SE','SAO PAULO','SP','rosato@tce.sp.gov.br','','AV',NULL,'026'),
	 ('TESTE UNIDDADE PROTOCOLADORA',1,'9626315025','SANTOS','406','CASA','Brasil Novo','Macapá','SP','analu_mendes@flir.com.br','','AL',NULL,NULL),
	 ('Os Devs',1,'9696969696','José Almeida Villas Boas','888','casa','Vila São Judas Thadeu - Botucatu','São Paulo','SP','bernardo.osvaldo.fogaca@mv1.com.br','18607053','PC',NULL,NULL);


select * from delegacia;
