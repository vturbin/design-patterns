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
class NavigationContext {
    setNavigationStrategy(navigationStrategy) {
        this.navigationStrategy = navigationStrategy;
    }
    navigate() {
        this.navigationStrategy.navigate();
    }
}
const navigationContext = new NavigationContext();
navigationContext.setNavigationStrategy(new CarNavigation());
navigationContext.navigate(); // Output: Navigating using car
navigationContext.setNavigationStrategy(new WalkingNavigation());
navigationContext.navigate(); // Output: Navigating by walking
