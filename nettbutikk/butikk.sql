CREATE TABLE kunde
(
  kundeid serial primary key,
  fornavn text NOT NULL,
  etternavn text NOT NULL,
  adresse text NOT NULL,
  mobil text default '',
  email text default ''
);

CREATE TABLE vare
(
  vareid serial primary key,
  varenavn text NOT NULL,
  beholdning INT default 0,
  basispris INT NOT NULL
);

CREATE TABLE bestilling
(
  bestillingsid serial primary key,
  dato DATE NOT NULL,
  betalt boolean default false,
  betalingsmetode text NOT NULL,
  kundeid INT NOT NULL,
  FOREIGN KEY (kundeid) REFERENCES kunde(kundeid)
);

CREATE TABLE linje
(
  linjeid serial primary key,
  pris INT NOT NULL,
  antall INT default 1,
  bestillingsid INT NOT NULL,
  vareid INT NOT NULL,
  FOREIGN KEY (bestillingsid) REFERENCES bestilling(bestillingsid),
  FOREIGN KEY (vareid) REFERENCES vare(vareid)
);