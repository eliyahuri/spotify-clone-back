# spotify-clone-back

### env example

```env
DATABASE_URL="postgresql://DB_USERNAME:DB_PASSWORD@localhost:5432/spotifyDB?schema=public"
PORT=PORT YOU WANT
# cors
CORS_ORIGIN=http://localhost:<FRONTEND_PORT>
CORS_OPTIONS_SUCCESS_STATUS=200
```

to run the project you need to have a postgres database

## to generate @prisma/client run:

```bash
pnpm db:generate
```

## when you want to push the changes to the database run:

```bash
pnpm db:generate
```

## if you want to migrate use

```bash
pnpm prisma migrate dev --name NAME_OF_MIGRATION
```
