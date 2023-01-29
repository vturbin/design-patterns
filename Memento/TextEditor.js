"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = exports.EditorState = void 0;
// Relates to the Memento in UML diagram
class EditorState {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
exports.EditorState = EditorState;
// Relates to the Originator in UML diagram
class Editor {
    constructor() {
        this.content = "";
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    save() {
        return new EditorState(this.content);
    }
    restore(state) {
        this.content = state.getContent();
    }
}
// Relates to the Originator in UML diagram
class History {
    constructor() {
        this.states = [];
    }
    save(state) {
        this.states.push(state);
    }
    undo() {
        return this.states.pop();
    }
}
exports.History = History;
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
