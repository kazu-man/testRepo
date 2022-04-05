//mysqlユーザー作成後以下コマンドで権限とパスワードの設定を変更する
//ALTER USER 'strapi'@'localhost' IDENTIFIED WITH mysql_native_password BY 'strapi';
// grant all on *.* to strapi@localhost;
//root@root.com
//rootRoot000

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
