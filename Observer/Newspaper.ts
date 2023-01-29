export interface Observer {
    update: (newspaper: string) => void;
  }
  
  class UserSubscriber implements Observer {
    private newspaper: string;

    constructor(private name: string) {}
    
    update(newspaper: string) {
      this.newspaper = newspaper;
      this.display();
    }
    
    display() {
      console.log(`${this.name} received newspaper: ${this.newspaper}`);
    }
  }
  
  class NewspaperAgency {
    private newspaper: string;
    private observers: Observer[] = [];
    
    addObserver(observer: Observer) {
      this.observers.push(observer);
    }
    
    removeObserver(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
    
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this.newspaper));
    }
    
    publishNewspaper(newspaper: string) {
      this.newspaper = newspaper;
      this.notifyObservers();
    }
  }
  
  const newspaperAgency = new NewspaperAgency();
  const subscriber1 = new UserSubscriber('Jack');
  const subscriber2 = new UserSubscriber('Daniels');
  
  newspaperAgency.addObserver(subscriber1);
  newspaperAgency.addObserver(subscriber2);
  
  newspaperAgency.publishNewspaper("Today's edition of The Times");
  
  