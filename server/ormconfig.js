module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '0000',
  database: 'trains_schedule',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
