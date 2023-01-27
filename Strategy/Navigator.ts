export interface NavigationStrategy {
    navigate(): void;
}

class CarNavigation implements NavigationStrategy {
    navigate(): void {
        console.log("Navigating using car");
    }
}

class WalkingNavigation implements NavigationStrategy {
    navigate(): void {
        console.log("Navigating by walking");
    }
}

class NavigationContext {
    private navigationStrategy: NavigationStrategy;

    setNavigationStrategy(navigationStrategy: NavigationStrategy): void {
        this.navigationStrategy = navigationStrategy;
    }

    navigate(): void {
        this.navigationStrategy.navigate();
    }
}

const navigationContext = new NavigationContext();

navigationContext.setNavigationStrategy(new CarNavigation());
navigationContext.navigate(); // Output: Navigating using car

navigationContext.setNavigationStrategy(new WalkingNavigation());
navigationContext.navigate(); // Output: Navigating by walking