
# 📍 NearbyApp
## 📝 Sobre o Projeto

O NearbyApp é um aplicativo mobile desenvolvido com React Native e Expo, permitindo aos usuários explorar estabelecimentos próximos, acessar suas páginas e resgatar cupons por meio de QR Codes.

- Localização de Estabelecimentos Próximos: Identifica estabelecimentos com base na localização atual do usuário.
- Acesso às Páginas dos Estabelecimentos: Exibe detalhes e informações adicionais de cada estabelecimento.
- Resgate de Cupons: Permite que os usuários escaneiem QR Codes para obter descontos exclusivos.

## 🖼️ Capturas de Tela

![Foto da Página Inicial](https://github.com/Matheus1415/NearbyApp/blob/main/image/bem-vindo.jpeg)
![Foto da Home](https://github.com/Matheus1415/NearbyApp/blob/main/image/home.jpeg)
![Foto do Estabelecimento](https://github.com/Matheus1415/NearbyApp/blob/main/image/estabelecimento.jpeg)

## 🚀 Como Usar

1. Clone o repositório:

    ```bash
    git clone https://github.com/Matheus1415/NearbyApp.git
    ```

2. Instale as dependências:

    ```bash
    cd NearbyApp
    npm install
    ```

3. Configure as Permissões
Se o projeto utilizar recursos como câmera ou localização, adicione as permissões necessárias ao arquivo app.json ou app.config.js:

```bash
{
    "expo": {
        "platforms": ["ios", "android"],
        "permissions": ["CAMERA", "LOCATION"]
    }
}
```

4. Inicie o Projeto
Para rodar o aplicativo no seu dispositivo ou emulador, execute:
```bash
expo start
```

5. Inicie a API Node.js
Navegue até a pasta da API e inicie o servidor:
```bash
cd ./api
npm start
```
6. Acesse o Site de QR Codes (Opcional)
[Qrcode](https://qrfy.com/pt)

## 📁 Estrutura do Projeto

```bash
project-root/
├── .expo/
│   └── type+web/          # Tipos e configurações específicas para o projeto web (Expo).
├── api/
│   ├── prisma/
│   │   └── migration/     # Arquivos de migração do banco de dados.
│   └── src/
│       ├── controller/    # Controladores de API.
│       ├── model/         # Modelos do banco de dados.
│       ├── router/        # Definição de rotas.
│       ├── middleware/    # Middleware para processamento de requisições.
│       ├── utils/         # Funções utilitárias.
│       └── database/      # Conexão e configuração do banco de dados.
├── src/
│   ├── app/
│   │   ├── iutils/       # Funções utilitárias para o frontend.
│   │   ├── style/        # Estilos da aplicação.
│   │   ├── service/      # Serviços de comunicação com a API.
│   │   └── components/   # Componentes reutilizáveis.
└── package.json          # Dependências do projeto.


```

## ⚙️ Tecnologias Utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" width="40" height="40">
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40">
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40">
  <img src="https://skillicons.dev/icons?i=sass" alt="Sass" width="40" height="40">
  <img src="https://skillicons.dev/icons?i=reactnative" alt="React Native" width="40" height="40">
  <img src="https://skillicons.dev/icons?i=expo" alt="Expo" width="40" height="40">
</p>


- React Native: Framework principal para - construção da interface.
- Expo: Ferramenta para desenvolvimento e execução do aplicativo.
- expo-location: Gerenciamento de localização do dispositivo.
- expo-camera: Utilização da câmera para leitura de QR Codes.
- React Navigation: Gerenciamento de rotas e navegação entre telas.

## 🤝 Contribuindo

1. Faça um fork do repositório.

2. Crie um branch para seu recurso

    ```bash
    git checkout -b ALR-feature-01
    ```

3. Este projeto foi iniciado com o comando:

    ```bash
    git commit -m "Adiciona nova funcionalidade"
    ```
4. Faça suas alterações:

    ```bash
    git push origin ALR-feature-01
    ```

    Essa estrutura deve atender bem às suas necessidades! Se precisar adicionar mais detalhes ou ajustar algo, é só avisar. 🚀
