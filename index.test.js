const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const restaurant = await Restaurant.create({
            name: 'Test Restaurant',
            location: 'Test Location',
            cuisine: 'Test Cuisine'
        });
        expect(restaurant.name).toEqual('Test Restaurant');
        expect(restaurant.location).toEqual('Test Location');
        expect(restaurant.cuisine).toEqual('Test Cuisine');
    });

    test('can create a Menu', async () => {
        const menu = await Menu.create({
            title: 'Test Menu'
        });
        expect(menu.title).toEqual('Test Menu');
    });

    test('can update a Restaurant instance', async () => {
        const restaurant = await Restaurant.create({
            name: 'Old Name',
            location: 'Old Location',
            cuisine: 'Old Cuisine'
        });
        await restaurant.update({ name: 'New Name' });
        const updatedRestaurant = await Restaurant.findByPk(restaurant.id);
        expect(updatedRestaurant.name).toEqual('New Name');
    });

    test('can update a Menu instance', async () => {
        const menu = await Menu.create({
            title: 'Old Title'
        });
        await menu.update({ title: 'New Title' });
        const updatedMenu = await Menu.findByPk(menu.id);
        expect(updatedMenu.title).toEqual('New Title');
    });

    test('can find Restaurants', async () => {
        await Restaurant.create({
            name: 'Find Me Restaurant',
            location: 'Findable Location',
            cuisine: 'Findable Cuisine'
        });
        const restaurants = await Restaurant.findAll({
            where: { name: 'Find Me Restaurant' }
        });
        expect(restaurants.length).toBeGreaterThan(0);
        expect(restaurants[0].name).toEqual('Find Me Restaurant');
    });

    test('can find Menus', async () => {
        await Menu.create({
            title: 'Find Me Menu'
        });
        const menus = await Menu.findAll({
            where: { title: 'Find Me Menu' }
        });
        expect(menus.length).toBeGreaterThan(0);
        expect(menus[0].title).toEqual('Find Me Menu');
    });

    test('can delete a Restaurant instance', async () => {
        const restaurant = await Restaurant.create({
            name: 'Delete Me Restaurant',
            location: 'Deletable Location',
            cuisine: 'Deletable Cuisine'
        });
        await restaurant.destroy();
        const deletedRestaurant = await Restaurant.findByPk(restaurant.id);
        expect(deletedRestaurant).toBeNull();
    });

    test('can delete a Menu instance', async () => {
        const menu = await Menu.create({
            title: 'Delete Me Menu'
        });
        await menu.destroy();
        const deletedMenu = await Menu.findByPk(menu.id);
        expect(deletedMenu).toBeNull();
    });
});