// Relates to the Memento in UML diagram
export class EditorState {
    constructor(private content: string) {}
    
    getContent() {
      return this.content;
    }
  }

  
// Relates to the Originator in UML diagram
class Editor {
    private content: string = "";
  
    setContent(content: string) {
      this.content = content;
    }
    
    getContent() {
      return this.content;
    }
    
    save() {
      return new EditorState(this.content);
    }
    
    restore(state: EditorState) {
      this.content = state.getContent();
    }
  }

// Relates to the Caretaker in UML diagram
export class History {
    private states: EditorState[] = [];
    
    save(state: EditorState) {
      this.states.push(state);
    }
    
    undo(): EditorState | undefined {
      return this.states.pop();
    }
  }
  
const editor = new Editor();
const history = new History();

editor.setContent("First text");
history.save(editor.save());

editor.setContent("Second text");
history.save(editor.save());

editor.setContent("Third text");
const previousState = history.undo();

if (previousState) {
editor.restore(previousState);
console.log(editor.getContent()); // Output: Second text
}
  