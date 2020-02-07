import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About menu',
/*             headerStyle: {
                 backgroundColor: 'red' 
                } */
        },
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#912', height: 60 
           }
    }
});

export default AboutStack;