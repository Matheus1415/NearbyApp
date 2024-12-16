# NearbyApp

Este aplicativo desenvolvido com **React Native** e **Expo** permite aos usuários visualizar a localização de estabelecimentos próximos, acessar suas páginas e resgatar cupons utilizando QR Codes.

## Funcionalidades

- **Localização de Estabelecimentos Próximos**: Mostra os estabelecimentos mais próximos com base na localização do usuário.
- **Acesso às Páginas dos Estabelecimentos**: O usuário pode acessar mais informações sobre cada estabelecimento ao clicar neles.
- **Resgatar Cupons por QR Code**: O usuário pode escanear QR Codes presentes nas páginas dos estabelecimentos para resgatar cupons de desconto.

## Tecnologias Utilizadas

- **React Native**: Framework para construir o aplicativo mobile.
- **Expo**: Ferramenta para facilitar o desenvolvimento de apps React Native.
- **expo-location**: Para obter a localização do usuário e mostrar os estabelecimentos próximos.
- **expo-camera**: Para capturar e ler QR Codes utilizando a câmera do dispositivo.
- **React Navigation**: Para gerenciar a navegação entre as telas do aplicativo.

## Pré-requisitos

- **Node.js**: Versão 14.x ou superior.
- **Expo CLI**: Instale o Expo CLI globalmente, se ainda não o fez:
  

    ### **Passo 1: Clonar o Repositório**
    Clone o repositório do projeto para sua máquina local:

    ```bash
    git clone https://github.com/Matheus1415/NearbyApp.git
    ```

    ### **Passo 2: Instale as dependências:**
    Instale todas as dependências do projeto utilizando o NPM:

    ```bash
    npm install
    ```

    ### **Passo 3: Configure as permissões**
    Se o projeto utilizar recursos de câmera ou localização, como o expo-camera ou expo-location, não se esqueça de adicionar as permissões necessárias nos arquivos de configuração app.json ou app.config.js.

    ```bash
    {
    "expo": {
        "platforms": ["ios", "android"],
        "permissions": [
        "CAMERA",
        "LOCATION"
        ]
    }
    }

    ```

    ### **Passo 4: Rodando o projeto:**
    Para rodar o aplicativo no seu dispositivo ou emulador, execute:

    ```bash
    expo start
    ```

    ### **Passo 5: Api Node**
    Execute o comando abaixo

    ```bash
    cd ./api
    ```

    ```bash
    npm start
    ```
    ### **Passo 6(opcional): Abrir o site de QRcode**
    [Qrcode](https://qrfy.com/pt)
  
    #### Fotos do aplicativo
    ![Foto da Página Inicial](https://github.com/Matheus1415/NearbyApp/blob/main/image/bem-vindo.jpeg)
    ![Foto da Home](https://github.com/Matheus1415/NearbyApp/blob/main/image/home.jpeg)
    ![Foto do Estabelecimento](https://github.com/Matheus1415/NearbyApp/blob/main/image/estabelecimento.jpeg)
