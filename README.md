# spotify-clone-back

### env example

```env
DATABASE_URL="postgresql://DB_USERNAME:DB_PASSWORD@localhost:5432/spotifyDB?schema=public"
PORT=PORT YOU WANT
```

to run the project you need to have a postgres database

## to generate @prisma/client run:

```env
pnpm db:generate
```

## when you want to push the changes to the database run:

```env
pnpm db:generate
```

## if you want to migrate use

```env
pnpm prisma migrate dev --name NAME_OF_MIGRATION
```
