CREATE TABLE "quotes" (
	"id" varchar(12) PRIMARY KEY NOT NULL,
	"quote" text NOT NULL,
	"createdAt" timestamp (3) DEFAULT now() NOT NULL,
	"updated_at" timestamp (3)
);
