const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')

// Associate the models
Restaurant.hasMany(Menu, {
    foreignKey: 'restaurantId',
    as: 'menus'
  });
  
  Menu.belongsTo(Restaurant, {
    foreignKey: 'restaurantId',
    as: 'restaurant'
  });

module.exports = { Restaurant, Menu }
