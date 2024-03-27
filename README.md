# [Matcher]
言語学習を希望する人たちが気軽に交流できる、掲示板風のマッチングアプリ

## DEMO
https://github.com/dev-satoshi/supporters-hackathon_2023_vol10/assets/102169197/7db71c6e-157c-41e4-9bc9-e5bf3bf4b992



## プロジェクト構成

- `/frontend`: Next.jsを使用したフロントエンド
- `/backend`: Goを使用したバックエンド
- `docker-compose.yml`: 各サービスのDockerコンテナ設定

## 前提条件

- Dockerがインストールされていること
- Docker Composeがインストールされていること

## 開始方法

1. **リポジトリをクローンします:**
    ```bash
    git clone [リポジトリのURL] [クローンするディレクトリ名]
    cd [クローンするディレクトリ名]
    ```

2. **必要な環境変数を設定します:**
    - 各サービスディレクトリ内にある`.env.example`ファイルをコピーして `.env.development` などの名前で新しいファイルを作成します。その後、適切な値を設定します。


3. **Dockerコンテナを起動します:**
    ```bash
    # dockerコンテナをビルド、以後dockerfile　compose.ymlに変更が入るたびに行う必要があるが、基本的に一度でokayなはず
    docker-compose build

    # dockerコンテナを起動
    docker-compose up -d
    ```
   `-d`オプションを使用することで、コンテナをバックグラウンドで起動します。

5. **コンテナのログを確認したい場合:**
    ```bash
    docker-compose logs -f [サービス名]
    ```

6. **コンテナを停止するには:**
    ```bash
    docker-compose down
    ```

## その他のユーティリティコマンド

- **特定のサービスのコンテナに入る:**
    ```bash
    docker-compose exec [サービス名] /bin/sh
    ```

- **全てのコンテナ、ネットワーク、ボリュームを削除する:**
    ```bash
    docker-compose down -v
    ```

