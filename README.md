#Instruções para instalar e rodar

## Dependências

- express
- body parser
- jest

## Instale as depêndencias (Windows)
Primeiro tenha instalado Node e npm na sua máquina `https://nodejs.org/en/` 
```shell
npm install -g npm
```

Express
```shell
npm install express
```

Body Parser
```shell
npm install body-parser
```
Jest
```shell
npm install --save-dev jest
```

## Instale as depêndencias (Linux)

Primeiro faça o download do Node
```shell
cd /tmp
wget http://nodejs.org/dist/v0.10.32/node-v0.10.32-linux-x64.tar.gz
tar xvf node-v0.10.32-linux-x64.tar.gz
```
Instale o Node
```shell
cd node-v0.10.32-linux-x64/
cp * /usr/local/ -r
cd ~
```
Express
```shell
npm install -g express-generator
```

Body Parser pt.1
```shell
sudo apt-get update -y
```
Body Parser pt.2
```shell
sudo apt-get install -y node-body-parser
```
Jest pt.1
```shell
sudo apt-get update
```
Jest pt.2
```shell
sudo apt-get -y install jest

```

## Rodar projeto

```shell
npm start
```

The project will be available in `http://localhost:3000`

## Rodar testes (não feito, não irá rodar)

```shell
npm test
```
