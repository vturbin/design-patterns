export interface Navigation {
    navigate(): void;
}

export interface NavigationFactory {
    createNavigation(): Navigation;
}

class CarNavigation implements Navigation {
    navigate(): void {
        console.log("Navigating using car");
    }
}

class WalkingNavigation implements Navigation {
    navigate(): void {
        console.log("Navigating by walking");
    }
}

class CarNavigationFactory implements NavigationFactory {
    createNavigation(): Navigation {
        return new CarNavigation();
    }
}

class WalkingNavigationFactory implements NavigationFactory {
    createNavigation(): Navigation {
        return new WalkingNavigation();
    }
}

class NavigationFactoryProvider {
    private navigationFactory: NavigationFactory;

    setNavigationFactory(navigationFactory: NavigationFactory): void {
        this.navigationFactory = navigationFactory;
    }

    navigate(): void {
        const navigation = this.navigationFactory.createNavigation();
        navigation.navigate();
    }
}

const navigationFactoryProvider = new NavigationFactoryProvider();

navigationFactoryProvider.setNavigationFactory(new CarNavigationFactory());
navigationFactoryProvider.navigate(); // Output: Navigating using car

navigationFactoryProvider.setNavigationFactory(new WalkingNavigationFactory());
navigationFactoryProvider.navigate(); // Output: Navigating by walking