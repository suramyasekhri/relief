SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: relief; Type: DATABASE; Schema: -; Owner: panwhale
--

\connect relief

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: user; Type: TABLE; Schema: public; Owner: panwhale
--

CREATE TABLE user if not exists (
    id serial not null unique,
    username varchar(255) not null unique,
    password varchar(255) not null unique,
    email varchar(255) not null unique,
    constraint "user_pk" PRIMARY KEY ("id")
) with (
    OIDS=FALSE
);

alter table user OWNER TO panwhale;

--
-- Name: charity; Type: TABLE; Schema: public; Owner: panwhale
--

CREATE TABLE charity if not exists (
    id integer NOT NULL unique,
    name varchar(255) not null,
    mission text not null,
    tag_line text not null,
    category varchar(255) not null,
    cause text not null,
    street_address text not null,
    city varchar(255) not null,
    state varchar(255) not null,
    zip int not null,
    rate float8 not null,
    constraint "charity_pk" PRIMARY KEY ("id")
) with (
    OIDS=FALSE
);

alter table charity OWNER TO panwhale;

--
-- Name: charity; Type: TABLE; Schema: public; Owner: panwhale
--

CREATE TABLE donation if not exists (
    id serial not null unique,
    amount money not null,
    user_id serial not null,
    charity_id serial not null,
    constraint "donation_pk" primary key ("id")
) with (
    OIDS=FALSE
);

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: panwhale
--

COPY user (username, password, email) FROM stdin;
newbenhd    password123 newben.hd@gmail.com
jason       jason123    jason.lee@gmail.com
justin      justin123   justin8@gmail.com
schno       schno123    schno@codesmith.io
juan        juan123     juan@codesmith.io
\.

--
-- Data for Name: charity; Type: TABLE DATA; Schema: public; Owner: panwhale
--

COPY charity (name, mission, tag_line, category, cause, street_address, city, state, zip, rate) from stdin;
mpak    "Google it"     "Mission to promote adoption of Kids"   "Adoption"  "non-profit"    "15532 Wilder Avenue"   "Norwalk"   "CA"    90650   8.9
\.


ALTER TABLE "donation" ADD CONSTRAINT "donation_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "donation" ADD CONSTRAINT "donation_fk1" FOREIGN KEY ("charity_id") REFERENCES "charity"("id");

--
-- Name: public; Type: ACL; Schema: -; Owner: panwhale
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM panwhale;
GRANT ALL ON SCHEMA public TO panwhale;
GRANT ALL ON SCHEMA public TO PUBLIC;

