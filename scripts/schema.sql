-- Beta signups from the modal on the landing page.
create table if not exists beta_signups (
  id                  bigserial primary key,
  email               text        not null,
  role                text,
  collaboration       text,
  challenge           text,
  collaborated_before boolean,
  created_at          timestamptz not null default now()
);

create index if not exists beta_signups_email_idx      on beta_signups (email);
create index if not exists beta_signups_created_at_idx  on beta_signups (created_at desc);

-- Research answers from the story form on /beta/success. signup_id is set when
-- the visitor still holds the cookie from their signup, so answers can be tied
-- back to a person; it stays null if they arrive without one.
create table if not exists collaboration_stories (
  id                bigserial primary key,
  signup_id         bigint      references beta_signups (id) on delete set null,
  collaborated_with text,
  creating          text,
  went_well         text,
  became_difficult  text,
  created_at        timestamptz not null default now()
);

create index if not exists collaboration_stories_signup_idx on collaboration_stories (signup_id);
