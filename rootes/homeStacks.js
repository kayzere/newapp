import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Menu Princ',
/*             headerStyle: {
                 backgroundColor: 'red' 
                } */
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Details',
/*             headerStyle: {
                 backgroundColor: 'red' 
                } */
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#912', height: 60 
           }
    }
});

export default HomeStack;