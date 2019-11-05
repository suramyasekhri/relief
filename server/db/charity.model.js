module.exports = {
  createTable: () => `
  create table if not exists charity (
    id serial 
  )
  ` // creates charity table if not exists
};
