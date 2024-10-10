instalar dependencias
npm install

subir o banco
docker compose up

adicionar migration no banco
npx prisma generate
npx prisma migrate dev
npx prisma db push

agora iniciar o front end na porta 3000
tem uma lib instalada para facilitar comandos então de um
npx ntl
e então escolha a opção no caso a (dev)