"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarNavigation {
    navigate() {
        console.log("Navigating using car");
    }
}
class WalkingNavigation {
    navigate() {
        console.log("Navigating by walking");
    }
}
class CarNavigationFactory {
    createNavigation() {
        return new CarNavigation();
    }
}
class WalkingNavigationFactory {
    createNavigation() {
        return new WalkingNavigation();
    }
}
class NavigationFactoryProvider {
    setNavigationFactory(navigationFactory) {
        this.navigationFactory = navigationFactory;
    }
    navigate() {
        const navigation = this.navigationFactory.createNavigation();
        navigation.navigate();
    }
}
const navigationFactoryProvider = new NavigationFactoryProvider();
navigationFactoryProvider.setNavigationFactory(new CarNavigationFactory());
navigationFactoryProvider.navigate(); // Output: Navigating using car
navigationFactoryProvider.setNavigationFactory(new WalkingNavigationFactory());
navigationFactoryProvider.navigate(); // Output: Navigating by walking
