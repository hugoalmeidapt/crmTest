// Type definitions for alertify 0.3.11
// Project: http://fabien-d.github.io/alertify.js/
// Definitions by: John Jeffery <http://github.com/jjeffery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var alertify: alertify.IAlertifyStatic;

declare namespace alertify {
    interface IAlertifyStatic {
        /**
         * Create an alert dialog box
         * @param message   The message passed from the callee
         * @param fn        Callback function
         * @param cssClass  Class(es) to append to dialog box
         * @return alertify (ie this)
         * @since 0.0.1
         */
        alert(message: string, fn?: Function, cssClass?: string): IAlertifyStatic;

        /**
         * Create a confirm dialog box
         * @param message   The message passed from the callee
         * @param fn        Callback function
         * @param cssClass  Class(es) to append to dialog box
         * @return alertify (ie this)
         * @since 0.0.1
         */
        confirm(message: string, fn?: Function, cssClass?: string): IAlertifyStatic;

        /**
         * Extend the log method to create custom methods
         * @param type  Custom method name
         * @return function for logging
         * @since 0.0.1
         */
        extend(type: string): (message: string, wait?: number) => IAlertifyStatic;

        /**
         * Initialize Alertify and create the 2 main elements.
         * Initialization will happen automatically on the first
         * use of alert, confirm, prompt or log.
         * @since 0.0.1
         */
        init(): void;

        /**
         * Show a new log message box
         * @param message   The message passed from the callee
         * @param type      Optional type of log message
         * @param wait      Optional time (in ms) to wait before auto-hiding
         * @return alertify (ie this)
         * @since 0.0.1
         */
        log(message: string, type?: string, wait?: number): IAlertifyStatic;

        /**
         * Create a prompt dialog box
         * @param message   The message passed from the callee
         * @param fn        Callback function
         * @param placeholder Default value for prompt input
         * @param cssClass  Class(es) to append to dialog
         * @return alertify (ie this)
         * @since 0.0.1
         */
        prompt(message: string, fn?: Function, placeholder?: string, cssClass?: string): IAlertifyStatic;

        /**
         * Shorthand for log messages
         * @param message The message passed from the callee
         * @return alertify (ie this)
         * @since 0.0.1
         */
        success(message: string): IAlertifyStatic;

        /**
         * Shorthand for log messages
         * @param message The message passed from the callee
         * @return alertify (ie this)
         * @since 0.0.1
         */
        error(message: string): IAlertifyStatic;

        /**
         * Used to set alertify properties
         * @param Properties
         * @since 0.2.11
         */
        set(args: IProperties): void;

        /**
         * The labels used for dialog buttons
         */
        labels: ILabels;

        /**
         * Attaches alertify.error to window.onerror method
         * @since 0.3.8
         */
        debug(): void;
    }

    /**
     * Properties for alertify.set function
     */
    interface IProperties {
        /** Default value for milliseconds display of log messages */
        delay?: number;

        /** Default values for display of labels */
        labels?: ILabels;

        /** Default button for focus */
        buttonFocus?: string;

        /** Should buttons be displayed in reverse order */
        buttonReverse?: boolean;
    }

    /** Labels for altertify.set function */
    interface ILabels {
        ok?: string;
        cancel?: string;
    }
}// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: mihailik <https://github.com/mihailik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function CodeMirror(host: HTMLElement, options?: CodeMirror.EditorConfiguration): CodeMirror.Editor;
declare function CodeMirror(callback: (host: HTMLElement) => void , options?: CodeMirror.EditorConfiguration): CodeMirror.Editor;

declare namespace CodeMirror {
    export var Doc : CodeMirror.DocConstructor;
    export var Pos: CodeMirror.PositionConstructor;
    export var Pass: any;

    function fromTextArea(host: HTMLTextAreaElement, options?: EditorConfiguration): CodeMirror.EditorFromTextArea;

    var version: string;

    /** If you want to define extra methods in terms of the CodeMirror API, it is possible to use defineExtension.
    This will cause the given value(usually a method) to be added to all CodeMirror instances created from then on. */
    function defineExtension(name: string, value: any): void;

    /** Like defineExtension, but the method will be added to the interface for Doc objects instead. */
    function defineDocExtension(name: string, value: any): void;

    /** Similarly, defineOption can be used to define new options for CodeMirror.
    The updateFunc will be called with the editor instance and the new value when an editor is initialized,
    and whenever the option is modified through setOption. */
    function defineOption(name: string, default_: any, updateFunc: Function): void;

    /** If your extention just needs to run some code whenever a CodeMirror instance is initialized, use CodeMirror.defineInitHook.
    Give it a function as its only argument, and from then on, that function will be called (with the instance as argument)
    whenever a new CodeMirror instance is initialized. */
    function defineInitHook(func: Function): void;

    /** Registers a helper value with the given name in the given namespace (type). This is used to define functionality
    that may be looked up by mode. Will create (if it doesn't already exist) a property on the CodeMirror object for
    the given type, pointing to an object that maps names to values. I.e. after doing
    CodeMirror.registerHelper("hint", "foo", myFoo), the value CodeMirror.hint.foo will point to myFoo. */
    function registerHelper(namespace: string, name: string, helper: any): void;


    function on(element: any, eventName: string, handler: Function): void;
    function off(element: any, eventName: string, handler: Function): void;

    /** Fired whenever a change occurs to the document. changeObj has a similar type as the object passed to the editor's "change" event,
    but it never has a next property, because document change events are not batched (whereas editor change events are). */
    function on(doc: Doc, eventName: 'change', handler: (instance: Doc, change: EditorChange) => void ): void;
    function off(doc: Doc, eventName: 'change', handler: (instance: Doc, change: EditorChange) => void ): void;

    /** See the description of the same event on editor instances. */
    function on(doc: Doc, eventName: 'beforeChange', handler: (instance: Doc, change: EditorChangeCancellable) => void ): void;
    function off(doc: Doc, eventName: 'beforeChange', handler: (instance: Doc, change: EditorChangeCancellable) => void ): void;

    /** Fired whenever the cursor or selection in this document changes. */
    function on(doc: Doc, eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;
    function off(doc: Doc, eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;

    /** Equivalent to the event by the same name as fired on editor instances. */
    function on(doc: Doc, eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: Position; anchor: Position; }) => void ): void;
    function off(doc: Doc, eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: Position; anchor: Position; }) => void ): void;

    /** Will be fired when the line object is deleted. A line object is associated with the start of the line.
    Mostly useful when you need to find out when your gutter markers on a given line are removed. */
    function on(line: LineHandle, eventName: 'delete', handler: () => void ): void;
    function off(line: LineHandle, eventName: 'delete', handler: () => void ): void;

    /** Fires when the line's text content is changed in any way (but the line is not deleted outright).
    The change object is similar to the one passed to change event on the editor object. */
    function on(line: LineHandle, eventName: 'change', handler: (line: LineHandle, change: EditorChange) => void ): void;
    function off(line: LineHandle, eventName: 'change', handler: (line: LineHandle, change: EditorChange) => void ): void;

    /** Fired when the cursor enters the marked range. From this event handler, the editor state may be inspected but not modified,
    with the exception that the range on which the event fires may be cleared. */
    function on(marker: TextMarker, eventName: 'beforeCursorEnter', handler: () => void ): void;
    function off(marker: TextMarker, eventName: 'beforeCursorEnter', handler: () => void ): void;

    /** Fired when the range is cleared, either through cursor movement in combination with clearOnEnter or through a call to its clear() method.
    Will only be fired once per handle. Note that deleting the range through text editing does not fire this event,
    because an undo action might bring the range back into existence. */
    function on(marker: TextMarker, eventName: 'clear', handler: () => void ): void;
    function off(marker: TextMarker, eventName: 'clear', handler: () => void ): void;

    /** Fired when the last part of the marker is removed from the document by editing operations. */
    function on(marker: TextMarker, eventName: 'hide', handler: () => void ): void;
    function off(marker: TextMarker, eventName: 'hide', handler: () => void ): void;

    /** Fired when, after the marker was removed by editing, a undo operation brought the marker back. */
    function on(marker: TextMarker, eventName: 'unhide', handler: () => void ): void;
    function off(marker: TextMarker, eventName: 'unhide', handler: () => void ): void;

    /** Fired whenever the editor re-adds the widget to the DOM. This will happen once right after the widget is added (if it is scrolled into view),
    and then again whenever it is scrolled out of view and back in again, or when changes to the editor options
    or the line the widget is on require the widget to be redrawn. */
    function on(line: LineWidget, eventName: 'redraw', handler: () => void ): void;
    function off(line: LineWidget, eventName: 'redraw', handler: () => void ): void;

    /** Various CodeMirror-related objects emit events, which allow client code to react to various situations.
    Handlers for such events can be registered with the on and off methods on the objects that the event fires on.
    To fire your own events, use CodeMirror.signal(target, name, args...), where target is a non-DOM-node object. */
    function signal(target: any, name: string, ...args: any[]): void;

    interface Editor {

        /** Tells you whether the editor currently has focus. */
        hasFocus(): boolean;

        /** Used to find the target position for horizontal cursor motion.start is a { line , ch } object,
        amount an integer(may be negative), and unit one of the string "char", "column", or "word".
        Will return a position that is produced by moving amount times the distance specified by unit.
        When visually is true , motion in right - to - left text will be visual rather than logical.
        When the motion was clipped by hitting the end or start of the document, the returned value will have a hitSide property set to true. */
        findPosH(start: CodeMirror.Position, amount: number, unit: string, visually: boolean): { line: number; ch: number; hitSide?: boolean; };

        /** Similar to findPosH , but used for vertical motion.unit may be "line" or "page".
        The other arguments and the returned value have the same interpretation as they have in findPosH. */
        findPosV(start: CodeMirror.Position, amount: number, unit: string): { line: number; ch: number; hitSide?: boolean; };


        /** Change the configuration of the editor. option should the name of an option, and value should be a valid value for that option. */
        setOption(option: string, value: any): void;

        /** Retrieves the current value of the given option for this editor instance. */
        getOption(option: string): any;

        /** Attach an additional keymap to the editor.
        This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
        Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
        the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
        in which case they end up below other keymaps added with this method. */
        addKeyMap(map: any, bottom?: boolean): void;

        /** Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
        which will be compared against the name property of the active keymaps. */
        removeKeyMap(map: any): void;

        /** Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
        For example, the search add - on uses it to highlight the term that's currently being searched.
        mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
        Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
        to override the styling of the base mode entirely, instead of the two being applied together. */
        addOverlay(mode: any, options?: any): void;

        /** Pass this the exact argument passed for the mode parameter to addOverlay to remove an overlay again. */
        removeOverlay(mode: any): void;


        /** Retrieve the currently active document from an editor. */
        getDoc(): CodeMirror.Doc;

        /** Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor. */
        swapDoc(doc: CodeMirror.Doc): CodeMirror.Doc;

        /** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
        getValue(seperator?: string): string;

        /** Set the content of the current editor document. */
        setValue(content: string): void;

        /** Sets the gutter marker for the given gutter (identified by its CSS class, see the gutters option) to the given value.
        Value can be either null, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line. */
        setGutterMarker(line: any, gutterID: string, value: HTMLElement): CodeMirror.LineHandle;

        /** Remove all gutter markers in the gutter with the given ID. */
        clearGutter(gutterID: string): void;

        /** Set a CSS class name for the given line.line can be a number or a line handle.
        where determines to which element this class should be applied, can can be one of "text" (the text element, which lies in front of the selection),
        "background"(a background element that will be behind the selection),
        or "wrap" (the wrapper node that wraps all of the line's elements, including gutter elements).
        class should be the name of the class to apply. */
        addLineClass(line: any, where: string, _class_: string): CodeMirror.LineHandle;

        /** Remove a CSS class from a line.line can be a line handle or number.
        where should be one of "text", "background", or "wrap"(see addLineClass).
        class can be left off to remove all classes for the specified node, or be a string to remove only a specific class. */
        removeLineClass(line: any, where: string, class_: string): CodeMirror.LineHandle;

        /** Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle. */
        lineInfo(line: any): {
            line: any;
            handle: any;
            text: string;
            /** Object mapping gutter IDs to marker elements. */
            gutterMarks: any;
            textClass: string;
            bgClass: string;
            wrapClass: string;
            /** Array of line widgets attached to this line. */
            widgets: any;
        };

        /** Puts node, which should be an absolutely positioned DOM node, into the editor, positioned right below the given { line , ch } position.
        When scrollIntoView is true, the editor will ensure that the entire node is visible (if possible).
        To remove the widget again, simply use DOM methods (move it somewhere else, or call removeChild on its parent). */
        addWidget(pos: CodeMirror.Position, node: HTMLElement, scrollIntoView: boolean): void;

        /** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
        line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
        options, when given, should be an object that configures the behavior of the widget.
        Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
        addLineWidget(line: any, node: HTMLElement, options?: {
            /** Whether the widget should cover the gutter. */
            coverGutter: boolean;
            /** Whether the widget should stay fixed in the face of horizontal scrolling. */
            noHScroll: boolean;
            /** Causes the widget to be placed above instead of below the text of the line. */
            above: boolean;
            /** When true, will cause the widget to be rendered even if the line it is associated with is hidden. */
            showIfHidden: boolean;
        }): CodeMirror.LineWidget;


        /** Programatically set the size of the editor (overriding the applicable CSS rules).
        width and height height can be either numbers(interpreted as pixels) or CSS units ("100%", for example).
        You can pass null for either of them to indicate that that dimension should not be changed. */
        setSize(width: any, height: any): void;

        /** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
        scrollTo(x: number, y: number): void;

        /** Get an { left , top , width , height , clientWidth , clientHeight } object that represents the current scroll position, the size of the scrollable area,
        and the size of the visible area(minus scrollbars). */
        getScrollInfo(): {
            left: any;
            top: any;
            width: any;
            height: any;
            clientWidth: any;
            clientHeight: any;
        }

        /** Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
        scrollIntoView(pos: CodeMirror.Position, margin?: number): void;

        /** Scrolls the given element into view. pos is a { left , top , right , bottom } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
        scrollIntoView(pos: { left: number; top: number; right: number; bottom: number; }, margin: number): void;

        /** Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
        scrollIntoView(pos: { line: number, ch: number }, margin?: number): void;

        /** Scrolls the given element into view. pos is a { from, to } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
        scrollIntoView(pos: { from: CodeMirror.Position, to: CodeMirror.Position }, margin: number): void;

        /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local" , they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
        cursorCoords(where: boolean, mode: string): { left: number; top: number; bottom: number; };

        /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local" , they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where specifies the precise position at which you want to measure. */
        cursorCoords(where: CodeMirror.Position, mode: string): { left: number; top: number; bottom: number; };

        /** Returns the position and dimensions of an arbitrary character.pos should be a { line , ch } object.
        This differs from cursorCoords in that it'll give the size of the whole character,
        rather than just the position that the cursor would have when it would sit at that position. */
        charCoords(pos: CodeMirror.Position, mode: string): { left: number; right: number; top: number; bottom: number; };

        /** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
        The optional mode parameter determines relative to what the coordinates are interpreted. It may be "window" , "page"(the default) , or "local". */
        coordsChar(object: { left: number; top: number; }, mode?: string): CodeMirror.Position;

        /** Returns the line height of the default font for the editor. */
        defaultTextHeight(): number;

        /** Returns the pixel width of an 'x' in the default font for the editor.
        (Note that for non - monospace fonts , this is mostly useless, and even for monospace fonts, non - ascii characters might have a different width). */
        defaultCharWidth(): number;

        /** Returns a { from , to } object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document.
        In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it.
        See also the viewportChange event. */
        getViewport(): { from: number; to: number };

        /** If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it,
        you should probably follow up by calling this method to ensure CodeMirror is still looking as intended. */
        refresh(): void;


        /** Retrieves information about the token the current mode found before the given position (a {line, ch} object). */
        getTokenAt(pos: CodeMirror.Position): {
            /** The character(on the given line) at which the token starts. */
            start: number;
            /** The character at which the token ends. */
            end: number;
            /** The token's string. */
            string: string;
            /** The token type the mode assigned to the token, such as "keyword" or "comment" (may also be null). */
            type: string;
            /** The mode's state at the end of this token. */
            state: any;
        };

        /** Returns the mode's parser state, if any, at the end of the given line number.
        If no line number is given, the state at the end of the document is returned.
        This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line. */
        getStateAfter(line?: number): any;

        /** CodeMirror internally buffers changes and only updates its DOM structure after it has finished performing some operation.
        If you need to perform a lot of operations on a CodeMirror instance, you can call this method with a function argument.
        It will call the function, buffering up all changes, and only doing the expensive update after the function returns.
        This can be a lot faster. The return value from this method will be the return value of your function. */
        operation<T>(fn: ()=> T): T;

        /** Adjust the indentation of the given line.
        The second argument (which defaults to "smart") may be one of:
        "prev" Base indentation on the indentation of the previous line.
        "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
        "add" Increase the indentation of the line by one indent unit.
        "subtract" Reduce the indentation of the line. */
        indentLine(line: number, dir?: string): void;


        /** Give the editor focus. */
        focus(): void;

        /** Returns the hidden textarea used to read input. */
        getInputField(): HTMLTextAreaElement;

        /** Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance. */
        getWrapperElement(): HTMLElement;

        /** Returns the DOM node that is responsible for the scrolling of the editor. */
        getScrollerElement(): HTMLElement;

        /** Fetches the DOM node that contains the editor gutters. */
        getGutterElement(): HTMLElement;



        /** Events are registered with the on method (and removed with the off method).
        These are the events that fire on the instance object. The name of the event is followed by the arguments that will be passed to the handler.
        The instance argument always refers to the editor instance. */
        on(eventName: string, handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: string, handler: (instance: CodeMirror.Editor) => void ): void;

        /** Fires every time the content of the editor is changed. */
        on(eventName: 'change', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void ): void;
        off(eventName: 'change', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void ): void;

        /** Like the "change" event, but batched per operation, passing an
         * array containing all the changes that happened in the operation.
         * This event is fired after the operation finished, and display
         * changes it makes will trigger a new operation. */
        on(eventName: 'changes', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void ): void;
        off(eventName: 'changes', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void ): void;

        /** This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
        The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
        Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
        Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
        probably cause the editor to become corrupted. */
        on(eventName: 'beforeChange', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void ): void;
        off(eventName: 'beforeChange', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void ): void;

        /** Will be fired when the cursor or selection moves, or any change is made to the editor content. */
        on(eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;

        /** This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
        Handlers for this event have the same restriction as "beforeChange" handlers � they should not do anything to directly update the state of the editor. */
        on(eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: CodeMirror.Position; anchor: CodeMirror.Position; }) => void ): void;
        off(eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: CodeMirror.Position; anchor: CodeMirror.Position; }) => void ): void;

        /** Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
        The from and to arguments give the new start and end of the viewport. */
        on(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor, from: number, to: number) => void ): void;
        off(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor, from: number, to: number) => void ): void;

        /** Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
        the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
        and the raw mousedown event object as fourth argument. */
        on(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void ): void;
        off(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void ): void;

        /** Fires whenever the editor is focused. */
        on(eventName: 'focus', handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: 'focus', handler: (instance: CodeMirror.Editor) => void ): void;

        /** Fires whenever the editor is unfocused. */
        on(eventName: 'blur', handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: 'blur', handler: (instance: CodeMirror.Editor) => void ): void;

        /** Fires when the editor is scrolled. */
        on(eventName: 'scroll', handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: 'scroll', handler: (instance: CodeMirror.Editor) => void ): void;

        /** Will be fired whenever CodeMirror updates its DOM display. */
        on(eventName: 'update', handler: (instance: CodeMirror.Editor) => void ): void;
        off(eventName: 'update', handler: (instance: CodeMirror.Editor) => void ): void;

        /** Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
        The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor. */
        on(eventName: 'renderLine', handler: (instance: CodeMirror.Editor, line: number, element: HTMLElement) => void ): void;
        off(eventName: 'renderLine', handler: (instance: CodeMirror.Editor, line: number, element: HTMLElement) => void ): void;

        /** Expose the state object, so that the Editor.state.completionActive property is reachable*/
        state: any;
    }

    interface EditorFromTextArea extends Editor {

        /** Copy the content of the editor into the textarea. */
        save(): void;

        /** Remove the editor, and restore the original textarea (with the editor's current content). */
        toTextArea(): void;

        /** Returns the textarea that the instance was based on. */
        getTextArea(): HTMLTextAreaElement;
    }

    interface DocConstructor {
        new (text: string, mode?: any, firstLineNumber?: number, lineSep?: string): Doc;
        (text: string, mode?: any, firstLineNumber?: number, lineSep?: string): Doc;
    }

    interface Doc {
        /** Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
        getValue(seperator?: string): string;

        /** Set the editor content. */
        setValue(content: string): void;

        /** Get the text between the given points in the editor, which should be {line, ch} objects.
        An optional third argument can be given to indicate the line separator string to use (defaults to "\n"). */
        getRange(from: Position, to: CodeMirror.Position, seperator?: string): string;

        /** Replace the part of the document between from and to with the given string.
        from and to must be {line, ch} objects. to can be left off to simply insert the string at position from. */
        replaceRange(replacement: string, from: CodeMirror.Position, to: CodeMirror.Position): void;

        /** Get the content of line n. */
        getLine(n: number): string;

        /** Set the content of line n. */
        setLine(n: number, text: string): void;

        /** Remove the given line from the document. */
        removeLine(n: number): void;

        /** Get the number of lines in the editor. */
        lineCount(): number;

        /** Get the first line of the editor. This will usually be zero but for linked sub-views,
        or documents instantiated with a non-zero first line, it might return other values. */
        firstLine(): number;

        /** Get the last line of the editor. This will usually be lineCount() - 1, but for linked sub-views, it might return other values. */
        lastLine(): number;

        /** Fetches the line handle for the given line number. */
        getLineHandle(num: number): CodeMirror.LineHandle;

        /** Given a line handle, returns the current position of that line (or null when it is no longer in the document). */
        getLineNumber(handle: CodeMirror.LineHandle): number;

        /** Iterate over the whole document, and call f for each line, passing the line handle.
        This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
        Note that line handles have a text property containing the line's content (as a string). */
        eachLine(f: (line: CodeMirror.LineHandle) => void ): void;

        /** Iterate over the range from start up to (not including) end, and call f for each line, passing the line handle.
        This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
        Note that line handles have a text property containing the line's content (as a string). */
        eachLine(start: number, end: number, f: (line: CodeMirror.LineHandle) => void ): void;

        /** Set the editor content as 'clean', a flag that it will retain until it is edited, and which will be set again when such an edit is undone again.
        Useful to track whether the content needs to be saved. */
        markClean(): void;

        /** Returns whether the document is currently clean (not modified since initialization or the last call to markClean). */
        isClean(): boolean;



        /** Get the currently selected code. */
        getSelection(): string;

        /** Replace the selection with the given string. By default, the new selection will span the inserted text.
        The optional collapse argument can be used to change this � passing "start" or "end" will collapse the selection to the start or end of the inserted text. */
        replaceSelection(replacement: string, collapse?: string): void;

        /** start is a an optional string indicating which end of the selection to return.
        It may be "start" , "end" , "head"(the side of the selection that moves when you press shift + arrow),
        or "anchor"(the fixed side of the selection).Omitting the argument is the same as passing "head".A { line , ch } object will be returned. */
        getCursor(start?: string): CodeMirror.Position;

        /** Retrieves a list of all current selections. These will always be sorted, and never overlap (overlapping selections are merged).
        Each object in the array contains anchor and head properties referring to {line, ch} objects. */
        listSelections(): { anchor: CodeMirror.Position; head: CodeMirror.Position }[];

        /** Return true if any text is selected. */
        somethingSelected(): boolean;

        /** Set the cursor position.You can either pass a single { line , ch } object , or the line and the character as two separate parameters. */
        setCursor(pos: CodeMirror.Position): void;

        /** Set the selection range.anchor and head should be { line , ch } objects.head defaults to anchor when not given. */
        setSelection(anchor: CodeMirror.Position, head: CodeMirror.Position): void;

        /** Similar to setSelection , but will, if shift is held or the extending flag is set,
        move the head of the selection while leaving the anchor at its current place.
        pos2 is optional , and can be passed to ensure a region (for example a word or paragraph) will end up selected
        (in addition to whatever lies between that region and the current anchor). */
        extendSelection(from: CodeMirror.Position, to?: CodeMirror.Position): void;

        /** Sets or clears the 'extending' flag , which acts similar to the shift key,
        in that it will cause cursor movement and calls to extendSelection to leave the selection anchor in place. */
        setExtending(value: boolean): void;


        /** Retrieve the editor associated with a document. May return null. */
        getEditor(): CodeMirror.Editor;


        /** Create an identical copy of the given doc. When copyHistory is true , the history will also be copied.Can not be called directly on an editor. */
        copy(copyHistory: boolean): CodeMirror.Doc;

        /** Create a new document that's linked to the target document. Linked documents will stay in sync (changes to one are also applied to the other) until unlinked. */
        linkedDoc(options: {
            /** When turned on, the linked copy will share an undo history with the original.
            Thus, something done in one of the two can be undone in the other, and vice versa. */
            sharedHist?: boolean;
            from?: number;
            /** Can be given to make the new document a subview of the original. Subviews only show a given range of lines.
            Note that line coordinates inside the subview will be consistent with those of the parent,
            so that for example a subview starting at line 10 will refer to its first line as line 10, not 0. */
            to?: number;
            /** By default, the new document inherits the mode of the parent. This option can be set to a mode spec to give it a different mode. */
            mode: any;
        }): CodeMirror.Doc;

        /** Break the link between two documents. After calling this , changes will no longer propagate between the documents,
        and, if they had a shared history, the history will become separate. */
        unlinkDoc(doc: CodeMirror.Doc): void;

        /** Will call the given function for all documents linked to the target document. It will be passed two arguments,
        the linked document and a boolean indicating whether that document shares history with the target. */
        iterLinkedDocs(fn: (doc: CodeMirror.Doc, sharedHist: boolean) => void ): void;

        /** Undo one edit (if any undo events are stored). */
        undo(): void;

        /** Redo one undone edit. */
        redo(): void;

        /** Returns an object with {undo, redo } properties , both of which hold integers , indicating the amount of stored undo and redo operations. */
        historySize(): { undo: number; redo: number; };

        /** Clears the editor's undo history. */
        clearHistory(): void;

        /** Get a(JSON - serializeable) representation of the undo history. */
        getHistory(): any;

        /** Replace the editor's undo history with the one provided, which must be a value as returned by getHistory.
        Note that this will have entirely undefined results if the editor content isn't also the same as it was when getHistory was called. */
        setHistory(history: any): void;


        /** Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects. */
        markText(from: CodeMirror.Position, to: CodeMirror.Position, options?: CodeMirror.TextMarkerOptions): TextMarker;

        /** Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
        A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
        and the second explicitly removes the bookmark. */
        setBookmark(pos: CodeMirror.Position, options?: {
            /** Can be used to display a DOM node at the current location of the bookmark (analogous to the replacedWith option to markText). */
            widget?: HTMLElement;

            /** By default, text typed when the cursor is on top of the bookmark will end up to the right of the bookmark.
            Set this option to true to make it go to the left instead. */
            insertLeft?: boolean;
        }): CodeMirror.TextMarker;

        /** Returns an array of all the bookmarks and marked ranges found between the given positions. */
        findMarks(from: CodeMirror.Position, to: CodeMirror.Position): TextMarker[];

        /** Returns an array of all the bookmarks and marked ranges present at the given position. */
        findMarksAt(pos: CodeMirror.Position): TextMarker[];

        /** Returns an array containing all marked ranges in the document. */
        getAllMarks(): CodeMirror.TextMarker[];


        /** Gets the mode object for the editor. Note that this is distinct from getOption("mode"), which gives you the mode specification,
        rather than the resolved, instantiated mode object. */
        getMode(): any;

        /** Calculates and returns a { line , ch } object for a zero-based index whose value is relative to the start of the editor's text.
        If the index is out of range of the text then the returned object is clipped to start or end of the text respectively. */
        posFromIndex(index: number): CodeMirror.Position;

        /** The reverse of posFromIndex. */
        indexFromPos(object: CodeMirror.Position): number;

        /** Expose the state object, so that the Doc.state.completionActive property is reachable*/
        state: any;
    }

    interface LineHandle {
        text: string;
    }

    interface TextMarker {
        /** Remove the mark. */
        clear(): void;

        /** Returns a {from, to} object (both holding document positions), indicating the current position of the marked range,
        or undefined if the marker is no longer in the document. */
        find(): CodeMirror.Range;

        /**  Returns an object representing the options for the marker. If copyWidget is given true, it will clone the value of the replacedWith option, if any. */
        getOptions(copyWidget: boolean): CodeMirror.TextMarkerOptions;
    }

    interface LineWidget {
        /** Removes the widget. */
        clear(): void;

        /** Call this if you made some change to the widget's DOM node that might affect its height.
        It'll force CodeMirror to update the height of the line that contains the widget. */
        changed(): void;
    }

    interface EditorChange {
        /** Position (in the pre-change coordinate system) where the change started. */
        from: CodeMirror.Position;
        /** Position (in the pre-change coordinate system) where the change ended. */
        to: CodeMirror.Position;
        /** Array of strings representing the text that replaced the changed range (split by line). */
        text: string[];
        /**  Text that used to be between from and to, which is overwritten by this change. */
        removed: string[];
        /**  String representing the origin of the change event and wether it can be merged with history */
        origin: string;
    }

    interface EditorChangeLinkedList extends CodeMirror.EditorChange {
        /** Points to another change object (which may point to another, etc). */
        next?: CodeMirror.EditorChangeLinkedList;
    }

    interface EditorChangeCancellable extends CodeMirror.EditorChange {
        /** may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact. */
        update(from?: CodeMirror.Position, to?: CodeMirror.Position, text?: string): void;

        cancel(): void;
    }

    interface PositionConstructor {
        new (line: number, ch?: number): Position;
        (line: number, ch?: number): Position;
    }

    interface Range{
        from: CodeMirror.Position;
        to: CodeMirror.Position;
    }

    interface Position {
        ch: number;
        line: number;
    }

    interface EditorConfiguration {
        /** string| The starting value of the editor. Can be a string, or a document object. */
        value?: any;

        /** string|object. The mode to use. When not given, this will default to the first mode that was loaded.
        It may be a string, which either simply names the mode or is a MIME type associated with the mode.
        Alternatively, it may be an object containing configuration options for the mode,
        with a name property that names the mode (for example {name: "javascript", json: true}). */
        mode?: any;

        /** The theme to style the editor with. You must make sure the CSS file defining the corresponding .cm-s-[name] styles is loaded.
        The default is "default". */
        theme?: string;

        /** How many spaces a block (whatever that means in the edited language) should be indented. The default is 2. */
        indentUnit?: number;

        /** Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true. */
        smartIndent?: boolean;

        /** The width of a tab character. Defaults to 4. */
        tabSize?: number;

        /** Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. Default is false. */
        indentWithTabs?: boolean;

        /** Configures whether the editor should re-indent the current line when a character is typed
        that might change its proper indentation (only works if the mode supports indentation). Default is true. */
        electricChars?: boolean;

        /** Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text
        is visual (pressing the left arrow moves the cursor left)
        or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text).
        The default is false on Windows, and true on other platforms. */
        rtlMoveVisually?: boolean;

        /** Configures the keymap to use. The default is "default", which is the only keymap defined in codemirror.js itself.
        Extra keymaps are found in the keymap directory. See the section on keymaps for more information. */
        keyMap?: string;

        /** Can be used to specify extra keybindings for the editor, alongside the ones defined by keyMap. Should be either null, or a valid keymap value. */
        extraKeys?: any;

        /** Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll). */
        lineWrapping?: boolean;

        /** Whether to show line numbers to the left of the editor. */
        lineNumbers?: boolean;

        /** At which number to start counting lines. Default is 1. */
        firstLineNumber?: number;

        /** A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter. */
        lineNumberFormatter?: (line: number) => string;

        /** Can be used to add extra gutters (beyond or instead of the line number gutter).
        Should be an array of CSS class names, each of which defines a width (and optionally a background),
        and which will be used to draw the background of the gutters.
        May include the CodeMirror-linenumbers class, in order to explicitly set the position of the line number gutter
        (it will default to be to the right of all other gutters). These class names are the keys passed to setGutterMarker. */
        gutters?: string[];

        /** Determines whether the gutter scrolls along with the content horizontally (false)
        or whether it stays fixed during horizontal scrolling (true, the default). */
        fixedGutter?: boolean;

        /** boolean|string. This disables editing of the editor content by the user. If the special value "nocursor" is given (instead of simply true), focusing of the editor is also disallowed. */
        readOnly?: any;

        /**Whether the cursor should be drawn when a selection is active. Defaults to false. */
        showCursorWhenSelecting?: boolean;

        /** The maximum number of undo levels that the editor stores. Defaults to 40. */
        undoDepth?: number;

        /** The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500. */
        historyEventDelay?: number;

        /** The tab index to assign to the editor. If not given, no tab index will be assigned. */
        tabindex?: number;

        /** Can be used to make CodeMirror focus itself on initialization. Defaults to off.
        When fromTextArea is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused,
        or it has an autofocus attribute and no other element is focused. */
        autofocus?: boolean;

        /** Controls whether drag-and - drop is enabled. On by default. */
        dragDrop?: boolean;

        /** When given , this will be called when the editor is handling a dragenter , dragover , or drop event.
        It will be passed the editor instance and the event object as arguments.
        The callback can choose to handle the event itself , in which case it should return true to indicate that CodeMirror should not do anything further. */
        onDragEvent?: (instance: CodeMirror.Editor, event: Event) => boolean;

        /** This provides a rather low - level hook into CodeMirror's key handling.
        If provided, this function will be called on every keydown, keyup, and keypress event that CodeMirror captures.
        It will be passed two arguments, the editor instance and the key event.
        This key event is pretty much the raw key event, except that a stop() method is always added to it.
        You could feed it to, for example, jQuery.Event to further normalize it.
        This function can inspect the key event, and handle it if it wants to.
        It may return true to tell CodeMirror to ignore the event.
        Be wary that, on some browsers, stopping a keydown does not stop the keypress from firing, whereas on others it does.
        If you respond to an event, you should probably inspect its type property and only do something when it is keydown
        (or keypress for actions that need character data). */
        onKeyEvent?: (instance: CodeMirror.Editor, event: Event) => boolean;

        /** Half - period in milliseconds used for cursor blinking. The default blink rate is 530ms. */
        cursorBlinkRate?: number;

        /** Determines the height of the cursor. Default is 1 , meaning it spans the whole height of the line.
        For some fonts (and by some tastes) a smaller height (for example 0.85),
        which causes the cursor to not reach all the way to the bottom of the line, looks better */
        cursorHeight?: number;

        /** Highlighting is done by a pseudo background - thread that will work for workTime milliseconds,
        and then use timeout to sleep for workDelay milliseconds.
        The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive. */
        workTime?: number;

        /** See workTime. */
        workDelay?: number;

        /** Indicates how quickly CodeMirror should poll its input textarea for changes(when focused).
        Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
        Thus, it polls. Default is 100 milliseconds. */
        pollInterval?: number

        /** By default, CodeMirror will combine adjacent tokens into a single span if they have the same class.
        This will result in a simpler DOM tree, and thus perform better. With some kinds of styling(such as rounded corners),
        this will change the way the document looks. You can set this option to false to disable this behavior. */
        flattenSpans?: boolean;

        /** When highlighting long lines, in order to stay responsive, the editor will give up and simply style
        the rest of the line as plain text when it reaches a certain position. The default is 10000.
        You can set this to Infinity to turn off this behavior. */
        maxHighlightLength?: number;

        /** Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view.
        This affects the amount of updates needed when scrolling, and the amount of work that such an update does.
        You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered,
        and thus the browser's text search works on it. This will have bad effects on performance of big documents. */
        viewportMargin?: number;

        /** Optional lint configuration to be used in conjunction with CodeMirror's linter addon. */
        lint?: boolean | LintOptions;

        /** Optional value to be used in conjunction with CodeMirror’s placeholder add-on. */
        placeholder?: string;
    }

    interface TextMarkerOptions {
        /** Assigns a CSS class to the marked stretch of text. */
        className?: string;

        /** Determines whether text inserted on the left of the marker will end up inside or outside of it. */
        inclusiveLeft?: boolean;

        /** Like inclusiveLeft , but for the right side. */
        inclusiveRight?: boolean;

        /** Atomic ranges act as a single unit when cursor movement is concerned — i.e. it is impossible to place the cursor inside of them.
        In atomic ranges, inclusiveLeft and inclusiveRight have a different meaning — they will prevent the cursor from being placed
        respectively directly before and directly after the range. */
        atomic?: boolean;

        /** Collapsed ranges do not show up in the display.Setting a range to be collapsed will automatically make it atomic. */
        collapsed?: boolean;

        /** When enabled, will cause the mark to clear itself whenever the cursor enters its range.
        This is mostly useful for text - replacement widgets that need to 'snap open' when the user tries to edit them.
        The "clear" event fired on the range handle can be used to be notified when this happens. */
        clearOnEnter?: boolean;

        /** Determines whether the mark is automatically cleared when it becomes empty. Default is true. */
        clearWhenEmpty?: boolean;

        /** Use a given node to display this range.Implies both collapsed and atomic.
        The given DOM node must be an inline element(as opposed to a block element). */
        replacedWith?: HTMLElement;

        /** When replacedWith is given, this determines whether the editor will
         * capture mouse and drag events occurring in this widget. Default is
         * false—the events will be left alone for the default browser handler,
         * or specific handlers on the widget, to capture. */
        handleMouseEvents?: boolean;

        /** A read - only span can, as long as it is not cleared, not be modified except by calling setValue to reset the whole document.
        Note: adding a read - only span currently clears the undo history of the editor,
        because existing undo events being partially nullified by read - only spans would corrupt the history (in the current implementation). */
        readOnly?: boolean;

        /** When set to true (default is false), adding this marker will create an event in the undo history that can be individually undone(clearing the marker). */
        addToHistory?: boolean;

        /** Can be used to specify an extra CSS class to be applied to the leftmost span that is part of the marker. */
        startStyle?: string;

        /** Equivalent to startStyle, but for the rightmost span. */
        endStyle?: string;

        /** A string of CSS to be applied to the covered text. For example "color: #fe3". */
        css?: string;

        /** When given, will give the nodes created for this span a HTML title attribute with the given value. */
        title?: string;

        /** When the target document is linked to other documents, you can set shared to true to make the marker appear in all documents.
        By default, a marker appears only in its target document. */
        shared?: boolean;
    }

    interface StringStream {
        lastColumnPos: number;
        lastColumnValue: number;
        lineStart: number;

        /**
         * Current position in the string.
         */
        pos: number;

        /**
         * Where the stream's position was when it was first passed to the token function.
         */
        start: number;

        /**
         * The current line's content.
         */
        string: string;

        /**
         * Number of spaces per tab character.
         */
        tabSize: number;

        /**
         * Returns true only if the stream is at the end of the line.
         */
        eol(): boolean;

        /**
         * Returns true only if the stream is at the start of the line.
         */
        sol(): boolean;

        /**
         * Returns the next character in the stream without advancing it. Will return an null at the end of the line.
         */
        peek(): string;

        /**
         * Returns the next character in the stream and advances it. Also returns null when no more characters are available.
         */
        next(): string;

        /**
         * match can be a character, a regular expression, or a function that takes a character and returns a boolean.
         * If the next character in the stream 'matches' the given argument, it is consumed and returned.
         * Otherwise, undefined is returned.
         */
        eat(match: string): string;
        eat(match: RegExp): string;
        eat(match: (char: string) => boolean): string;

        /**
         * Repeatedly calls eat with the given argument, until it fails. Returns true if any characters were eaten.
         */
        eatWhile(match: string): boolean;
        eatWhile(match: RegExp): boolean;
        eatWhile(match: (char: string) => boolean): boolean;

        /**
         * Shortcut for eatWhile when matching white-space.
         */
        eatSpace(): boolean;

        /**
         * Moves the position to the end of the line.
         */
        skipToEnd(): void;

        /**
         * Skips to the next occurrence of the given character, if found on the current line (doesn't advance the stream if
         * the character does not occur on the line).
         *
         * Returns true if the character was found.
         */
        skipTo(ch: string): boolean;

        /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         */
        match(pattern: string, consume?: boolean, caseFold?: boolean): boolean;
        match(pattern: RegExp, consume?: boolean): string[];

        /**
         * Backs up the stream n characters. Backing it up further than the start of the current token will cause things to
         * break, so be careful.
         */
        backUp(n: number): void;

        /**
         * Returns the column (taking into account tabs) at which the current token starts.
         */
        column(): number;

        /**
         * Tells you how far the current line has been indented, in spaces. Corrects for tab characters.
         */
        indentation(): number;

        /**
         * Get the string between the start of the current token and the current stream position.
         */
        current(): string;
    }

    /**
     * A Mode is, in the simplest case, a lexer (tokenizer) for your language — a function that takes a character stream as input,
     * advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.
     */
    interface Mode<T> {
        /**
         * This function should read one token from the stream it is given as an argument, optionally update its state,
         * and return a style string, or null for tokens that do not have to be styled. Multiple styles can be returned, separated by spaces.
         */
        token(stream: StringStream, state: T): string;

        /**
         * A function that produces a state object to be used at the start of a document.
         */
        startState?: () => T;
        /**
         * For languages that have significant blank lines, you can define a blankLine(state) method on your mode that will get called
         * whenever a blank line is passed over, so that it can update the parser state.
         */
        blankLine?: (state: T) => void;
        /**
         * Given a state returns a safe copy of that state.
         */
        copyState?: (state: T) => T;

        /**
         * The indentation method should inspect the given state object, and optionally the textAfter string, which contains the text on
         * the line that is being indented, and return an integer, the amount of spaces to indent.
         */
        indent?: (state: T, textAfter: string) => number;

        /** The four below strings are used for working with the commenting addon. */
        /**
         * String that starts a line comment.
         */
        lineComment?: string;
        /**
         * String that starts a block comment.
         */
        blockCommentStart?: string;
        /**
         * String that ends a block comment.
         */
        blockCommentEnd?: string;
        /**
         * String to put at the start of continued lines in a block comment.
         */
        blockCommentLead?: string;

        /**
         * Trigger a reindent whenever one of the characters in the string is typed.
         */
        electricChars?: string
        /**
         * Trigger a reindent whenever the regex matches the part of the line before the cursor.
         */
        electricinput?: RegExp
    }

    /**
     * A function that, given a CodeMirror configuration object and an optional mode configuration object, returns a mode object.
     */
    interface ModeFactory<T> {
        (config: CodeMirror.EditorConfiguration, modeOptions?: any): Mode<T>
    }

    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     */
    function defineMode(id: string, modefactory: ModeFactory<any>): void;

    /**
     * The first argument is a configuration object as passed to the mode constructor function, and the second argument
     * is a mode specification as in the EditorConfiguration mode option.
     */
    function getMode<T>(config: CodeMirror.EditorConfiguration, mode: any): Mode<T>;

    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     */
    function overlayMode<T, S>(base: Mode<T>, overlay: Mode<S>, combine?: boolean): Mode<any>

    /**
     * async specifies that the lint process runs asynchronously. hasGutters specifies that lint errors should be displayed in the CodeMirror
     * gutter, note that you must use this in conjunction with [ "CodeMirror-lint-markers" ] as an element in the gutters argument on
     * initialization of the CodeMirror instance.
     */
    interface LintStateOptions {
        async: boolean;
        hasGutters: boolean;
    }

    /**
     * Adds the getAnnotations callback to LintStateOptions which may be overridden by the user if they choose use their own
     * linter.
     */
    interface LintOptions extends LintStateOptions {
        getAnnotations: AnnotationsCallback;
    }

    /**
     * A function that calls the updateLintingCallback with any errors found during the linting process.
     */
    interface AnnotationsCallback {
        (content: string, updateLintingCallback: UpdateLintingCallback, options: LintStateOptions, codeMirror: Editor): void;
    }

    /**
     * A function that, given an array of annotations, updates the CodeMirror linting GUI with those annotations
     */
    interface UpdateLintingCallback {
        (codeMirror: Editor, annotations: Annotation[]): void;
    }

    /**
     * An annotation contains a description of a lint error, detailing the location of the error within the code, the severity of the error,
     * and an explaination as to why the error was thrown.
     */
    interface Annotation {
        from: Position;
        message?: string;
        severity?: string;
        to?: Position;
    }
}

declare module "codemirror" {
    export = CodeMirror;
}// Typing for linq.js, ver 3.0.3-Beta4

declare module linqjs {
    interface IEnumerator<T> {
        current(): T;
        moveNext(): Boolean;
        dispose(): void;
    }

    interface EnumerableStatic {
        Utils: {
            createLambda<T>(expression: T): (...params: T[]) => T;
            createEnumerable<T>(getEnumerator: () => IEnumerator<T>): Enumerable<T>;
            createEnumerator<T>(initialize: () => void, tryGetNext: () => Boolean, dispose: () => void): IEnumerator<T>;
            extendTo<T>(type: T): void;
        };
        choice<T>(...params: T[]): Enumerable<T>;
        cycle<T>(...params: T[]): Enumerable<T>;
        empty<T>(): Enumerable<T>;
        from<T>(): Enumerable<T>;
        from<T>(obj: Enumerable<T>): Enumerable<T>;
        from(obj: string): Enumerable<string>;
        from(obj: number): Enumerable<number>;
        from<T>(obj: { length: number;[x: number]: T; }): Enumerable<T>;
        from<T>(obj: T): Enumerable<T>;
        make<T>(element: T): Enumerable<T>;
        matches<T>(input: string, pattern: RegExp): Enumerable<T>;
        matches<T>(input: string, pattern: string, flags?: string): Enumerable<T>;
        range(start: number, count: number, step?: number): Enumerable<number>;
        rangeDown(start: number, count: number, step?: number): Enumerable<number>;
        rangeTo(start: number, to: number, step?: number): Enumerable<number>;
        repeat<T>(element: T, count?: number): Enumerable<T>;
        repeatWithFinalize<T>(initializer: () => T, finalizer: (element) => void): Enumerable<T>;
        generate<T>(func: () => T, count?: number): Enumerable<T>;
        toInfinity<T>(start?: number, step?: number): Enumerable<T>;
        toNegativeInfinity<T>(start?: number, step?: number): Enumerable<T>;
        unfold<T>(seed: T, func: (value: T) => T): Enumerable<T>;
        defer<T>(enumerableFactory: () => Enumerable<T>): Enumerable<T>;
    }

    interface Enumerable<T> {
        constructor(getEnumerator: () => IEnumerator<T>);
        getEnumerator(): IEnumerator<T>;

        // Extension Methods
        traverseBreadthFirst(func: (element: T) => Enumerable<T>, resultSelector?: (element: T, nestLevel: number) => T): Enumerable<T>;
        traverseDepthFirst(func: (element: T) => Enumerable<T>, resultSelector?: (element: T, nestLevel: number) => T): Enumerable<T>;
        flatten(): Enumerable<T>;
        pairwise(selector: (prev: T, current: T) => T): Enumerable<T>;
        scan(func: (prev: T, current: T) => T): Enumerable<T>;
        scan(seed: T, func: (prev: T, current: T) => T): Enumerable<T>;
        select<TResult>(selector: (element: T, index: number) => TResult): Enumerable<TResult>;
        selectMany<TResult>(collectionSelector: (element: T, index: number) => TResult[]): Enumerable<TResult>;
        selectMany<TResult>(collectionSelector: (element: T, index: number) => Enumerable<TResult>): Enumerable<TResult>;
        where(predicate: (element: T, index: number) => Boolean): Enumerable<T>;
        choose(selector: (element: T, index: number) => T): Enumerable<T>;
        ofType(type: T): Enumerable<T>;
        zip(second: T[], resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        zip(second: Enumerable<T>, resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        zip(second: { length: number;[x: number]: T; }, resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        zip(...params: T[]): Enumerable<T>; // last one is selector
        merge(second: T[], resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        merge(second: Enumerable<T>, resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        merge(second: { length: number;[x: number]: T; }, resultSelector: (first: T, second: T, index: number) => T): Enumerable<T>;
        merge(...params: T[]): Enumerable<T>; // last one is selector
        join(inner: Enumerable<T>, outerKeySelector: (outer: T) => T, innerKeySelector: (inner: T) => T, resultSelector: (outer: T, inner: T) => T, compareSelector?: (obj: T) => T): Enumerable<T>;
        groupJoin(inner: Enumerable<T>, outerKeySelector: (outer: T) => T, innerKeySelector: (inner: T) => T, resultSelector: (outer: T, inner: T) => T, compareSelector?: (obj: T) => T): Enumerable<T>;
        all(predicate: (element: T) => Boolean): Boolean;
        T(predicate?: (element: T) => Boolean): Boolean;
        isEmpty(): Boolean;
        concat(sequences: T[]): Enumerable<T>;
        insert(index: number, second: T[]): Enumerable<T>;
        insert(index: number, second: Enumerable<T>): Enumerable<T>;
        insert(index: number, second: { length: number;[x: number]: T; }): Enumerable<T>;
        alternate(alternateValue: T): Enumerable<T>;
        alternate(alternateSequence: T[]): Enumerable<T>;
        alternate(alternateSequence: Enumerable<T>): Enumerable<T>;
        contains(value: T, compareSelector: (element: T) => T): Enumerable<T>;
        defaultIfEmpty(defaultValue?: T): Enumerable<T>;
        distinct<TKey>(compareSelector?: (element: T) => TKey): Enumerable<T>;
        distinctUntilChanged(compareSelector: (element: T) => T): Enumerable<T>;
        except(second: T[], compareSelector?: (element: T) => T): Enumerable<T>;
        except(second: { length: number;[x: number]: T; }, compareSelector?: (element: T) => T): Enumerable<T>;
        except(second: Enumerable<T>, compareSelector?: (element: T) => T): Enumerable<T>;
        intersect(second: T[], compareSelector?: (element: T) => T): Enumerable<T>;
        intersect(second: { length: number;[x: number]: T; }, compareSelector?: (element: T) => T): Enumerable<T>;
        intersect(second: Enumerable<T>, compareSelector?: (element: T) => T): Enumerable<T>;
        sequenceEqual(second: T[], compareSelector?: (element: T) => T): Enumerable<T>;
        sequenceEqual(second: { length: number;[x: number]: T; }, compareSelector?: (element: T) => T): Enumerable<T>;
        sequenceEqual(second: Enumerable<T>, compareSelector?: (element: T) => T): Enumerable<T>;
        union(second: T[], compareSelector?: (element: T) => T): Enumerable<T>;
        union(second: { length: number;[x: number]: T; }, compareSelector?: (element: T) => T): Enumerable<T>;
        union(second: Enumerable<T>, compareSelector?: (element: T) => T): Enumerable<T>;
        orderBy<TKey>(keySelector: (element: T) => TKey): OrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: (element: T) => TKey): OrderedEnumerable<T>;
        reverse(): Enumerable<T>;
        shuffle(): Enumerable<T>;
        weightedSample(weightSelector: (element: T) => T): Enumerable<T>;
        groupBy<TKey, TValue>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TValue): Enumerable<Grouping<TKey, TValue>>;
        partitionBy(keySelector: (element: T) => T, elementSelector?: (element: T) => T, resultSelector?: (key: T, element: T) => T, compareSelector?: (element: T) => T): Enumerable<T>;
        buffer(count: number): Enumerable<T>;
        aggregate(func: (prev: T, current: T) => T): T;
        aggregate(seed: T, func: (prev: T, current: T) => T, resultSelector?: (last: T) => T): T;
        average(selector?: (element: T) => number): number;
        count(predicate?: (element: T, index: number) => Boolean): number;
        max(selector?: (element: T) => number): number;
        min(selector?: (element: T) => number): number;
        maxBy(keySelector: (element: T) => T): T;
        minBy(keySelector: (element: T) => T): T;
        sum(selector?: (element: T) => number): number;
        elementAt(index: number): T;
        elementAtOrDefault(index: number, defaultValue?: T): T;
        first(predicate?: (element: T, index: number) => Boolean): T;
        firstOrDefault(predicate?: (element: T, index: number) => Boolean, defaultValue?: T): T;
        last(predicate?: (element: T, index: number) => Boolean): T;
        lastOrDefault(predicate?: (element: T, index: number) => Boolean, defaultValue?: T): T;
        single(predicate?: (element: T, index: number) => Boolean): T;
        singleOrDefault(predicate?: (element: T, index: number) => Boolean, defaultValue?: T): T;
        skip(count: number): Enumerable<T>;
        skipWhile(predicate: (element: T, index: number) => Boolean): Enumerable<T>;
        take(count: number): Enumerable<T>;
        takeWhile(predicate: (element: T, index: number) => Boolean): Enumerable<T>;
        takeExceptLast(count?: number): Enumerable<T>;
        takeFromLast(count: number): Enumerable<T>;
        indexOf(item: T): number;
        indexOf(predicate: (element: T, index: number) => Boolean): number;
        lastIndexOf(item: T): number;
        lastIndexOf(predicate: (element: T, index: number) => Boolean): number;
        asEnumerable(): Enumerable<T>;
        toArray(): T[];
        toLookup(keySelector: (element: T) => T, elementSelector?: (element: T) => T, compareSelector?: (element: T) => T): Lookup<T>;
        toObject(keySelector: (element: T) => T, elementSelector?: (element: T) => T): Object;
        toDictionary<TKey, TValue>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TValue): Dictionary<TKey, TValue>;
        toJSONString(replacer: (key: string, value: T) => T): string;
        toJSONString(replacer: T[]): string;
        toJSONString(replacer: (key: string, value: T) => T, space: T): string;
        toJSONString(replacer: T[], space: T): string;
        toJoinedString(separator?: string, selector?: (element: T, index: number) => T): string;
        doAction(action: (element: T, index: number) => void): Enumerable<T>;
        doAction(action: (element: T, index: number) => Boolean): Enumerable<T>;
        forEach(action: (element: T, index: number) => void): void;
        forEach(action: (element: T) => void): void;
        forEach(action: (element: T, index: number) => Boolean): void;
        forEach(action: (element: T) => Boolean): void;
        write(separator?: string, selector?: (element: T) => T): void;
        writeLine(selector?: (element: T) => T): void;
        force(): void;
        letBind(func: (source: Enumerable<T>) => T[]): Enumerable<T>;
        letBind(func: (source: Enumerable<T>) => { length: number;[x: number]: T; }): Enumerable<T>;
        letBind(func: (source: Enumerable<T>) => Enumerable<T>): Enumerable<T>;
        share(): DisposableEnumerable<T>;
        memoize(): DisposableEnumerable<T>;
        catchError(handler: (exception: T) => void): Enumerable<T>;
        finallyAction(finallyAction: () => void): Enumerable<T>;
        log(selector?: (element: T) => void): Enumerable<T>;
        trace(message?: string, selector?: (element: T) => void): Enumerable<T>;
    }

    interface OrderedEnumerable<T> extends Enumerable<T> {
        createOrderedEnumerable(keySelector: (element: T) => T, descending: Boolean): OrderedEnumerable<T>;
        thenBy<TKey>(keySelector: (element: T) => TKey): OrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: (element: T) => TKey): OrderedEnumerable<T>;
    }

    interface DisposableEnumerable<T> extends Enumerable<T> {
        dispose(): void;
    }

    export class Dictionary<TKey, TValue> {
        constructor();

        add(key: TKey, value: TValue): void;
        get(key: TKey): TValue;
        set(key: TKey, value: TValue): Boolean;
        contains(key: TKey): Boolean;
        clear(): void;
        remove(key: TKey): void;
        count(): number;
        toEnumerable(): Enumerable<KeyValuePair<TKey, TValue>>;
    }

    interface KeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
    }

    interface Lookup<T> {
        count(): number;
        get(key: T): Enumerable<T>;
        contains(key: T): Boolean;
        toEnumerable(): Enumerable<T>;
    }

    interface Grouping<TKey, TValue> extends Enumerable<TValue> {
        key(): TKey;
    }
}

// export definition
declare var Enumerable: linqjs.EnumerableStatic;interface MaskedInputOptions {
}

declare class MaskedInput {
	constructor(args: MaskedInputOptions);
}// Type definitions for Moment.js 2.8.0
// Project: https://github.com/timrwood/moment
// Definitions by: Michael Lakerveld <https://github.com/Lakerfield>, Aaron King <https://github.com/kingdango>, Hiroki Horiuchi <https://github.com/horiuchi>, Dick van den Brink <https://github.com/DickvdBrink>, Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module moment {

    interface MomentInput {

        years?: number;
        y?: number;

        months?: number;
        M?: number;

        weeks?: number;
        w?: number;

        days?: number;
        d?: number;

        hours?: number;
        h?: number;

        minutes?: number;
        m?: number;

        seconds?: number;
        s?: number;

        milliseconds?: number;
        ms?: number;

    }

    interface Duration {

        humanize(withSuffix?: boolean): string;

        as(units: string): number;

        milliseconds(): number;
        asMilliseconds(): number;

        seconds(): number;
        asSeconds(): number;

        minutes(): number;
        asMinutes(): number;

        hours(): number;
        asHours(): number;

        days(): number;
        asDays(): number;

        months(): number;
        asMonths(): number;

        years(): number;
        asYears(): number;

        add(n: number, p: string): Duration;
        add(n: number): Duration;
        add(d: Duration): Duration;

        subtract(n: number, p: string): Duration;
        subtract(n: number): Duration;
        subtract(d: Duration): Duration;

        toISOString(): string;

    }

    interface Moment {

        format(format: string): string;
        format(): string;

        fromNow(withoutSuffix?: boolean): string;

        startOf(unitOfTime: string): Moment;
        endOf(unitOfTime: string): Moment;

        /**
         * Mutates the original moment by adding time. (deprecated in 2.8.0)
         *
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         * @param amount the amount you want to add
         */
        add(unitOfTime: string, amount: number): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: number, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by adding time. Note that the order of arguments can be flipped.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: string, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        add(objectLiteral: MomentInput): Moment;
        /**
         * Mutates the original moment by adding time.
         *
         * @param duration a length of time
         */
        add(duration: Duration): Moment;

        /**
         * Mutates the original moment by subtracting time. (deprecated in 2.8.0)
         *
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(unitOfTime: string, amount: number): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(amount: number, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by subtracting time. Note that the order of arguments can be flipped.
         *
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         */
        subtract(amount: string, unitOfTime: string): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        subtract(objectLiteral: MomentInput): Moment;
        /**
         * Mutates the original moment by subtracting time.
         *
         * @param duration a length of time
         */
        subtract(duration: Duration): Moment;

        calendar(): string;
        calendar(start: Moment): string;

        clone(): Moment;

        /**
         * @return Unix timestamp, or milliseconds since the epoch.
         */
        valueOf(): number;

        local(): Moment; // current date/time in local mode

        utc(): Moment; // current date/time in UTC mode

        isValid(): boolean;

        year(y: number): Moment;
        year(): number;
        quarter(): number;
        quarter(q: number): Moment;
        month(M: number): Moment;
        month(M: string): Moment;
        month(): number;
        day(d: number): Moment;
        day(d: string): Moment;
        day(): number;
        date(d: number): Moment;
        date(): number;
        hour(h: number): Moment;
        hour(): number;
        hours(h: number): Moment;
        hours(): number;
        minute(m: number): Moment;
        minute(): number;
        minutes(m: number): Moment;
        minutes(): number;
        second(s: number): Moment;
        second(): number;
        seconds(s: number): Moment;
        seconds(): number;
        millisecond(ms: number): Moment;
        millisecond(): number;
        milliseconds(ms: number): Moment;
        milliseconds(): number;
        weekday(): number;
        weekday(d: number): Moment;
        isoWeekday(): number;
        isoWeekday(d: number): Moment;
        weekYear(): number;
        weekYear(d: number): Moment;
        isoWeekYear(): number;
        isoWeekYear(d: number): Moment;
        week(): number;
        week(d: number): Moment;
        weeks(): number;
        weeks(d: number): Moment;
        isoWeek(): number;
        isoWeek(d: number): Moment;
        isoWeeks(): number;
        isoWeeks(d: number): Moment;
        weeksInYear(): number;
        isoWeeksInYear(): number;
        dayOfYear(): number;
        dayOfYear(d: number): Moment;

        from(f: Moment): string;
        from(f: Moment, suffix: boolean): string;
        from(d: Date): string;
        from(s: string): string;
        from(date: number[]): string;

        diff(b: Moment): number;
        diff(b: Moment, unitOfTime: string): number;
        diff(b: Moment, unitOfTime: string, round: boolean): number;

        toArray(): number[];
        toDate(): Date;
        toISOString(): string;
        toJSON(): string;
        unix(): number;

        isLeapYear(): boolean;
        zone(): number;
        zone(b: number): Moment;
        zone(b: string): Moment;
        daysInMonth(): number;
        isDST(): boolean;

        isBefore(): boolean;
        isBefore(b: Moment): boolean;
        isBefore(b: string): boolean;
        isBefore(b: Number): boolean;
        isBefore(b: Date): boolean;
        isBefore(b: number[]): boolean;
        isBefore(b: Moment, granularity: string): boolean;
        isBefore(b: String, granularity: string): boolean;
        isBefore(b: Number, granularity: string): boolean;
        isBefore(b: Date, granularity: string): boolean;
        isBefore(b: number[], granularity: string): boolean;

        isAfter(): boolean;
        isAfter(b: Moment): boolean;
        isAfter(b: string): boolean;
        isAfter(b: Number): boolean;
        isAfter(b: Date): boolean;
        isAfter(b: number[]): boolean;
        isAfter(b: Moment, granularity: string): boolean;
        isAfter(b: String, granularity: string): boolean;
        isAfter(b: Number, granularity: string): boolean;
        isAfter(b: Date, granularity: string): boolean;
        isAfter(b: number[], granularity: string): boolean;

        isSame(b: Moment): boolean;
        isSame(b: string): boolean;
        isSame(b: Number): boolean;
        isSame(b: Date): boolean;
        isSame(b: number[]): boolean;
        isSame(b: Moment, granularity: string): boolean;
        isSame(b: String, granularity: string): boolean;
        isSame(b: Number, granularity: string): boolean;
        isSame(b: Date, granularity: string): boolean;
        isSame(b: number[], granularity: string): boolean;

        // Deprecated as of 2.8.0.
        lang(language: string): Moment;
        lang(reset: boolean): Moment;
        lang(): MomentLanguage;

        locale(language: string): Moment;
        locale(reset: boolean): Moment;
        locale(): string;

        localeData(language: string): Moment;
        localeData(reset: boolean): Moment;
        localeData(): MomentLanguage;

        // Deprecated as of 2.7.0.
        max(date: Date): Moment;
        max(date: number): Moment;
        max(date: any[]): Moment;
        max(date: string): Moment;
        max(date: string, format: string): Moment;
        max(clone: Moment): Moment;

        // Deprecated as of 2.7.0.
        min(date: Date): Moment;
        min(date: number): Moment;
        min(date: any[]): Moment;
        min(date: string): Moment;
        min(date: string, format: string): Moment;
        min(clone: Moment): Moment;

        get(unit: string): number;
        set(unit: string, value: number): Moment;

    }

    interface MomentCalendar {

		lastDay: any;
		sameDay: any;
		nextDay: any;
		lastWeek: any;
		nextWeek: any;
		sameElse: any;

    }

    interface MomentLanguage {

		months?: any;
		monthsShort?: any;
		weekdays?: any;
		weekdaysShort?: any;
		weekdaysMin?: any;
		longDateFormat?: MomentLongDateFormat;
		relativeTime?: MomentRelativeTime;
		meridiem?: (hour: number, minute: number, isLowercase: boolean) => string;
		calendar?: MomentCalendar;
		ordinal?: (num: number) => string;

    }

    interface MomentLongDateFormat {

		L: string;
		LL: string;
		LLL: string;
		LLLL: string;
		LT: string;
		l?: string;
		ll?: string;
		lll?: string;
		llll?: string;
		lt?: string;

    }

    interface MomentRelativeTime {

		future: any;
		past: any;
		s: any;
		m: any;
		mm: any;
		h: any;
		hh: any;
		d: any;
		dd: any;
		M: any;
		MM: any;
		y: any;
		yy: any;

    }

    interface MomentStatic {

        version: string;

        (): Moment;
        (date: number): Moment;
        (date: number[]): Moment;
        (date: string, format?: string, strict?: boolean): Moment;
        (date: string, format?: string, language?: string, strict?: boolean): Moment;
        (date: string, formats: string[], strict?: boolean): Moment;
        (date: string, formats: string[], language?: string, strict?: boolean): Moment;
        (date: string, specialFormat: () => void, strict?: boolean): Moment;
        (date: string, specialFormat: () => void, language?: string, strict?: boolean): Moment;
        (date: string, formatsIncludingSpecial: any[], strict?: boolean): Moment;
        (date: string, formatsIncludingSpecial: any[], language?: string, strict?: boolean): Moment;
        (date: Date): Moment;
        (date: Moment): Moment;
        (date: Object): Moment;

        utc(): Moment;
        utc(date: number): Moment;
        utc(date: number[]): Moment;
        utc(date: string, format?: string, strict?: boolean): Moment;
        utc(date: string, format?: string, language?: string, strict?: boolean): Moment;
        utc(date: string, formats: string[], strict?: boolean): Moment;
        utc(date: string, formats: string[], language?: string, strict?: boolean): Moment;
        utc(date: Date): Moment;
        utc(date: Moment): Moment;
        utc(date: Object): Moment;

        unix(timestamp: number): Moment;

        invalid(parsingFlags?: Object): Moment;
        isMoment(): boolean;
        isMoment(m: any): boolean;
        isDuration(): boolean;
        isDuration(d: any): boolean;

        // Deprecated in 2.8.0.
        lang(language?: string): string;
        lang(language?: string, definition?: MomentLanguage): string;

        locale(language?: string): string;
        locale(language?: string[]): string;
        locale(language?: string, definition?: MomentLanguage): string;

        localeData(language?: string): MomentLanguage;

        longDateFormat: any;
        relativeTime: any;
        meridiem: (hour: number, minute: number, isLowercase: boolean) => string;
        calendar: any;
        ordinal: (num: number) => string;

        duration(milliseconds: Number): Duration;
        duration(num: Number, unitOfTime: string): Duration;
        duration(input: MomentInput): Duration;
        duration(object: any): Duration;
        duration(): Duration;

        parseZone(date: string): Moment;

        months(): string[];
        months(index: number): string;
        months(format: string): string[];
        months(format: string, index: number): string;
        monthsShort(): string[];
        monthsShort(index: number): string;
        monthsShort(format: string): string[];
        monthsShort(format: string, index: number): string;

        weekdays(): string[];
        weekdays(index: number): string;
        weekdays(format: string): string[];
        weekdays(format: string, index: number): string;
        weekdaysShort(): string[];
        weekdaysShort(index: number): string;
        weekdaysShort(format: string): string[];
        weekdaysShort(format: string, index: number): string;
        weekdaysMin(): string[];
        weekdaysMin(index: number): string;
        weekdaysMin(format: string): string[];
        weekdaysMin(format: string, index: number): string;

        min(moments: Moment[]): Moment;
        max(moments: Moment[]): Moment;

        normalizeUnits(unit: string): string;
        relativeTimeThreshold(threshold: string, limit: number): void;

        /**
         * Constant used to enable explicit ISO_8601 format parsing.
         */
        ISO_8601(): void;

    }

}

declare var moment: moment.MomentStatic;

declare module 'moment' {
    export = moment;
}declare module Vidyano {
    export interface Route {
        enter(fnc: Function): Route;
        to(fnc: Function): Route;
        exit(fnc: Function): Route;
        params: any;
        path: string;
    }

    export interface PathRescueArguments {
        current: string;
    }

    export interface PathArguments {
        path: string;
        params: { [key: string]: string };
    }

    export interface PathStatic {
        map(path: string): Route;
        root(path: string): void;
        routes: {
            current: string;
            root: string;
            rootPath: string;
            defined: {
                [key: string]: Route
            };
        };
        listen(): void;
        rescue(fnc: Function): void;
        history: {
            pushState(state: any, title: string, path: string);
            replaceState(state: any, title: string, path: string);
            listen();
        };
        match(path: string, parameterize: boolean): Route;
    }

    export var Path: PathStatic;
}interface PolymerProperty {
    type: ObjectConstructor | StringConstructor | BooleanConstructor | DateConstructor | NumberConstructor | ArrayConstructor;
    computed?: string;
    reflectToAttribute?: boolean;
    readOnly?: boolean;
    observer?: string;
    value?: number | boolean | string | Function;
    notify?: boolean;
}

interface PolymerProperties {
    [name: string]: ObjectConstructor | StringConstructor | BooleanConstructor | DateConstructor | NumberConstructor | ArrayConstructor | PolymerProperty;
}

interface PolymerDomApiClassList {
    add(className: string): void;
    remove(className: string): void;
    toggle(className: string): void;
}

interface PolymerDomApi {
    getDistributedNodes(): HTMLElement[];
    getDestinationInsertionPoints(): HTMLElement[];
    flush(): void;
    childNodes: Node[];
    children: HTMLElement[];
    classList: PolymerDomApiClassList;
    firstChild: Node;
    firstElementChild: Element;
    innerHTML: string;
    lastChild: Node;
    lastElementChild: Element;
    nextElementSibling: Element;
    nextSibling: Node;
    node: Node;
    parentNode: Node;
    previousElementSibling: Element;
    previousSibling: Node;
    textContent: string;
    insertBefore(newChild: Node | Vidyano.WebComponents.WebComponent, refChild?: Node | Vidyano.WebComponents.WebComponent): Node;
    removeAttribute(name?: string): void;
    setAttribute(name?: string, value?: string): void;
    querySelector(selectors: string): Node | HTMLElement | Vidyano.WebComponents.WebComponent;
    querySelectorAll(selectors: string): NodeList;
    appendChild(newChild: Node | Vidyano.WebComponents.WebComponent): Node | Vidyano.WebComponents.WebComponent;
    removeChild(oldChild: Node | Vidyano.WebComponents.WebComponent): Node | Vidyano.WebComponents.WebComponent;
    replaceChild(newChild: Node | Vidyano.WebComponents.WebComponent, oldChild: Node | Vidyano.WebComponents.WebComponent): Node;
    getEffectiveChildNodes(): Node[];
    observeNodes(callBack: (info: PolymerDomChangedInfo) => void): PolymerDomChangeObserver;
    unobserveNodes(observer: PolymerDomChangeObserver);
}

interface PolymerDomChangedInfo {
    addedNodes: Node[];
    removedNodes: Node[];
    target: Element;
}

interface PolymerDomChangeObserver {
}

interface PolymerTrackEvent extends CustomEvent {
    detail: {
        sourceEvent?: Event;
    }
}

interface PolymerTrackDetail {
    /**
    state - a string indicating the tracking state:
        - start - fired when tracking is first detected (finger/button down and moved past a pre-set distance threshold)
        - track - fired while tracking
        - end - fired when tracking ends
    */
    state: string;
    /** clientX coordinate for event */
    x: number;
    /** clientY coordinate for event */
    y: number;
    /** change in pixels horizontally since the first track event */
    dx: number;
    /** change in pixels vertically since the first track event */
    dy: number;
    /** change in pixels horizontally since last track event */
    ddx: number;
    /** change in pixels vertically since last track event */
    ddy: number;
    /** a function that may be called to determine the element currently being hovered */
    hover(): Element | Vidyano.WebComponents.WebComponent;
}

interface PolymerTemplate extends Node {
    stamp: (model: any) => TemplateInstance;
}

interface TemplateInstance {
    item: any;
    index: number;
    root: DocumentFragment;
}

interface TapEvent extends CustomEvent {
    detail: {
        x: number;
        y: number;
        sourceEvent: Event;
        preventer?: Event;
    };

    model?: TemplateInstance | any;
}

interface PolymerGestures {
    add: (node: HTMLElement, eventName: string, handler: Function) => void;
    remove: (node: HTMLElement, eventName: string, handler: Function) => void;
}

declare var Polymer: {
    (polymer: any): any;
    dom(element: Node | Vidyano.WebComponents.WebComponent): PolymerDomApi;
    getRegisteredPrototype(tagName: string): any;

    /**
     * Returns true if the element is a Polymer web component.
     */
    isInstance(element: HTMLElement): boolean;

    whenReady(callback: () => void): void;

    /**
     * no-operation function for handy stubs
     */
    nop(): void;

    api: any;

    Gestures: PolymerGestures;
};
declare var CustomElements: {
    registry: {
        [tag: string]: {
            ctor: any;
        }
    }

    ready: boolean;
    useNative: boolean;
};
declare class Queue {
    constructor(maxConcurrentPromises: number, maxQueuedPromises?: number);
    add<T>(work: () => Promise<T>): Promise<T>;
    getQueueLength(): number;
}// Type definitions for QUnit v1.16
// Project: http://qunitjs.com/
// Definitions by: Diullei Gomes <https://github.com/diullei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface DoneCallbackObject {
    /**
    * The number of failed assertions
    */
    failed: number;

    /**
    * The number of passed assertions
    */
    passed: number;

    /**
    * The total number of assertions
    */
    total: number;

    /**
    * The time in milliseconds it took tests to run from start to finish.
    */
    runtime: number;
}

interface LogCallbackObject {
    /**
    * The boolean result of an assertion, true means passed, false means failed.
    */
    result: boolean;

    /**
    * One side of a comparision assertion. Can be undefined when ok() is used.
    */
    actual: Object;

    /**
    * One side of a comparision assertion. Can be undefined when ok() is used.
    */
    expected: Object;

    /**
    * A string description provided by the assertion.
    */
    message: string;

    /**
    * The associated stacktrace, either from an exception or pointing to the source
    * of the assertion. Depends on browser support for providing stacktraces, so can be
    * undefined.
    */
    source: string;
}

interface ModuleStartCallbackObject {
    /**
    * Name of the next module to run
    */
    name: string;
}

interface ModuleDoneCallbackObject {
    /**
    * Name of this module
    */
    name: string;

    /**
    * The number of failed assertions
    */
    failed: number;

    /**
    * The number of passed assertions
    */
    passed: number;

    /**
    * The total number of assertions
    */
    total: number;
}

interface TestDoneCallbackObject {
    /**
    * TName of the next test to run
    */
    name: string;

    /**
    * Name of the current module
    */
    module: string;

    /**
    * The number of failed assertions
    */
    failed: number;

    /**
    * The number of passed assertions
    */
    passed: number;

    /**
    * The total number of assertions
    */
    total: number;

    /**
    * The total runtime, including setup and teardown
    */
    duration: number;
}

interface TestStartCallbackObject {
    /**
    * Name of the next test to run
    */
    name: string;

    /**
    * Name of the current module
    */
    module: string;
}

interface Config {
    altertitle: boolean;
    autostart: boolean;
    current: Object;
    reorder: boolean;
    requireExpects: boolean;
    testTimeout: number;
    urlConfig: Array<URLConfigItem>;
    done: any;
}

interface URLConfigItem {
    id: string;
    label: string;
    tooltip: string;
}

interface LifecycleObject {
    /**
     * Runs before each test
     * @param assert
     * @deprecated
     */
    setup?: (assert: QUnitAssert) => void;

    /**
     * Runs after each test
     * @param assert
     * @deprecated
     */
    teardown?: (assert: QUnitAssert) => void;
    /**
     * Runs before each test
     * @param assert
     */
    beforeEach?: (assert: QUnitAssert) => void;
    /**
     * Runs after each test
     * @param assert
     */
    afterEach?: (assert: QUnitAssert) => void;

    /**
     * Any additional properties on the hooks object will be added to that context.
     */
    [property: string]: any;
}

interface QUnitAssert {
    /* ASSERT */
    assert: any;
    current_testEnvironment: any;
    jsDump: any;

    /**
    * Instruct QUnit to wait for an asynchronous operation.
    *
    * When your test has any asynchronous exit points, call assert.async() to get a unique
    * resolution callback for each async operation. The callback returned from assert.async()
    * will throw an Error if is invoked more than once.
    */
    async(): () => void;

    /**
    * A deep recursive comparison assertion, working on primitive types, arrays, objects,
    * regular expressions, dates and functions.
    *
    * The deepEqual() assertion can be used just like equal() when comparing the value of
    * objects, such that { key: value } is equal to { key: value }. For non-scalar values,
    * identity will be disregarded by deepEqual.
    *
    * @param actual Object or Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    deepEqual(actual: any, expected: any, message?: string): any;

    /**
    * A non-strict comparison assertion, roughly equivalent to JUnit assertEquals.
    *
    * The equal assertion uses the simple comparison operator (==) to compare the actual
    * and expected arguments. When they are equal, the assertion passes: any; otherwise, it fails.
    * When it fails, both actual and expected values are displayed in the test result,
    * in addition to a given message.
    *
    * @param actual Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    equal(actual: any, expected: any, message?: string): any;

    /**
    * Specify how many assertions are expected to run within a test.
    *
    * To ensure that an explicit number of assertions are run within any test, use
    * expect( number ) to register an expected count. If the number of assertions
    * run does not match the expected count, the test will fail.
    *
    * @param amount Number of assertions in this test.
    */
    expect(amount: number): any;

    /**
    * An inverted deep recursive comparison assertion, working on primitive types,
    * arrays, objects, regular expressions, dates and functions.
    *
    * The notDeepEqual() assertion can be used just like equal() when comparing the
    * value of objects, such that { key: value } is equal to { key: value }. For non-scalar
    * values, identity will be disregarded by notDeepEqual.
    *
    * @param actual Object or Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    notDeepEqual(actual: any, expected: any, message?: string): any;

    /**
    * A non-strict comparison assertion, checking for inequality.
    *
    * The notEqual assertion uses the simple inverted comparison operator (!=) to compare
    * the actual and expected arguments. When they aren't equal, the assertion passes: any;
    * otherwise, it fails. When it fails, both actual and expected values are displayed
    * in the test result, in addition to a given message.
    *
    * @param actual Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    notEqual(actual: any, expected: any, message?: string): any;

    notPropEqual(actual: any, expected: any, message?: string): any;

    propEqual(actual: any, expected: any, message?: string): any;

    /**
    * A non-strict comparison assertion, checking for inequality.
    *
    * The notStrictEqual assertion uses the strict inverted comparison operator (!==)
    * to compare the actual and expected arguments. When they aren't equal, the assertion
    * passes: any; otherwise, it fails. When it fails, both actual and expected values are
    * displayed in the test result, in addition to a given message.
    *
    * @param actual Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    notStrictEqual(actual: any, expected: any, message?: string): any;

    /**
    * A boolean assertion, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue().
    * Passes if the first argument is truthy.
    *
    * The most basic assertion in QUnit, ok() requires just one argument. If the argument
    * evaluates to true, the assertion passes; otherwise, it fails. If a second message
    * argument is provided, it will be displayed in place of the result.
    *
    * @param state Expression being tested
    * @param message A short description of the assertion
    */
    ok(state: any, message?: string): any;

    /**
    * A strict type and value comparison assertion.
    *
    * The strictEqual() assertion provides the most rigid comparison of type and value with
    * the strict equality operator (===)
    *
    * @param actual Expression being tested
    * @param expected Known comparison value
    * @param message A short description of the assertion
    */
    strictEqual(actual: any, expected: any, message?: string): any;

    /**
    * Assertion to test if a callback throws an exception when run.
    *
    * When testing code that is expected to throw an exception based on a specific set of
    * circumstances, use throws() to catch the error object for testing and comparison.
    *
    * @param block Function to execute
    * @param expected Error Object to compare
    * @param message A short description of the assertion
    */
    throws(block: () => any, expected: any, message?: string): any;

    /**
    * @param block Function to execute
    * @param message A short description of the assertion
    */
    throws(block: () => any, message?: string): any;

    /**
    * Alias of throws.
    *
    * In very few environments, like Closure Compiler, throws is considered a reserved word
    * and will cause an error. For that case, an alias is bundled called raises. It has the
    * same signature and behaviour, just a different name.
    *
    * @param block Function to execute
    * @param expected Error Object to compare
    * @param message A short description of the assertion
    */
    raises(block: () => any, expected: any, message?: string): any;

    /**
    * Alias of throws.
    *
    * In very few environments, like Closure Compiler, throws is considered a reserved word
    * and will cause an error. For that case, an alias is bundled called raises. It has the
    * same signature and behaviour, just a different name.
    *
    * @param block Function to execute
    * @param message A short description of the assertion
    */
    raises(block: () => any, message?: string): any;
}

interface QUnitStatic extends QUnitAssert {
    /* ASYNC CONTROL */

    /**
    * Start running tests again after the testrunner was stopped. See stop().
    *
    * When your async test has multiple exit points, call start() for the corresponding number of stop() increments.
    *
    * @param decrement Optional argument to merge multiple start() calls into one. Use with multiple corrsponding stop() calls.
    */
    start(decrement?: number): any;

    /**
    * Stop the testrunner to wait for async tests to run. Call start() to continue.
    *
    * When your async test has multiple exit points, call stop() with the increment argument, corresponding to the number of start() calls you need.
    *
    * On Blackberry 5.0, window.stop is a native read-only function. If you deal with that browser, use QUnit.stop() instead, which will work anywhere.
    *
    * @param decrement Optional argument to merge multiple stop() calls into one. Use with multiple corrsponding start() calls.
    */
    stop(increment?: number): any;

    /* CALLBACKS */

    /**
    * Register a callback to fire whenever the test suite begins.
    *
    * QUnit.begin() is called once before running any tests. (a better would've been QUnit.start,
    * but thats already in use elsewhere and can't be changed.)
    *
    * @param callback Callback to execute
    */
    begin(callback: () => any): any;

    /**
    * Register a callback to fire whenever the test suite ends.
    *
    * @param callback Callback to execute.
    */
    done(callback: (details: DoneCallbackObject) => any): any;

    /**
    * Register a callback to fire whenever an assertion completes.
    *
    * This is one of several callbacks QUnit provides. Its intended for integration scenarios like
    * PhantomJS or Jenkins. The properties of the details argument are listed below as options.
    *
    * @param callback Callback to execute.
    */
    log(callback: (details: LogCallbackObject) => any): any;

    /**
    * Register a callback to fire whenever a module ends.
    *
    * @param callback Callback to execute.
    */
    moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any;

    /**
    * Register a callback to fire whenever a module begins.
    *
    * @param callback Callback to execute.
    */
    moduleStart(callback: (details: ModuleStartCallbackObject) => any): any;

    /**
    * Register a callback to fire whenever a test ends.
    *
    * @param callback Callback to execute.
    */
    testDone(callback: (details: TestDoneCallbackObject) => any): any;

    /**
    * Register a callback to fire whenever a test begins.
    *
    * @param callback Callback to execute.
    */
    testStart(callback: (details: TestStartCallbackObject) => any): any;

    /* CONFIGURATION */

    /**
    * QUnit has a bunch of internal configuration defaults, some of which are
    * useful to override. Check the description for each option for details.
    */
    config: Config;

    /* TEST */

    /**
    * Add an asynchronous test to run. The test must include a call to start().
    *
    * For testing asynchronous code, asyncTest will automatically stop the test runner
    * and wait for your code to call start() to continue.
    *
    * @param name Title of unit being tested
    * @param expected Number of assertions in this test
    * @param test Function to close over assertions
    */
    asyncTest(name: string, expected: number, test: (assert: QUnitAssert) => any): any;

    /**
    * Add an asynchronous test to run. The test must include a call to start().
    *
    * For testing asynchronous code, asyncTest will automatically stop the test runner
    * and wait for your code to call start() to continue.
    *
    * @param name Title of unit being tested
    * @param test Function to close over assertions
    */
    asyncTest(name: string, test: (assert: QUnitAssert) => any): any;

    /**
    * Specify how many assertions are expected to run within a test.
    *
    * To ensure that an explicit number of assertions are run within any test, use
    * expect( number ) to register an expected count. If the number of assertions
    * run does not match the expected count, the test will fail.
    *
    * @param amount Number of assertions in this test.
    * @depricated since version 1.16
    */
    expect(amount: number): any;

    /**
    * Group related tests under a single label.
    *
    * All tests that occur after a call to module() will be grouped into that module.
    * The test names will all be preceded by the module name in the test results.
    * You can then use that module name to select tests to run.
    *
    * @param name Label for this group of tests
    * @param lifecycle Callbacks to run before and after each test
    */
    module(name: string, lifecycle?: LifecycleObject): any;

    /**
    * Add a test to run.
    *
    * When testing the most common, synchronous code, use test().
    * The assert argument to the callback contains all of QUnit's assertion methods.
    * If you are avoiding using any of QUnit's globals, you can use the assert
    * argument instead.
    *
    * @param title Title of unit being tested
    * @param expected Number of assertions in this test
    * @param test Function to close over assertions
    */
    test(title: string, expected: number, test: (assert: QUnitAssert) => any): any;

    /**
    * @param title Title of unit being tested
    * @param test Function to close over assertions
    */
    test(title: string, test: (assert: QUnitAssert) => any): any;

    /**
    * https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
    */
    equiv(a: any, b: any): any;

    /**
    * https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L897
    */
    push(result: any, actual: any, expected: any, message: string): any;

    /**
    * https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L839
    */
    reset(): any;
}

/* ASSERT */

/**
* A deep recursive comparison assertion, working on primitive types, arrays, objects,
* regular expressions, dates and functions.
*
* The deepEqual() assertion can be used just like equal() when comparing the value of
* objects, such that { key: value } is equal to { key: value }. For non-scalar values,
* identity will be disregarded by deepEqual.
*
* @param actual Object or Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function deepEqual(actual: any, expected: any, message?: string): any;

/**
* A non-strict comparison assertion, roughly equivalent to JUnit assertEquals.
*
* The equal assertion uses the simple comparison operator (==) to compare the actual
* and expected arguments. When they are equal, the assertion passes: any; otherwise, it fails.
* When it fails, both actual and expected values are displayed in the test result,
* in addition to a given message.
*
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function equal(actual: any, expected: any, message?: string): any;

/**
* An inverted deep recursive comparison assertion, working on primitive types,
* arrays, objects, regular expressions, dates and functions.
*
* The notDeepEqual() assertion can be used just like equal() when comparing the
* value of objects, such that { key: value } is equal to { key: value }. For non-scalar
* values, identity will be disregarded by notDeepEqual.
*
* @param actual Object or Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notDeepEqual(actual: any, expected: any, message?: string): any;

/**
* A non-strict comparison assertion, checking for inequality.
*
* The notEqual assertion uses the simple inverted comparison operator (!=) to compare
* the actual and expected arguments. When they aren't equal, the assertion passes;
* otherwise, it fails. When it fails, both actual and expected values are displayed
* in the test result, in addition to a given message.
*
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notEqual(actual: any, expected: any, message?: string): any;

/**
* A non-strict comparison assertion, checking for inequality.
*
* The notStrictEqual assertion uses the strict inverted comparison operator (!==)
* to compare the actual and expected arguments. When they aren't equal, the assertion
* passes; otherwise, it fails. When it fails, both actual and expected values are
* displayed in the test result, in addition to a given message.
*
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notStrictEqual(actual: any, expected: any, message?: string): any;

/**
* A boolean assertion, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue().
* Passes if the first argument is truthy.
*
* The most basic assertion in QUnit, ok() requires just one argument. If the argument
* evaluates to true, the assertion passes; otherwise, it fails. If a second message
* argument is provided, it will be displayed in place of the result.
*
* @param state Expression being tested
* @param message A short description of the assertion
*/
declare function ok(state: any, message?: string): any;

/**
* A strict type and value comparison assertion.
*
* The strictEqual() assertion provides the most rigid comparison of type and value with
* the strict equality operator (===)
*
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function strictEqual(actual: any, expected: any, message?: string): any;

/**
* Assertion to test if a callback throws an exception when run.
*
* When testing code that is expected to throw an exception based on a specific set of
* circumstances, use throws() to catch the error object for testing and comparison.
*
* @param block Function to execute
* @param expected Error Object to compare
* @param message A short description of the assertion
*/
declare function throws(block: () => any, expected: any, message?: string): any;

/**
* @param block Function to execute
* @param message A short description of the assertion
*/
declare function throws(block: () => any, message?: string): any;

/* ASYNC CONTROL */

/**
* Start running tests again after the testrunner was stopped. See stop().
*
* When your async test has multiple exit points, call start() for the corresponding number of stop() increments.
*
* @param decrement Optional argument to merge multiple start() calls into one. Use with multiple corrsponding stop() calls.
*/
declare function start(decrement?: number): any;

/**
* Stop the testrunner to wait for async tests to run. Call start() to continue.
*
* When your async test has multiple exit points, call stop() with the increment argument, corresponding to the number of start() calls you need.
*
* On Blackberry 5.0, window.stop is a native read-only function. If you deal with that browser, use QUnit.stop() instead, which will work anywhere.
*
* @param decrement Optional argument to merge multiple stop() calls into one. Use with multiple corrsponding start() calls.
*/
declare function stop(increment?: number): any;

/* CALLBACKS */

/**
* Register a callback to fire whenever the test suite begins.
*
* QUnit.begin() is called once before running any tests. (a better would've been QUnit.start,
* but thats already in use elsewhere and can't be changed.)
*
* @param callback Callback to execute
*/
declare function begin(callback: () => any): any;

/**
* Register a callback to fire whenever the test suite ends.
*
* @param callback Callback to execute.
*/
declare function done(callback: (details: DoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever an assertion completes.
*
* This is one of several callbacks QUnit provides. Its intended for integration scenarios like
* PhantomJS or Jenkins. The properties of the details argument are listed below as options.
*
* @param callback Callback to execute.
*/
declare function log(callback: (details: LogCallbackObject) => any): any;

/**
* Register a callback to fire whenever a module ends.
*
* @param callback Callback to execute.
*/
declare function moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever a module begins.
*
* @param callback Callback to execute.
*/
declare function moduleStart(callback: (name: string) => any): any;

/**
* Register a callback to fire whenever a test ends.
*
* @param callback Callback to execute.
*/
declare function testDone(callback: (details: TestDoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever a test begins.
*
* @param callback Callback to execute.
*/
declare function testStart(callback: (details: TestStartCallbackObject) => any): any;

/* TEST */

/**
* Add an asynchronous test to run. The test must include a call to start().
*
* For testing asynchronous code, asyncTest will automatically stop the test runner
* and wait for your code to call start() to continue.
*
* @param name Title of unit being tested
* @param expected Number of assertions in this test
* @param test Function to close over assertions
*/
declare function asyncTest(name: string, expected?: any, test?: (assert: QUnitAssert) => any): any;

/**
* Add an asynchronous test to run. The test must include a call to start().
*
* For testing asynchronous code, asyncTest will automatically stop the test runner
* and wait for your code to call start() to continue.
*
* @param name Title of unit being tested
* @param test Function to close over assertions
*/
declare function asyncTest(name: string, test: (assert: QUnitAssert) => any): any;

/**
* Specify how many assertions are expected to run within a test.
*
* To ensure that an explicit number of assertions are run within any test, use
* expect( number ) to register an expected count. If the number of assertions
* run does not match the expected count, the test will fail.
*
* @param amount Number of assertions in this test.
* @depricated since version 1.16
*/
declare function expect(amount: number): any;

// ** conflict with TypeScript module keyword. Must be used on QUnit namespace
//declare var module: (name: string, lifecycle?: LifecycleObject) => any;

/**
* Add a test to run.
*
* When testing the most common, synchronous code, use test().
* The assert argument to the callback contains all of QUnit's assertion methods.
* If you are avoiding using any of QUnit's globals, you can use the assert
* argument instead.
*
* @param title Title of unit being tested
* @param expected Number of assertions in this test
* @param test Function to close over assertions
*/
declare function test(title: string, expected: number, test: (assert?: QUnitAssert) => any): any;

/**
* @param title Title of unit being tested
* @param test Function to close over assertions
*/
declare function test(title: string, test: (assert?: QUnitAssert) => any): any;

declare function notPropEqual(actual: any, expected: any, message?: string): any;

declare function propEqual(actual: any, expected: any, message?: string): any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
declare function equiv(a: any, b: any): any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
declare var raises: any;

/* QUNIT */
declare var QUnit: QUnitStatic;interface ISortable {
	destroy(): void;
	option(name: string, value?: any): any;
}

interface SortableOptions {
	group?: string;
	handle?: string;
	ghostClass?: string;
	draggable?: string;
	animation?: number;
	onSort?: Function;
}

interface SortableStatic {
    create(el: HTMLElement | Node, options?: SortableOptions): ISortable;
}

declare var Sortable: SortableStatic;/* tslint:disable:interface-name */
interface String {
    asDataUri(): string;
    contains(str: string): boolean;
    endsWith(suffix: string): boolean;
    insert(str: string, index: number): string;
    padLeft(width: number, str?: string): string;
    padRight(width: number, str?: string): string;
    startsWith(prefix: string): boolean;
    trimEnd(c: string): string;
    trimStart(c: string): string;
    localeFormat(format: string, useDefault: boolean): string;
}

interface Date {
    netType(value: string);
    netType(): string;

    netOffset(value: string);
    netOffset(): string;

    format(format: string): string;
}

interface Number {
	format(format: string): string;
}

interface ExpressionParserStatic {
    alwaysTrue: (count: number) => boolean;
    get(expression: string): (count: number) => boolean;
}

declare var ExpressionParser: ExpressionParserStatic;

interface UniqueStatic {
    get(): string;
}

declare var Unique: UniqueStatic;

interface StringEx {
    isNullOrEmpty(str: string): boolean;
    isNullOrWhiteSpace(str: string): boolean;
    format(format: string, ...args: any[]): string;
}

declare var StringEx: StringEx;


interface BooleanEx {
    parse(str: string): boolean;
}

declare var BooleanEx: BooleanEx;

interface Array<T> {
    remove(s: T): boolean;
    removeAll(f: (t: T) => boolean, thisObject?: any): void;
}

interface BigNumber {
    toNumber(): number;
    equals(value: BigNumber): boolean;
}

declare var BigNumber: {
    new (number: number | string): BigNumber;
};
/* tslint:enable:interface-name */declare var unwrap: <TNode extends Node>(node: TNode) => TNode;

interface Node {
    /**
    * Appends the WebComponent to this component.
    */
    appendChild<TWebComponent extends Vidyano.WebComponents.WebComponent>(component: TWebComponent): TWebComponent;

    /**
    * Appends the Node to this component.
    */
    appendChild<TNode extends Node>(node: TNode): TNode;
}// Type definitions for d3JS
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module d3 {
    /**
     * The current version of D3.js.
     */
    export var version: string;

    /**
     * Find the first element that matches the given selector string.
     */
    export function select(selector: string): Selection<any>;

    /**
     * Create a selection from the given node reference.
     */
    export function select(node: EventTarget): Selection<any>;

    /**
     * Find all elements that match the given selector string.
     */
    export function selectAll(selector: string): Selection<any>;

    /**
     * Create a selection from the given list of nodes.
     */
    export function selectAll(nodes: EventTarget[]): Selection<any>;

    /**
     * Returns the root selection (as if by d3.select(document.documentElement)). This function may be used for 'instanceof' tests, and extending its prototype will add properties to all selections.
     */
    export function selection(): Selection<any>;

    module selection {
        export var prototype: Selection<any>;

        /**
         * Selections are grouped into arrays of nodes, with the parent tracked in the 'parentNode' property.
         */
        interface Group extends Array<EventTarget> {
            parentNode: EventTarget;
        }

        interface Update<Datum> {
            /**
             * Retrieve a grouped selection.
             */
            [index: number]: Group;

            /**
             * The number of groups in this selection.
             */
            length: number;

            /**
             * Retrieve the value of the given attribute for the first node in the selection.
             *
             * @param name The attribute name to query. May be prefixed (see d3.ns.prefix).
             */
            attr(name: string): string;

            /**
             * For all nodes, set the attribute to the specified constant value. Use null to remove.
             *
             * @param name The attribute name, optionally prefixed.
             * @param value The attribute value to use. Note that this is coerced to a string automatically.
             */
            attr(name: string, value: Primitive): Update<Datum>;

            /**
             * Derive an attribute value for each node in the selection based on bound data.
             *
             * @param name The attribute name, optionally prefixed.
             * @param value The function of the datum (the bound data item), index (the position in the subgrouping), and outer index (overall position in nested selections) which computes the attribute value. If the function returns null, the attribute is removed.
             */
            attr(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive): Update<Datum>;

            /**
             * Set multiple properties at once using an Object. D3 iterates over all enumerable properties and either sets or computes the attribute's value based on the corresponding entry in the Object.
             *
             * @param obj A key-value mapping corresponding to attributes and values. If the value is a simple string or number, it is taken as a constant. Otherwise, it is a function that derives the attribute value.
             */
            attr(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }): Update<Datum>;

            /**
             * Returns true if the first node in this selection has the given class list. If multiple classes are specified (i.e., "foo bar"), then returns true only if all classes match.
             *
             * @param name The class list to query.
             */
            classed(name: string): boolean;

            /**
             * Adds (or removes) the given class list.
             *
             * @param name The class list to toggle. Spaces separate class names: "foo bar" is a list of two classes.
             * @param value If true, add the classes. If false, remove them.
             */
            classed(name: string, value: boolean): Update<Datum>;

            /**
             * Determine if the given class list should be toggled for each node in the selection.
             *
             * @param name The class list. Spaces separate multiple class names.
             * @param value The function to run for each node. Should return true to add the class to the node, or false to remove it.
             */
            classed(name: string, value: (datum: Datum, index: number, outerIndex: number) => boolean): Update<Datum>;

            /**
             * Set or derive classes for multiple class lists at once.
             *
             * @param obj An Object mapping class lists to values that are either plain booleans or functions that return booleans.
             */
            classed(obj: { [key: string]: boolean | ((datum: Datum, index: number, outerIndex: number) => boolean) }): Update<Datum>;

            /**
             * Retrieve the computed style value for the first node in the selection.
             * @param name The CSS property name to query
             */
            style(name: string): string;

            /**
             * Set a style property for all nodes in the selection.
             * @param name the CSS property name
             * @param value the property value
             * @param priority if specified, either null or the string "important" (no exclamation mark)
             */
            style(name: string, value: Primitive, priority?: string): Update<Datum>;

            /**
             * Derive a property value for each node in the selection.
             * @param name the CSS property name
             * @param value the function to derive the value
             * @param priority if specified, either null or the string "important" (no exclamation mark)
             */
            style(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string): Update<Datum>;

            /**
             * Set a large number of CSS properties from an object.
             *
             * @param obj an Object whose keys correspond to CSS property names and values are either constants or functions that derive property values
             * @param priority if specified, either null or the string "important" (no exclamation mark)
             */
            style(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }, priority?: string): Update<Datum>;

            /**
             * Retrieve an arbitrary node property such as the 'checked' property of checkboxes, or the 'value' of text boxes.
             *
             * @param name the node's property to retrieve
             */
            property(name: string): any;

            /**
             * For each node, set the property value. Internally, this sets the node property directly (e.g., node[name] = value), so take care not to mutate special properties like __proto__.
             *
             * @param name the property name
             * @param value the property value
             */
            property(name: string, value: any): Update<Datum>;

            /**
             * For each node, derive the property value. Internally, this sets the node property directly (e.g., node[name] = value), so take care not to mutate special properties like __proto__.
             *
             * @param name the property name
             * @param value the function used to derive the property's value
             */
            property(name: string, value: (datum: Datum, index: number, outerIndex: number) => any): Update<Datum>;

            /**
             * Set multiple node properties. Caveats apply: take care not to mutate special properties like __proto__.
             *
             * @param obj an Object whose keys correspond to node properties and values are either constants or functions that will compute a value.
             */
            property(obj: { [key: string]: any | ((datum: Datum, index: number, outerIndex: number) => any) }): Update<Datum>;

            /**
             * Retrieve the textContent of the first node in the selection.
             */
            text(): string;

            /**
             * Set the textContent of each node in the selection.
             * @param value the text to use for all nodes
             */
            text(value: Primitive): Update<Datum>;

            /**
             * Compute the textContent of each node in the selection.
             * @param value the function which will compute the text
             */
            text(value: (datum: Datum, index: number, outerIndex: number) => Primitive): Update<Datum>;

            /**
             * Retrieve the HTML content of the first node in the selection. Uses 'innerHTML' internally and will not work with SVG or other elements without a polyfill.
             */
            html(): string;

            /**
             * Set the HTML content of every node in the selection. Uses 'innerHTML' internally and thus will not work with SVG or other elements without a polyfill.
             * @param value the HTML content to use.
             */
            html(value: string): Selection<Datum>;

            /**
             * Compute the HTML content for each node in the selection. Uses 'innerHTML' internally and thus will not work with SVG or other elements without a polyfill.
             * @param value the function to compute HTML content
             */
            html(value: (datum: Datum, index: number, outerIndex: number) => string): Selection<Datum>;

            /**
             * Appends a new child to each node in the selection. This child will inherit the parent's data (if available). Returns a fresh selection consisting of the newly-appended children.
             *
             * @param name the element name to append. May be prefixed (see d3.ns.prefix).
             */
            append(name: string): Selection<Datum>;

            /**
             * Appends a new child to each node in the selection by computing a new node. This child will inherit the parent's data (if available). Returns a fresh selection consisting of the newly-appended children.
             *
             * @param name the function to compute a new element
             */
            append(name: (datum: Datum, index: number, outerIndex: number) => EventTarget): Update<Datum>;

            /**
             * Inserts a new child to each node in the selection. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
             * @param name the element name to append. May be prefixed (see d3.ns.prefix).
             * @param before the selector to determine position (e.g., ":first-child")
             */
            insert(name: string, before: string): Update<Datum>;

            /**
             * Inserts a new child to each node in the selection. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
             * @param name the element name to append. May be prefixed (see d3.ns.prefix).
             * @param before a function to determine the node to use as the next sibling
             */
            insert(name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Update<Datum>;

            /**
             * Inserts a new child to the end of each node in the selection by computing a new node. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
             * @param name the function to compute a new child
             * @param before the selector to determine position (e.g., ":first-child")
             */
            insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: string): Update<Datum>;

            /**
             * Inserts a new child to the end of each node in the selection by computing a new node. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
             * @param name the function to compute a new child
             * @param before a function to determine the node to use as the next sibling
             */
            insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Update<Datum>;

            /**
             * Removes the elements from the DOM. They are in a detached state and may be re-added (though there is currently no dedicated API for doing so).
             */
            remove(): Update<Datum>;

            /**
             * Retrieves the data bound to the first group in this selection.
             */
            data(): Datum[];

            /**
             * Binds data to this selection.
             * @param data the array of data to bind to this selection
             * @param key the optional function to determine the unique key for each piece of data. When unspecified, uses the index of the element.
             */
            data<NewDatum>(data: NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string): Update<NewDatum>;

            /**
             * Derives data to bind to this selection.
             * @param data the function to derive data. Must return an array.
             * @param key the optional function to determine the unique key for each data item. When unspecified, uses the index of the element.
             */
            data<NewDatum>(data: (datum: Datum, index: number, outerIndex: number) => NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string): Update<NewDatum>;

            /**
             * Filters the selection, returning only those nodes that match the given CSS selector.
             * @param selector the CSS selector
             */
            filter(selector: string): Update<Datum>;

            /**
             * Filters the selection, returning only those nodes for which the given function returned true.
             * @param selector the filter function
             */
            filter(selector: (datum: Datum, index: number, outerIndex: number) => boolean): Update<Datum>;

            /**
             * Return the data item bound to the first element in the selection.
             */
            datum(): Datum;

            /**
             * Set the data item for each node in the selection.
             * @param value the constant element to use for each node
             */
            datum<NewDatum>(value: NewDatum): Update<NewDatum>;

            /**
             * Derive the data item for each node in the selection. Useful for situations such as the HTML5 'dataset' attribute.
             * @param value the function to compute data for each node
             */
            datum<NewDatum>(value: (datum: Datum, index: number, outerIndex: number) => NewDatum): Update<NewDatum>;

            /**
             * Reorders nodes in the selection based on the given comparator. Nodes are re-inserted into the document once sorted.
             * @param comparator the comparison function, which defaults to d3.ascending
             */
            sort(comparator?: (a: Datum, b: Datum) => number): Update<Datum>;

            /**
             * Reorders nodes in the document to match the selection order. More efficient than calling sort() if the selection is already ordered.
             */
            order(): Update<Datum>;

            /**
             * Returns the listener (if any) for the given event.
             * @param type the type of event to load the listener for. May have a namespace (e.g., ".foo") at the end.
             */
            on(type: string): (datum: Datum, index: number, outerIndex: number) => any;

            /**
             * Adds a listener for the specified event. If one was already registered, it is removed before the new listener is added. The return value of the listener function is ignored.
             * @param type the of event to listen to. May have a namespace (e.g., ".foo") at the end.
             * @param listener an event listener function, or null to unregister
             * @param capture sets the DOM useCapture flag
             */
            on(type: string, listener: (datum: Datum, index: number, outerIndex: number) => any, capture?: boolean): Update<Datum>;

            /**
             * Begins a new transition. Interrupts any active transitions of the same name.
             * @param name the transition name (defaults to "")
             */
            transition(name?: string): Transition<Datum>;

            /**
             * Interrupts the active transition of the provided name. Does not cancel scheduled transitions.
             * @param name the transition name (defaults to "")
             */
            interrupt(name?: string): Update<Datum>;

            /**
             * Creates a subselection by finding the first descendent matching the selector string. Bound data is inherited.
             * @param selector the CSS selector to match against
             */
            select(selector: string): Update<Datum>;

            /**
             * Creates a subselection by using a function to find descendent elements. Bound data is inherited.
             * @param selector the function to find matching descendants
             */
            select(selector: (datum: Datum, index: number, outerIndex: number) => EventTarget): Update<Datum>;

            /**
             * Creates a subselection by finding all descendents that match the given selector. Bound data is not inherited.
             * @param selector the CSS selector to match against
             */
            selectAll(selector: string): Update<Datum>;

            /**
             * Creates a subselection by using a function to find descendent elements. Bound data is not inherited.
             * @param selector the function to find matching descendents
             */
            selectAll(selector: (datum: Datum, index: number, outerIndex: number) => Array<EventTarget> | NodeList): Update<any>;

            /**
             * Invoke the given function for each element in the selection. The return value of the function is ignored.
             * @param func the function to invoke
             */
            each(func: (datum: Datum, index: number, outerIndex: number) => any): Update<Datum>;

            /**
             * Call a function on the selection. sel.call(foo) is equivalent to foo(sel).
             * @param func the function to call on the selection
             * @param args any optional args
             */
            call(func: (sel: Update<Datum>, ...args: any[]) => any, ...args: any[]): Update<Datum>;

            /**
             * Returns true if the current selection is empty.
             */
            empty(): boolean;

            /**
             * Returns the first non-null element in the selection, or null otherwise.
             */
            node(): Node;

            /**
             * Returns the total number of elements in the selection.
             */
            size(): number;

            /**
             * Returns the placeholder nodes for each data element for which no corresponding DOM element was found.
             */
            enter(): Enter<Datum>;

            /**
             * Returns a selection for those DOM nodes for which no new data element was found.
             */
            exit(): Selection<Datum>;
        }

        interface Enter<Datum> {
            append(name: string): Selection<Datum>;
            append(name: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

            insert(name: string, before?: string): Selection<Datum>;
            insert(name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;
            insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before?: string): Selection<Datum>;
            insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

            select(name: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;
            call(func: (selection: Enter<Datum>, ...args: any[]) => any, ...args: any[]): Enter<Datum>;
        }
    }

    /**
     * Administrivia: JavaScript primitive types, or "things that toString() predictably".
     */
    export type Primitive = number | string | boolean;

    /**
     * Administrivia: anything with a valueOf(): number method is comparable, so we allow it in numeric operations
     */
    interface Numeric {
        valueOf(): number;
    }

    /**
     * A grouped array of nodes.
     * @param Datum the data bound to this selection.
     */
    interface Selection<Datum> {
        /**
         * Retrieve a grouped selection.
         */
        [index: number]: selection.Group;

        /**
         * The number of groups in this selection.
         */
        length: number;

        /**
         * Retrieve the value of the given attribute for the first node in the selection.
         *
         * @param name The attribute name to query. May be prefixed (see d3.ns.prefix).
         */
        attr(name: string): string;

        /**
         * For all nodes, set the attribute to the specified constant value. Use null to remove.
         *
         * @param name The attribute name, optionally prefixed.
         * @param value The attribute value to use. Note that this is coerced to a string automatically.
         */
        attr(name: string, value: Primitive): Selection<Datum>;

        /**
         * Derive an attribute value for each node in the selection based on bound data.
         *
         * @param name The attribute name, optionally prefixed.
         * @param value The function of the datum (the bound data item), index (the position in the subgrouping), and outer index (overall position in nested selections) which computes the attribute value. If the function returns null, the attribute is removed.
         */
        attr(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive): Selection<Datum>;

        /**
         * Set multiple properties at once using an Object. D3 iterates over all enumerable properties and either sets or computes the attribute's value based on the corresponding entry in the Object.
         *
         * @param obj A key-value mapping corresponding to attributes and values. If the value is a simple string or number, it is taken as a constant. Otherwise, it is a function that derives the attribute value.
         */
        attr(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }): Selection<Datum>;

        /**
         * Returns true if the first node in this selection has the given class list. If multiple classes are specified (i.e., "foo bar"), then returns true only if all classes match.
         *
         * @param name The class list to query.
         */
        classed(name: string): boolean;

        /**
         * Adds (or removes) the given class list.
         *
         * @param name The class list to toggle. Spaces separate class names: "foo bar" is a list of two classes.
         * @param value If true, add the classes. If false, remove them.
         */
        classed(name: string, value: boolean): Selection<Datum>;

        /**
         * Determine if the given class list should be toggled for each node in the selection.
         *
         * @param name The class list. Spaces separate multiple class names.
         * @param value The function to run for each node. Should return true to add the class to the node, or false to remove it.
         */
        classed(name: string, value: (datum: Datum, index: number, outerIndex: number) => boolean): Selection<Datum>;

        /**
         * Set or derive classes for multiple class lists at once.
         *
         * @param obj An Object mapping class lists to values that are either plain booleans or functions that return booleans.
         */
        classed(obj: { [key: string]: boolean | ((datum: Datum, index: number, outerIndex: number) => boolean) }): Selection<Datum>;

        /**
         * Retrieve the computed style value for the first node in the selection.
         * @param name The CSS property name to query
         */
        style(name: string): string;

        /**
         * Set a style property for all nodes in the selection.
         * @param name the CSS property name
         * @param value the property value
         * @param priority if specified, either null or the string "important" (no exclamation mark)
         */
        style(name: string, value: Primitive, priority?: string): Selection<Datum>;

        /**
         * Derive a property value for each node in the selection.
         * @param name the CSS property name
         * @param value the function to derive the value
         * @param priority if specified, either null or the string "important" (no exclamation mark)
         */
        style(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string): Selection<Datum>;

        /**
         * Set a large number of CSS properties from an object.
         *
         * @param obj an Object whose keys correspond to CSS property names and values are either constants or functions that derive property values
         * @param priority if specified, either null or the string "important" (no exclamation mark)
         */
        style(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }, priority?: string): Selection<Datum>;

        /**
         * Retrieve an arbitrary node property such as the 'checked' property of checkboxes, or the 'value' of text boxes.
         *
         * @param name the node's property to retrieve
         */
        property(name: string): any;

        /**
         * For each node, set the property value. Internally, this sets the node property directly (e.g., node[name] = value), so take care not to mutate special properties like __proto__.
         *
         * @param name the property name
         * @param value the property value
         */
        property(name: string, value: any): Selection<Datum>;

        /**
         * For each node, derive the property value. Internally, this sets the node property directly (e.g., node[name] = value), so take care not to mutate special properties like __proto__.
         *
         * @param name the property name
         * @param value the function used to derive the property's value
         */
        property(name: string, value: (datum: Datum, index: number, outerIndex: number) => any): Selection<Datum>;

        /**
         * Set multiple node properties. Caveats apply: take care not to mutate special properties like __proto__.
         *
         * @param obj an Object whose keys correspond to node properties and values are either constants or functions that will compute a value.
         */
        property(obj: { [key: string]: any | ((datum: Datum, index: number, innerInder: number) => any) }): Selection<Datum>;

        /**
         * Retrieve the textContent of the first node in the selection.
         */
        text(): string;

        /**
         * Set the textContent of each node in the selection.
         * @param value the text to use for all nodes
         */
        text(value: Primitive): Selection<Datum>;

        /**
         * Compute the textContent of each node in the selection.
         * @param value the function which will compute the text
         */
        text(value: (datum: Datum, index: number, outerIndex: number) => Primitive): Selection<Datum>;

        /**
         * Retrieve the HTML content of the first node in the selection. Uses 'innerHTML' internally and will not work with SVG or other elements without a polyfill.
         */
        html(): string;

        /**
         * Set the HTML content of every node in the selection. Uses 'innerHTML' internally and thus will not work with SVG or other elements without a polyfill.
         * @param value the HTML content to use.
         */
        html(value: string): Selection<Datum>;

        /**
         * Compute the HTML content for each node in the selection. Uses 'innerHTML' internally and thus will not work with SVG or other elements without a polyfill.
         * @param value the function to compute HTML content
         */
        html(value: (datum: Datum, index: number, outerIndex: number) => string): Selection<Datum>;

        /**
         * Appends a new child to each node in the selection. This child will inherit the parent's data (if available). Returns a fresh selection consisting of the newly-appended children.
         *
         * @param name the element name to append. May be prefixed (see d3.ns.prefix).
         */
        append(name: string): Selection<Datum>;

        /**
         * Appends a new child to each node in the selection by computing a new node. This child will inherit the parent's data (if available). Returns a fresh selection consisting of the newly-appended children.
         *
         * @param name the function to compute a new element
         */
        append(name: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

        /**
         * Inserts a new child to each node in the selection. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
         * @param name the element name to append. May be prefixed (see d3.ns.prefix).
         * @param before the selector to determine position (e.g., ":first-child")
         */
        insert(name: string, before: string): Selection<Datum>;

        /**
         * Inserts a new child to each node in the selection. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
         * @param name the element name to append. May be prefixed (see d3.ns.prefix).
         * @param before a function to determine the node to use as the next sibling
         */
        insert(name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

        /**
         * Inserts a new child to the end of each node in the selection by computing a new node. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
         * @param name the function to compute a new child
         * @param before the selector to determine position (e.g., ":first-child")
         */
        insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: string): Selection<Datum>;

        /**
         * Inserts a new child to the end of each node in the selection by computing a new node. This child will inherit its parent's data (if available). Returns a fresh selection consisting of the newly-inserted children.
         * @param name the function to compute a new child
         * @param before a function to determine the node to use as the next sibling
         */
        insert(name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

        /**
         * Removes the elements from the DOM. They are in a detached state and may be re-added (though there is currently no dedicated API for doing so).
         */
        remove(): Selection<Datum>;

        /**
         * Retrieves the data bound to the first group in this selection.
         */
        data(): Datum[];

        /**
         * Binds data to this selection.
         * @param data the array of data to bind to this selection
         * @param key the optional function to determine the unique key for each piece of data. When unspecified, uses the index of the element.
         */
        data<NewDatum>(data: NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string): selection.Update<NewDatum>;

        /**
         * Derives data to bind to this selection.
         * @param data the function to derive data. Must return an array.
         * @param key the optional function to determine the unique key for each data item. When unspecified, uses the index of the element.
         */
        data<NewDatum>(data: (datum: Datum, index: number, outerIndex: number) => NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string): selection.Update<NewDatum>;

        /**
         * Filters the selection, returning only those nodes that match the given CSS selector.
         * @param selector the CSS selector
         */
        filter(selector: string): Selection<Datum>;

        /**
         * Filters the selection, returning only those nodes for which the given function returned true.
         * @param selector the filter function
         */
        filter(selector: (datum: Datum, index: number, outerIndex: number) => boolean): Selection<Datum>;

        /**
         * Return the data item bound to the first element in the selection.
         */
        datum(): Datum;

        /**
         * Derive the data item for each node in the selection. Useful for situations such as the HTML5 'dataset' attribute.
         * @param value the function to compute data for each node
         */
        datum<NewDatum>(value: (datum: Datum, index: number, outerIndex: number) => NewDatum): Selection<NewDatum>;

        /**
         * Set the data item for each node in the selection.
         * @param value the constant element to use for each node
         */
        datum<NewDatum>(value: NewDatum): Selection<NewDatum>;

        /**
         * Reorders nodes in the selection based on the given comparator. Nodes are re-inserted into the document once sorted.
         * @param comparator the comparison function, which defaults to d3.ascending
         */
        sort(comparator?: (a: Datum, b: Datum) => number): Selection<Datum>;

        /**
         * Reorders nodes in the document to match the selection order. More efficient than calling sort() if the selection is already ordered.
         */
        order(): Selection<Datum>;

        /**
         * Returns the listener (if any) for the given event.
         * @param type the type of event to load the listener for. May have a namespace (e.g., ".foo") at the end.
         */
        on(type: string): (datum: Datum, index: number, outerIndex: number) => any;

        /**
         * Adds a listener for the specified event. If one was already registered, it is removed before the new listener is added. The return value of the listener function is ignored.
         * @param type the of event to listen to. May have a namespace (e.g., ".foo") at the end.
         * @param listener an event listener function, or null to unregister
         * @param capture sets the DOM useCapture flag
         */
        on(type: string, listener: (datum: Datum, index: number, outerIndex: number) => any, capture?: boolean): Selection<Datum>;

        /**
         * Begins a new transition. Interrupts any active transitions of the same name.
         * @param name the transition name (defaults to "")
         */
        transition(name?: string): Transition<Datum>;

        /**
         * Interrupts the active transition of the provided name. Does not cancel scheduled transitions.
         * @param name the transition name (defaults to "")
         */
        interrupt(name?: string): Selection<Datum>;

        /**
         * Creates a subselection by finding the first descendent matching the selector string. Bound data is inherited.
         * @param selector the CSS selector to match against
         */
        select(selector: string): Selection<Datum>;

        /**
         * Creates a subselection by using a function to find descendent elements. Bound data is inherited.
         * @param selector the function to find matching descendants
         */
        select(selector: (datum: Datum, index: number, outerIndex: number) => EventTarget): Selection<Datum>;

        /**
         * Creates a subselection by finding all descendents that match the given selector. Bound data is not inherited.
         * @param selector the CSS selector to match against
         */
        selectAll(selector: string): Selection<any>;

        /**
         * Creates a subselection by finding all descendants that match the given selector. Bound data is not inherited.
         *
         * Use this overload when data-binding a subselection (that is, sel.selectAll('.foo').data(d => ...)). The type will carry over.
         */
        selectAll<T>(selector: string): Selection<T>;

        /**
         * Creates a subselection by using a function to find descendent elements. Bound data is not inherited.
         * @param selector the function to find matching descendents
         */
        selectAll(selector: (datum: Datum, index: number, outerIndex: number) => Array<EventTarget> | NodeList): Selection<any>;

        /**
         * Creates a subselection by using a function to find descendent elements. Bound data is not inherited.
         *
         * Use this overload when data-binding a subselection (that is, sel.selectAll('.foo').data(d => ...)). The type will carry over.
         * @param selector the function to find matching descendents
         */
        selectAll<T>(selector: (datum: Datum, index: number, outerIndex: number) => Array<EventTarget> | NodeList): Selection<T>;

        /**
         * Invoke the given function for each element in the selection. The return value of the function is ignored.
         * @param func the function to invoke
         */
        each(func: (datum: Datum, index: number, outerIndex: number) => any): Selection<Datum>;

        /**
         * Call a function on the selection. sel.call(foo) is equivalent to foo(sel).
         * @param func the function to call on the selection
         * @param args any optional args
         */
        call(func: (sel: Selection<Datum>, ...args: any[]) => any, ...args: any[]): Selection<Datum>;

        /**
         * Returns true if the current selection is empty.
         */
        empty(): boolean;

        /**
         * Returns the first non-null element in the selection, or null otherwise.
         */
        node(): EventTarget;

        /**
         * Returns the total number of elements in the selection.
         */
        size(): number;
    }

    export function transition(): Transition<any>;
    module transition {
        export var prototype: Transition<any>;
    }

    interface Transition<Datum> {

        transition(): Transition<Datum>;

        delay(): number;
        delay(delay: number): Transition<Datum>;
        delay(delay: (datum: Datum, index: number, outerIndex: number) => number): Transition<Datum>;

        duration(): number;
        duration(duration: number): Transition<Datum>;
        duration(duration: (datum: Datum, index: number, outerIndex: number) => number): Transition<Datum>;

        ease(): (t: number) => number;
        ease(value: string, ...args: any[]): Transition<Datum>;
        ease(value: (t: number) => number): Transition<Datum>;

        attr(name: string, value: Primitive): Transition<Datum>;
        attr(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive): Transition<Datum>;
        attr(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }): Transition<Datum>;

        attrTween(name: string, tween: (datum: Datum, index: number, attr: string) => (t: number) => Primitive): Transition<Datum>;

        style(name: string, value: Primitive, priority?: string): Transition<Datum>;
        style(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string): Transition<Datum>;
        style(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }, priority?: string): Transition<Datum>;

        styleTween(name: string, tween: (datum: Datum, index: number, attr: string) => (t: number) => Primitive, priority?: string): Transition<Datum>;

        text(value: Primitive): Transition<Datum>;
        text(value: (datum: Datum, index: number, outerIndex: number) => Primitive): Transition<Datum>;

        tween(name: string, factory: () => (t: number) => any): Transition<Datum>;

        remove(): Transition<Datum>;

        select(selector: string): Transition<Datum>;
        select(selector: (d: Datum, i: number) => EventTarget): Transition<Datum>;

        selectAll(selector: string): Transition<any>;
        selectAll(selector: (d: Datum, i: number) => EventTarget[]): Transition<any>;

        filter(selector: string): Transition<Datum>;
        filter(selector: (d: Datum, i: number) => boolean): Transition<Datum>;

        each(type: string, listener: (d: Datum, i: number) => any): Transition<Datum>;
        each(listener: (d: Datum, i: number) => any): Transition<Datum>;

        call(func: (transition: Transition<Datum>, ...args: any[]) => any, ...args: any[]): Transition<Datum>;

        empty(): boolean;
        node(): EventTarget;
        size(): number;
    }

    export function ease(type: 'linear'): (t: number) => number;
    export function ease(type: 'linear-in'): (t: number) => number;
    export function ease(type: 'linear-out'): (t: number) => number;
    export function ease(type: 'linear-in-out'): (t: number) => number;
    export function ease(type: 'linear-out-in'): (t: number) => number;

    export function ease(type: 'poly', k: number): (t: number) => number;
    export function ease(type: 'poly-in', k: number): (t: number) => number;
    export function ease(type: 'poly-out', k: number): (t: number) => number;
    export function ease(type: 'poly-in-out', k: number): (t: number) => number;
    export function ease(type: 'poly-out-in', k: number): (t: number) => number;

    export function ease(type: 'quad'): (t: number) => number;
    export function ease(type: 'quad-in'): (t: number) => number;
    export function ease(type: 'quad-out'): (t: number) => number;
    export function ease(type: 'quad-in-out'): (t: number) => number;
    export function ease(type: 'quad-out-in'): (t: number) => number;

    export function ease(type: 'cubic'): (t: number) => number;
    export function ease(type: 'cubic-in'): (t: number) => number;
    export function ease(type: 'cubic-out'): (t: number) => number;
    export function ease(type: 'cubic-in-out'): (t: number) => number;
    export function ease(type: 'cubic-out-in'): (t: number) => number;

    export function ease(type: 'sin'): (t: number) => number;
    export function ease(type: 'sin-in'): (t: number) => number;
    export function ease(type: 'sin-out'): (t: number) => number;
    export function ease(type: 'sin-in-out'): (t: number) => number;
    export function ease(type: 'sin-out-in'): (t: number) => number;

    export function ease(type: 'circle'): (t: number) => number;
    export function ease(type: 'circle-in'): (t: number) => number;
    export function ease(type: 'circle-out'): (t: number) => number;
    export function ease(type: 'circle-in-out'): (t: number) => number;
    export function ease(type: 'circle-out-in'): (t: number) => number;

    export function ease(type: 'elastic', a?: number, b?: number): (t: number) => number;
    export function ease(type: 'elastic-in', a?: number, b?: number): (t: number) => number;
    export function ease(type: 'elastic-out', a?: number, b?: number): (t: number) => number;
    export function ease(type: 'elastic-in-out', a?: number, b?: number): (t: number) => number;
    export function ease(type: 'elastic-out-in', a?: number, b?: number): (t: number) => number;

    export function ease(type: 'back', s: number): (t: number) => number;
    export function ease(type: 'back-in', s: number): (t: number) => number;
    export function ease(type: 'back-out', s: number): (t: number) => number;
    export function ease(type: 'back-in-out', s: number): (t: number) => number;
    export function ease(type: 'back-out-in', s: number): (t: number) => number;

    export function ease(type: 'bounce'): (t: number) => number;
    export function ease(type: 'bounce-in'): (t: number) => number;
    export function ease(type: 'bounce-out'): (t: number) => number;
    export function ease(type: 'bounce-in-out'): (t: number) => number;
    export function ease(type: 'bounce-out-in'): (t: number) => number;

    export function ease(type: string, ...args: any[]): (t: number) => number;

    export function timer(func: () => any, delay?: number, time?: number): void;

    module timer {
        export function flush(): void;
    }

	 interface BaseEvent {
		 type: string;
		 sourceEvent?: Event;
	 }

	 /**
	  * Define a D3-specific ZoomEvent per https://github.com/mbostock/d3/wiki/Zoom-Behavior#event
	  */
	 interface ZoomEvent extends BaseEvent {
		 scale: number;
		 translate: [number, number];
	 }

	 /**
	  * Define a D3-specific DragEvent per https://github.com/mbostock/d3/wiki/Drag-Behavior#on
	  */
	 interface DragEvent extends BaseEvent {
		 x: number;
		 y: number;
		 dx: number;
		 dy: number;
	 }

    /**
     * The current event's value. Use this variable in a handler registered with `selection.on`.
     */
    export var event: Event | BaseEvent;

    /**
     * Returns the x and y coordinates of the mouse relative to the provided container element, using d3.event for the mouse's position on the page.
     * @param container the container element (e.g. an SVG <g> element)
     */
    export function mouse(container: EventTarget): [number, number];

    /**
     * Given a container element and a touch identifier, determine the x and y coordinates of the touch.
     * @param container the container element (e.g., an SVG <svg> element)
     * @param identifier the given touch identifier
     */
    export function touch(container: EventTarget, identifer: number): [number, number];

    /**
     * Given a container element, a list of touches, and a touch identifier, determine the x and y coordinates of the touch.
     * @param container the container element (e.g., an SVG <svg> element)
     * @param identifier the given touch identifier
     */
    export function touch(container: EventTarget, touches: TouchList, identifer: number): [number, number];

    /**
     * Given a container element and an optional list of touches, return the position of every touch relative to the container.
     * @param container the container element
     * @param touches an optional list of touches (defaults to d3.event.touches)
     */
    export function touches(container: EventTarget, touches?: TouchList): Array<[number, number]>;

    // NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
    /**
     * Compares two primitive values for sorting (in ascending order).
     */
    export function ascending(a: Primitive, b: Primitive): number;

    /**
     * Compares two primitive values for sorting (in ascending order).
     */
    export function descending(a: Primitive, b: Primitive): number;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min(array: number[]): number;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min(array: string[]): string;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min<T extends Numeric>(array: T[]): T;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min<T>(array: T[], accessor: (datum: T, index: number) => string): string;

    /**
     * Return the minimum value in the array using natural order.
     */
    export function min<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;

    /**
     * Return the maximum value in the array of numbers using natural order.
     */
    export function max(array: number[]): number;

    /**
     * Return the maximum value in the array of strings using natural order.
     */
    export function max(array: string[]): string;

    /**
     * Return the maximum value in the array of numbers using natural order.
     */
    export function max<T extends Numeric>(array: T[]): T;

    /**
     * Return the maximum value in the array using natural order and a projection function to map values to numbers.
     */
    export function max<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    /**
     * Return the maximum value in the array using natural order and a projection function to map values to strings.
     */
    export function max<T>(array: T[], accessor: (datum: T, index: number) => string): string;

    /**
     * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
     */
    export function max<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;

    /**
     * Return the min and max simultaneously.
     */
    export function extent(array: number[]): [number, number];

    /**
     * Return the min and max simultaneously.
     */
    export function extent(array: string[]): [string, string];

    /**
     * Return the min and max simultaneously.
     */
    export function extent<T extends Numeric>(array: T[]): [T, T];

    /**
     * Return the min and max simultaneously.
     */
    export function extent<T extends Numeric>(array: Array<T | Primitive>): [T | Primitive, T | Primitive];

    /**
     * Return the min and max simultaneously.
     */
    export function extent<T>(array: T[], accessor: (datum: T, index: number) => number): [number, number];

    /**
     * Return the min and max simultaneously.
     */
    export function extent<T>(array: T[], accessor: (datum: T, index: number) => string): [string, string];

    /**
     * Return the min and max simultaneously.
     */
    export function extent<T, U extends Numeric>(array: U[], accessor: (datum: T, index: number) => U): [U | Primitive, U | Primitive];

    /**
     * Compute the sum of an array of numbers.
     */
    export function sum(array: number[]): number;

    /**
     * Compute the sum of an array, using the given accessor to convert values to numbers.
     */
    export function sum<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    export function mean(array: number[]): number;
    export function mean<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    export function quantile(array: number[], p: number): number;

    export function variance(array: number[]): number;
    export function variance<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    export function deviation(array: number[]): number;
    export function deviation<T>(array: T[], accessor: (datum: T, index: number) => number): number;

    export function bisectLeft(array: number[], x: number, lo?: number, hi?: number): number;
    export function bisectLeft(array: string[], x: string, lo?: number, hi?: number): number;

    export var bisect: typeof bisectRight;

    export function bisectRight<T>(array: T[], x: T, lo?: number, hi?: number): number;

    export function bisector<T, U>(accessor: (x: T) => U): {
        left: (array: T[], x: U, lo?: number, hi?: number) => number;
        right: (array: T[], x: U, lo?: number, hi?: number) => number;
    }

    export function bisector<T, U>(comparator: (a: T, b: U) => number): {
        left: (array: T[], x: U, lo?: number, hi?: number) => number;
        right: (array: T[], x: U, lo?: number, hi?: number) => number;
    }

    export function shuffle<T>(array: T[], lo?: number, hi?: number): T[];

    /**
     * Returns the enumerable property names of the specified object.
     * @param object a JavaScript object
     */
    export function keys(object: Object): string[];

    /**
     * Returns an array containing the property values of the specified object.
     */
    export function values<T>(object: { [key: string]: T }): T[];
    /**
     * Returns an array containing the property values of the specified object.
     */
    export function values<T>(object: { [key: number]: T }): T[];
    /**
     * Returns an array containing the property values of the specified object.
     */
    export function values(object: Object): any[];

    /**
     * Returns an array of key-value pairs containing the property values of the specified object.
     */
    export function entries<T>(object: { [key: string]: T }): { key: string; value: T }[];

    /**
     * Returns an array of key-value pairs containing the property values of the specified object.
     */
    export function entries<T>(object: { [key: number]: T }): { key: string; value: T }[];

    /**
     * Returns an array of key-value pairs containing the property values of the specified object.
     */
    export function entries(object: Object): { key: string; value: any }[];

    /**
     * A shim for ES6 maps. The implementation uses a JavaScript object internally, and thus keys are limited to strings.
     */
    interface Map<T> {
        /**
         * Does the map contain the given key?
         */
        has(key: string): boolean;

        /**
         * Retrieve the value for the given key. Returns undefined if there is no value stored.
         */
        get(key: string): T;

        /**
         * Set the value for the given key. Returns the new value.
         */
        set(key: string, value: T): T;

        /**
         * Remove the value for the given key. Returns true if there was a value and false otherwise.
         */
        remove(key: string): boolean;

        /**
         * Returns an array of all keys in arbitrary order.
         */
        keys(): string[];

        /**
         * Returns an array of all values in arbitrary order.
         */
        values(): T[];

        /**
         * Returns an array of key-value objects in arbitrary order.
         */
        entries(): { key: string; value: T }[];

        /**
         * Calls the function for each key and value pair in the map. The 'this' context is the map itself.
         */
        forEach(func: (key: string, value: T) => any): void;

        /**
         * Is this map empty?
         */
        empty(): boolean;

        /**
         * Returns the number of elements stored in the map.
         */
        size(): number;
    }

    /**
     * Constructs an initially empty map.
     */
    export function map<T>(): Map<T>;

    /**
     * Construct a new map by copying keys and values from the given one.
     */
    export function map<T>(object: Map<T>): Map<T>;

    /**
     * Construct a new map by copying enumerable properties and values from the given object.
     */
    export function map<T>(object: { [key: string]: T }): Map<T>;

    /**
     * Construct a new map by copying enumerable properties and values from the given object.
     */
    export function map<T>(object: { [key: number]: T }): Map<T>;

    /**
     * Construct a new map by copying elements from the array. The key function is used to identify each object.
     */
    export function map<T>(array: T[], key: (datum: T, index: number) => string): Map<T>;

    /**
     * Construct a new map by copying enumerable properties and values from the given object.
     */
    export function map(object: Object): Map<any>;

    /**
     * A shim for ES6 sets. Is only able to store strings.
     */
    interface Set {
        /**
         * Is the given string stored in this set?
         */
        has(value: string): boolean;

        /**
         * Add the string to this set. Returns the value.
         */
        add(value: string): string;

        /**
         * Remove the given value from the set. Returns true if it was stored, and false otherwise.
         */
        remove(value: string): boolean;

        /**
         * Returns an array of the strings stored in this set.
         */
        values(): string[];

        /**
         * Calls a given function for each value in the set. The return value of the function is ignored. The this context of the function is the set itself.
         */
        forEach(func: (value: string) => any): void;

        /**
         * Is this set empty?
         */
        empty(): boolean;

        /**
         * Returns the number of values stored in this set.
         */
        size(): number;
    }

    /**
     * Creates an initially-empty set.
     */
    export function set(): Set;

    /**
     * Initializes a set from the given array of strings.
     */
    export function set(array: string[]): Set;

    /**
     * Merges the specified arrays into a single array.
     */
    export function merge<T>(arrays: T[][]): T[];

    /**
     * Generates a 0-based numeric sequence. The output range does not include 'stop'.
     */
    export function range(stop: number): number[];

    /**
     * Generates a numeric sequence starting from the given start and stop values. 'step' defaults to 1. The output range does not include 'stop'.
     */
    export function range(start: number, stop: number, step?: number): number[];

    /**
     * Given the specified array, return an array corresponding to the list of indices in 'keys'.
     */
    export function permute<T>(array: { [key: number]: T }, keys: number[]): T[];

    /**
     * Given the specified object, return an array corresponding to the list of property names in 'keys'.
     */
    export function permute<T>(object: { [key: string]: T }, keys: string[]): T[];

    // TODO construct n-tuples from n input arrays
    export function zip<T>(...arrays: T[][]): T[][];

    export function transpose<T>(matrix: T[][]): T[][];

    /**
     * For each adjacent pair of elements in the specified array, returns a new array of tuples of elements i and i - 1.
     * Returns the empty array if the input array has fewer than two elements.
     */
    export function pairs<T>(array: T[]): Array<[T, T]>;

    interface Nest<T> {
        key(func: (datum: T) => string): Nest<T>;
        sortKeys(comparator: (a: string, b: string) => number): Nest<T>;
        sortValues(comparator: (a: T, b: T) => number): Nest<T>;
        rollup<U>(func: (values: T[]) => U): Nest<T>;
        map(array: T[]): { [key: string]: any };
        map(array: T[], mapType: typeof d3.map): Map<any>;
        entries(array: T[]): { key: string; values: any }[];
    }

    export function nest<T>(): Nest<T>;

    export module random {
        export function normal(mean?: number, deviation?: number): () => number;
        export function logNormal(mean?: number, deviation?: number): () => number;
        export function bates(count: number): () => number;
        export function irwinHall(count: number): () => number;
    }

    interface Transform {
        rotate: number;
        translate: [number, number];
        skew: number;
        scale: [number, number];
        toString(): string;
    }

    export function transform(transform: string): Transform;

    export function format(specifier: string): (n: number) => string;

    interface FormatPrefix {
        symbol: string;
        scale(n: number): number;
    }

    export function formatPrefix(value: number, precision?: number): FormatPrefix;

    export function round(x: number, n?: number): number;

    export function requote(string: string): string;

    export var rgb: {
        new (r: number, g: number, b: number): Rgb;
        new (color: string): Rgb;

        (r: number, g: number, b: number): Rgb;
        (color: string): Rgb;
    };

    interface Rgb extends Color {
        r: number;
        g: number;
        b: number;

        brighter(k?: number): Rgb;
        darker(k?: number): Rgb;

        hsl(): Hsl;

        toString(): string;
    }

    export var hsl: {
        new (h: number, s: number, l: number): Hsl;
        new (color: string): Hsl;

        (h: number, s: number, l: number): Hsl;
        (color: string): Hsl;
    };

    interface Hsl extends Color {
        h: number;
        s: number;
        l: number;

        brighter(k?: number): Hsl;
        darker(k?: number): Hsl;

        rgb(): Rgb;

        toString(): string;
    }

    export var hcl: {
        new (h: number, c: number, l: number): Hcl;
        new (color: string): Hcl;

        (h: number, c: number, l: number): Hcl;
        (color: string): Hcl;
    };

    interface Hcl extends Color {
        h: number;
        c: number;
        l: number;

        brighter(k?: number): Hcl;
        darker(k?: number): Hcl;
    }

    export var lab: {
        new (l: number, a: number, b: number): Lab;
        new (color: string): Lab;

        (l: number, a: number, b: number): Lab;
        (color: string): Lab;
    }

    interface Lab extends Color {
        l: number;
        a: number;
        b: number;

        brighter(k?: number): Lab;
        darker(k?: number): Lab;

        rgb(): Rgb;
        toString(): string;
    }

    export var color: {
        (): Color;
        new (): Color;
    };

    interface Color {
        rgb(): Rgb;
    }

    export module ns {
        interface Qualified {
            space: string;
            local: string;
        }

        export var prefix: { [key: string]: string };
        export function qualify(name: string): Qualified | string;
    }

    export function functor<T extends Function>(value: T): T;
    export function functor<T>(value: T): () => T;

    export function rebind(target: {}, source: {}, ...names: string[]): any;

    export function dispatch(...names: string[]): Dispatch;

    interface Dispatch {
        on(type: string): (...args: any[]) => void;
        on(type: string, listener: (...args: any[]) => any): Dispatch;
        [event: string]: (...args: any[]) => void;
    }

    export module scale {
        export function identity(): Identity;

        interface Identity {
            (n: number): number;
            invert(n: number): number;

            domain(): number[];
            domain(numbers: number[]): Identity;

            range(): number[];
            range(numbers: number[]): Identity;

            ticks(count?: number): number[];

            tickFormat(count?: number, format?: string): (n: number) => string;

            copy(): Identity;
        }

        export function linear(): Linear<number, number>;
        export function linear<Output>(): Linear<Output, Output>;
        export function linear<Range, Output>(): Linear<Range, Output>;

        interface Linear<Range, Output> {
            (x: number): Output;
            invert(y: number): number;

            domain(): number[];
            domain(numbers: number[]): Linear<Range, Output>;

            range(): Range[];
            range(values: Range[]): Linear<Range, Output>;

            rangeRound(values: number[]): Linear<number, number>;

            interpolate(): (a: Range, b: Range) => (t: number) => Output;
            interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Linear<Range, Output>;

            clamp(): boolean;
            clamp(clamp: boolean): Linear<Range, Output>;

            nice(count?: number): Linear<Range, Output>;

            ticks(count?: number): number[];

            tickFormat(count?: number, format?: string): (n: number) => string;

            copy(): Linear<Range, Output>;
        }

        export function sqrt(): Pow<number, number>;
        export function sqrt<Output>(): Pow<Output, Output>;
        export function sqrt<Range, Output>(): Pow<Range, Output>;

        export function pow(): Pow<number, number>;
        export function pow<Output>(): Pow<Output, Output>;
        export function pow<Range, Output>(): Pow<Range, Output>;

        interface Pow<Range, Output> {
            (x: number): Output;

            invert(y: number): number;

            domain(): number[];
            domain(numbers: number[]): Pow<Range, Output>;

            range(): Range[];
            range(values: Range[]): Pow<Range, Output>;

            rangeRound(values: number[]): Pow<number, number>;

            exponent(): number;
            exponent(k: number): Pow<Range, Output>;

            interpolate(): (a: Range, b: Range) => (t: number) => Output;
            interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Pow<Range, Output>;

            clamp(): boolean;
            clamp(clamp: boolean): Pow<Range, Output>;

            nice(m?: number): Pow<Range, Output>;

            ticks(count?: number): number[];

            tickFormat(count?: number, format?: string): (n: number) => string;

            copy(): Pow<Range, Output>;
        }

        export function log(): Log<number, number>;
        export function log<Output>(): Log<Output, Output>;
        export function log<Range, Output>(): Log<Range, Output>;

        interface Log<Range, Output> {
            (x: number): Output;

            invert(y: number): number;

            domain(): number[];
            domain(numbers: number[]): Log<Range, Output>;

            range(): Range[];
            range(values: Range[]): Log<Range, Output>;

            rangeRound(values: number[]): Log<number, number>;

            base(): number;
            base(base: number): Log<Range, Output>;

            interpolate(): (a: Range, b: Range) => (t: number) => Output;
            interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Log<Range, Output>;

            clamp(): boolean;
            clamp(clamp: boolean): Log<Range, Output>;

            nice(): Log<Range, Output>;

            ticks(): number[];

            tickFormat(count?: number, format?: string): (t: number) => string;

            copy(): Log<Range, Output>;
        }

        export function quantize<T>(): Quantize<T>;

        interface Quantize<T> {
            (x: number): T;

            invertExtent(y: T): [number, number];

            domain(): number[];
            domain(numbers: number[]): Quantize<T>;

            range(): T[];
            range(values: T[]): Quantize<T>;

            copy(): Quantize<T>;
        }

        export function quantile<T>(): Quantile<T>;

        interface Quantile<T> {
            (x: number): T;

            invertExtent(y: T): [number, number];

            domain(): number[];
            domain(numbers: number[]): Quantile<T>;

            range(): T[];
            range(values: T[]): Quantile<T>;

            quantiles(): number[];

            copy(): Quantile<T>;
        }

        export function threshold<Range>(): Threshold<number, Range>;
        export function threshold<Domain, Range>(): Threshold<Domain, Range>;

        interface Threshold<Domain, Range> {
            (x: number): Range;

            invertExtent(y: Range): [Domain, Domain];

            domain(): Domain[];
            domain(domain: Domain[]): Threshold<Domain, Range>;

            range(): Range[];
            range(values: Range[]): Threshold<Domain, Range>;

            copy(): Threshold<Domain, Range>;
        }

        export function ordinal<Range>(): Ordinal<string, Range>;
        export function ordinal<Domain extends { toString(): string }, Range>(): Ordinal<Domain, Range>;
        export function category10(): Ordinal<string, string>;
        export function category10<Domain extends { toString(): string }>(): Ordinal<Domain, string>;
        export function category20(): Ordinal<string, string>;
        export function category20<Domain extends { toString(): string }>(): Ordinal<Domain, string>;
        export function category20b(): Ordinal<string, string>;
        export function category20b<Domain extends { toString(): string }>(): Ordinal<Domain, string>;
        export function category20c(): Ordinal<string,string>;
        export function category20c<Domain extends { toString(): string }>(): Ordinal<Domain, string>;

        interface Ordinal<Domain extends { toString(): string }, Range> {
            (x: Domain): Range;

            domain(): Domain[];
            domain(values: Domain[]): Ordinal<Domain, Range>;

            range(): Range[];
            range(values: Range[]): Ordinal<Domain, Range>;

            rangePoints(interval: [number, number], padding?: number): Ordinal<Domain, number>;
            rangeRoundPoints(interval: [number, number], padding?: number): Ordinal<Domain, number>;

            rangeBands(interval: [number, number], padding?: number, outerPadding?: number): Ordinal<Domain, number>;
            rangeRoundBands(interval: [number, number], padding?: number, outerPadding?: number): Ordinal<Domain, number>;

            rangeBand(): number;
            rangeExtent(): [number, number];

            copy(): Ordinal<Domain, Range>;
        }
    }

    export function interpolate(a: number, b: number): (t: number) => number;
    export function interpolate(a: string, b: string): (t: number) => string;
    export function interpolate(a: string | Color, b: Color): (t: number) => string;
    export function interpolate(a: Array<string | Color>, b: Color[]): (t: number) => string;
    export function interpolate<Range, Output>(a: Range[], b: Output[]): (t: number) => Output[];
    export function interpolate<Range, Output>(a: Range[], b: Range[]): (t: number) => Output[];
    export function interpolate(a: { [key: string]: string | Color }, b: { [key: string]: Color }): (t: number) => { [key: string]: string };
    export function interpolate<Range, Output>(a: { [key: string]: Range }, b: { [key: string]: Output }): (t: number) => { [key: string]: Output };
    export function interpolate<Range, Output>(a: { [key: string]: Range }, b: { [key: string]: Range }): (t: number) => { [key: string]: Output };

    export function interpolateNumber(a: number, b: number): (t: number) => number;

    export function interpolateRound(a: number, b: number): (t: number) => number;

    export function interpolateString(a: string, b: string): (t: number) => string;

    export function interpolateRgb(a: string | Color, b: string | Color): (t: number) => string;

    export function interpolateHsl(a: string | Color, b: string | Color): (t: number) => string;

    export function interpolateLab(a: string | Color, b: string | Color): (t: number) => string;

    export function interpolateHcl(a: string | Color, b: string | Color): (t: number) => string;

    export function interpolateArray(a: Array<string | Color>, b: Color[]): (t: number) => string[];
    export function interpolateArray<Range, Output>(a: Range[], b: Range[]): (t: number) => Output[];
    export function interpolateArray<Range, Output>(a: Range[], b: Output[]): (t: number) => Output[];

    export function interpolateObject(a: { [key: string]: string | Color }, b: { [key: string]: Color }): (t: number) => { [key: string]: string };
    export function interpolateObject<Range, Output>(a: { [key: string]: Range }, b: { [key: string]: Output }): (t: number) => { [key: string]: Output };
    export function interpolateObject<Range, Output>(a: { [key: string]: Range }, b: { [key: string]: Range }): (t: number) => { [key: string]: Output };

    export function interpolateTransform(a: string | Transform, b: string | Transform): (t: number) => string;

    export function interpolateZoom(a: [number, number, number], b: [number, number, number]): {
        (t: number): [number, number, number];
        duration: number;
    };

    export var interpolators: Array<(a: any, b: any) => (t: number) => any>;

    export module time {
        export var second: Interval;
        export var minute: Interval;
        export var hour: Interval;
        export var day: Interval;
        export var week: Interval;
        export var sunday: Interval;
        export var monday: Interval;
        export var tuesday: Interval;
        export var wednesday: Interval;
        export var thursday: Interval;
        export var friday: Interval;
        export var saturday: Interval;
        export var month: Interval;
        export var year: Interval;

        interface Interval {
            (d: Date): Date;

            floor(d: Date): Date;

            round(d: Date): Date;

            ceil(d: Date): Date;

            range(start: Date, stop: Date, step?: number): Date[];

            offset(date: Date, step: number): Date;

            utc: {
                (d: Date): Date;

                floor(d: Date): Date;

                round(d: Date): Date;

                ceil(d: Date): Date;

                range(start: Date, stop: Date, step?: number): Date[];

                offset(date: Date, step: number): Date;
            }
        }

        export function seconds(start: Date, stop: Date, step?: number): Date[];
        export function minutes(start: Date, stop: Date, step?: number): Date[];
        export function hours(start: Date, stop: Date, step?: number): Date[];
        export function days(start: Date, stop: Date, step?: number): Date[];
        export function weeks(start: Date, stop: Date, step?: number): Date[];
        export function sundays(start: Date, stop: Date, step?: number): Date[];
        export function mondays(start: Date, stop: Date, step?: number): Date[];
        export function tuesdays(start: Date, stop: Date, step?: number): Date[];
        export function wednesdays(start: Date, stop: Date, step?: number): Date[];
        export function thursdays(start: Date, stop: Date, step?: number): Date[];
        export function fridays(start: Date, stop: Date, step?: number): Date[];
        export function saturdays(start: Date, stop: Date, step?: number): Date[];
        export function months(start: Date, stop: Date, step?: number): Date[];
        export function years(start: Date, stop: Date, step?: number): Date[];

        export function dayOfYear(d: Date): number;
        export function weekOfYear(d: Date): number;
        export function sundayOfYear(d: Date): number;
        export function mondayOfYear(d: Date): number;
        export function tuesdayOfYear(d: Date): number;
        export function wednesdayOfYear(d: Date): number;
        export function fridayOfYear(d: Date): number;
        export function saturdayOfYear(d: Date): number;

        export function format(specifier: string): Format;

        export module format {
            export function multi(formats: Array<[string, (d: Date) => boolean|number]>): Format;
            export function utc(specifier: string): Format;
            module utc {
                export function multi(formats: Array<[string, (d: Date) => boolean|number]>): Format;
            }

            export var iso: Format;
        }

        interface Format {
            (d: Date): string;
            parse(input: string): Date;
        }

        export function scale(): Scale<number, number>;
        export function scale<Output>(): Scale<Output, Output>;
        export function scale<Range, Output>(): Scale<Range, Output>;

        export module scale {
            export function utc(): Scale<number, number>;
            export function utc<Output>(): Scale<Output, Output>;
            export function utc<Range, Output>(): Scale<Range, Output>;
        }


        interface Scale<Range, Output> {
            (x: Date): Output;

            invert(y: number): Date;

            domain(): Date[];
            domain(dates: number[]): Scale<Range, Output>;
            domain(dates: Date[]): Scale<Range, Output>;

            nice(): Scale<Range, Output>;
            nice(interval: Interval, step?: number): Scale<Range, Output>;

            range(): Range[];
            range(values: Range[]): Scale<Range, Output>;

            rangeRound(values: number[]): Scale<number, number>;

            interpolate(): (a: Range, b: Range) => (t: number) => Output;
            interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Scale<Range, Output>;

            clamp(): boolean;
            clamp(clamp: boolean): Scale<Range, Output>;

            ticks(): Date[];
            ticks(interval: Interval, step?: number): Date[];
            ticks(count: number): Date[];

            tickFormat(count: number): (d: Date) => string;

            copy(): Scale<Range, Output>;
        }
    }

    export module behavior {
        export function drag<Datum>(): Drag<Datum>;

        interface Drag<Datum> {
            (selection: Selection<Datum>): void;

            on(type: string): (d: Datum, i: number) => any;
            on(type: string, listener: (d: Datum, i: number) => any): Drag<Datum>;

            origin(): (d: Datum, i: number) => { x: number; y: number };
            origin(accessor: (d: Datum, i: number) => { x: number; y: number }): Drag<Datum>;
        }

        export function zoom<Datum>(): Zoom<Datum>;

        module zoom {
            interface Scale {
                domain(): number[];
                domain(values: number[]): Scale;

                invert(y: number): number;

                range(values: number[]): Scale;
                range(): number[];
            }
        }

        interface Zoom<Datum> {
            (selection: Selection<Datum>): void;

            translate(): [number, number];
            translate(translate: [number, number]): Zoom<Datum>;

            scale(): number;
            scale(scale: number): Zoom<Datum>;

            scaleExtent(): [number, number];
            scaleExtent(extent: [number, number]): Zoom<Datum>;

            center(): [number, number];
            center(center: [number, number]): Zoom<Datum>;

            size(): [number, number];
            size(size: [number, number]): Zoom<Datum>;

            x(): zoom.Scale;
            x(x: zoom.Scale): Zoom<Datum>;

            y(): zoom.Scale;
            y(y: zoom.Scale): Zoom<Datum>;

            on(type: string): (d: Datum, i: number) => any;
            on(type: string, listener: (d: Datum, i: number) => any): Zoom<Datum>;

            event(selection: Selection<Datum>): void;
            event(transition: Transition<Datum>): void;
        }
    }

    export module geo {
        export function path(): Path;

        interface Path {
            (feature: any, index?: number): string;

            area(feature: any): number;

            centroid(feature: any): [number, number];

            bounds(feature: any): [[number, number], [number, number]];

            projection(): Transform | ((coordinates: [number, number]) => [number, number]);
            projection(stream: Transform): Path;
            projection(projection: (coordinates: [number, number]) => [number, number]): Path;

            pointRadius(): number | ((datum: any, index: number) => number);
            pointRadius(radius: number): Path;
            pointRadius(radius: (datum: any, index: number) => number): Path;

            context(): CanvasRenderingContext2D;
            context(context: CanvasRenderingContext2D): Path;
        }

        export function graticule(): Graticule;

        interface Graticule {
            (): any;

            lines(): any[];

            outline(): any;

            extent(): [[number, number], [number, number]];
            extent(extent: [[number, number], [number, number]]): Graticule;

            majorExtent(): [[number, number], [number, number]];
            majorExtent(extent: [[number, number], [number, number]]): Graticule;

            minorExtent(): [[number, number], [number, number]];
            minorExtent(extent: [[number, number], [number, number]]): Graticule;

            step(): [number, number];
            step(step: [number, number]): Graticule;

            majorStep(): [number, number];
            majorStep(step: [number, number]): Graticule;

            minorStep(): [number, number];
            minorStep(step: [number, number]): Graticule;

            precision(): number;
            precision(precision: number): Graticule;
        }

        export function circle(): Circle;

        interface Circle {
            (...args: any[]): any;

            origin(): [number, number] | ((...args: any[]) => [number, number]);
            origin(origin: [number, number]): Circle;
            origin(origin: (...args: any[]) => [number, number]): Circle;

            angle(): number;
            angle(angle: number): Circle;

            precision(): number;
            precision(precision: number): Circle;
        }

        export function area(feature: any): number;
        export function centroid(feature: any): [number, number];
        export function bounds(feature: any): [[number, number], [number, number]];
        export function distance(a: [number, number], b: [number, number]): number;
        export function length(feature: any): number;
        export function interpolate(a: [number, number], b: [number, number]): (t: number) => [number, number];

        export function rotation(rotate: [number, number] | [number, number, number]): Rotation;

        interface Rotation {
            (location: [number, number]): [number, number];
            invert(location: [number, number]): [number, number];
        }

        export function stream(object: any, listener: Listener): void;

        interface Listener {
            point(x: number, y: number, z: number): void;
            lineStart(): void;
            lineEnd(): void;
            polygonStart(): void;
            polygonEnd(): void;
            sphere(): void;
        }

        export function transform(methods: TransformMethods): Transform;

        interface TransformMethods {
            point?(x: number, y: number, z: number): void;
            lineStart?(): void;
            lineEnd?(): void;
            polygonStart?(): void;
            polygonEnd?(): void;
            sphere?(): void;
        }

        interface Transform {
            stream(stream: Listener): Listener;
        }

        export function clipExtent(): ClipExtent;

        interface ClipExtent extends Transform {
            extent(): [[number, number], [number, number]];
            extent(extent: [[number, number], [number, number]]): ClipExtent;
        }

        export function projection(raw: RawInvertibleProjection): InvertibleProjection;
        export function projection(raw: RawProjection): Projection;

        export function projectionMutator(factory: (...args: any[]) => RawInvertibleProjection): (...args: any[]) => InvertibleProjection;
        export function projectionMutator(factory: (...args: any[]) => RawProjection): (...args: any[]) => Projection;

        export function albers(): ConicProjection;
        export function albersUsa(): ConicProjection;
        export function azimuthalEqualArea(): InvertibleProjection;
        module azimuthalEqualArea {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function azimuthalEquidistant(): InvertibleProjection;
        module azimuthalEquidistant {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function conicConformal(): ConicProjection;
        module conicConformal {
            export function raw(phi0: number, phi1: number): RawInvertibleProjection;
        }

        export function conicEqualArea(): ConicProjection;
        module conicEqualArea {
            export function raw(phi0: number, phi1: number): RawInvertibleProjection;
        }

        export function conicEquidistant(): ConicProjection;
        module conicEquidistant {
            export function raw(phi0: number, phi1: number): RawInvertibleProjection;
        }

        export function equirectangular(): InvertibleProjection;
        module equirectangular {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function gnomonic(): InvertibleProjection;
        module gnomonic {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function mercator(): InvertibleProjection;
        module mercator {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function orthographic(): InvertibleProjection;
        module orthographic {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function stereographic(): InvertibleProjection;
        module stereographic {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        export function transverseMercator(): InvertibleProjection;
        module transverseMercator {
            export function raw(lambda: number, phi: number): [number, number];
            module raw {
                export function invert(x: number, y: number): [number, number];
            }
        }

        interface Projection {
            (location: [number, number]): [number, number];

            rotate(): [number, number, number];
            rotate(rotation: [number, number, number]): Projection;

            center(): [number, number];
            center(location: [number, number]): Projection;

            translate(): [number, number];
            translate(point: [number, number]): Projection;

            scale(): number;
            scale(scale: number): Projection;

            clipAngle(): number;
            clipAngle(angle: number): Projection;

            clipExtent(): [[number, number], [number, number]];
            clipExtent(extent: [[number, number], [number, number]]): Projection;

            precision(): number;
            precision(precision: number): Projection;

            stream(listener: Listener): Listener;
        }

        interface InvertibleProjection extends Projection {
            invert(point: [number, number]): [number, number];
        }

        interface ConicProjection extends InvertibleProjection {
            parallels(): [number, number];
            parallels(parallels: [number, number]): ConicProjection;

            rotate(): [number, number, number];
            rotate(rotation: [number, number, number]): ConicProjection;

            center(): [number, number];
            center(location: [number, number]): ConicProjection;

            translate(): [number, number];
            translate(point: [number, number]): ConicProjection;

            scale(): number;
            scale(scale: number): ConicProjection;

            clipAngle(): number;
            clipAngle(angle: number): ConicProjection;

            clipExtent(): [[number, number], [number, number]];
            clipExtent(extent: [[number, number], [number, number]]): ConicProjection;

            precision(): number;
            precision(precision: number): ConicProjection;
        }

        interface RawProjection {
            (lambda: number, phi: number): [number, number];
        }

        interface RawInvertibleProjection extends RawProjection {
            invert(x: number, y: number): [number, number];
        }
    }

    module svg {
        export function line(): Line<[number, number]>;
        export function line<T>(): Line<T>;

        interface Line<T> {
            (data: T[]): string;

            x(): number | ((d: T, i: number) => number);
            x(x: number): Line<T>;
            x(x: (d: T, i: number) => number): Line<T>;

            y(): number | ((d: T, i: number) => number);
            y(x: number): Line<T>;
            y(y: (d: T, i: number) => number): Line<T>;

            interpolate(): string | ((points: Array<[number, number]>) => string);
            interpolate(interpolate: "linear"): Line<T>;
            interpolate(interpolate: "linear-closed"): Line<T>;
            interpolate(interpolate: "step"): Line<T>;
            interpolate(interpolate: "step-before"): Line<T>;
            interpolate(interpolate: "step-after"): Line<T>;
            interpolate(interpolate: "basis"): Line<T>;
            interpolate(interpolate: "basis-open"): Line<T>;
            interpolate(interpolate: "basis-closed"): Line<T>;
            interpolate(interpolate: "bundle"): Line<T>;
            interpolate(interpolate: "cardinal"): Line<T>;
            interpolate(interpolate: "cardinal-open"): Line<T>;
            interpolate(interpolate: "cardinal-closed"): Line<T>;
            interpolate(interpolate: "monotone"): Line<T>;
            interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Line<T>;

            tension(): number;
            tension(tension: number): Line<T>;

            defined(): (d: T, i: number) => boolean;
            defined(defined: (d: T, i: number) => boolean): Line<T>;
        }

        module line {
            export function radial(): Radial<[number, number]>;
            export function radial<T>(): Radial<T>;

            interface Radial<T> {
                (data: T[]): string;

                radius(): number | ((d: T, i: number) => number);
                radius(radius: number): Radial<T>;
                radius(radius: (d: T, i: number) => number): Radial<T>;

                angle(): number | ((d: T, i: number) => number);
                angle(angle: number): Radial<T>;
                angle(angle: (d: T, i: number) => number): Radial<T>;

                interpolate(): string | ((points: Array<[number, number]>) => string);
                interpolate(interpolate: "linear"): Radial<T>;
                interpolate(interpolate: "linear-closed"): Radial<T>;
                interpolate(interpolate: "step"): Radial<T>;
                interpolate(interpolate: "step-before"): Radial<T>;
                interpolate(interpolate: "step-after"): Radial<T>;
                interpolate(interpolate: "basis"): Radial<T>;
                interpolate(interpolate: "basis-open"): Radial<T>;
                interpolate(interpolate: "basis-closed"): Radial<T>;
                interpolate(interpolate: "bundle"): Radial<T>;
                interpolate(interpolate: "cardinal"): Radial<T>;
                interpolate(interpolate: "cardinal-open"): Radial<T>;
                interpolate(interpolate: "cardinal-closed"): Radial<T>;
                interpolate(interpolate: "monotone"): Radial<T>;
                interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Radial<T>;

                tension(): number;
                tension(tension: number): Radial<T>;

                defined(): (d: T, i: number) => boolean;
                defined(defined: (d: T, i: number) => boolean): Radial<T>;
            }
        }

        export function area(): Area<[number, number]>;
        export function area<T>(): Area<T>;

        interface Area<T> {
            (data: T[]): string;

            x(): number | ((d: T, i: number) => number);
            x(x: number): Area<T>;
            x(x: (d: T, i: number) => number): Area<T>;

            x0(): number | ((d: T, i: number) => number);
            x0(x0: number): Area<T>;
            x0(x0: (d: T, i: number) => number): Area<T>;

            x1(): number | ((d: T, i: number) => number);
            x1(x1: number): Area<T>;
            x1(x1: (d: T, i: number) => number): Area<T>;

            y(): number | ((d: T, i: number) => number);
            y(y: number): Area<T>;
            y(y: (d: T, i: number) => number): Area<T>;

            y0(): number | ((d: T, i: number) => number);
            y0(y0: number): Area<T>;
            y0(y0: (d: T, i: number) => number): Area<T>;

            y1(): number | ((d: T, i: number) => number);
            y1(y1: number): Area<T>;
            y1(y1: (d: T, i: number) => number): Area<T>;

            interpolate(): string | ((points: Array<[number, number]>) => string);
            interpolate(interpolate: "linear"): Area<T>;
            interpolate(interpolate: "step"): Area<T>;
            interpolate(interpolate: "step-before"): Area<T>;
            interpolate(interpolate: "step-after"): Area<T>;
            interpolate(interpolate: "basis"): Area<T>;
            interpolate(interpolate: "basis-open"): Area<T>;
            interpolate(interpolate: "cardinal"): Area<T>;
            interpolate(interpolate: "cardinal-open"): Area<T>;
            interpolate(interpolate: "monotone"): Area<T>;
            interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Area<T>;

            tension(): number;
            tension(tension: number): Area<T>;

            defined(): (d: T, i: number) => boolean;
            defined(defined: (d: T, i: number) => boolean): Area<T>;
        }

        module area {
            export function radial(): Radial<[number, number]>;
            export function radial<T>(): Radial<T>;

            interface Radial<T> {
                (data: T[]): string;

                radius(): number | ((d: T, i: number) => number);
                radius(radius: number): Radial<T>;
                radius(radius: (d: T, i: number) => number): Radial<T>;

                innerRadius(): number | ((d: T, i: number) => number);
                innerRadius(innerRadius: number): Radial<T>;
                innerRadius(innerRadius: (d: T, i: number) => number): Radial<T>;

                outerRadius(): number | ((d: T, i: number) => number);
                outerRadius(outerRadius: number): Radial<T>;
                outerRadius(outerRadius: (d: T, i: number) => number): Radial<T>;

                angle(): number | ((d: T, i: number) => number);
                angle(angle: number): Radial<T>;
                angle(angle: (d: T, i: number) => number): Radial<T>;

                startAngle(): number | ((d: T, i: number) => number);
                startAngle(startAngle: number): Radial<T>;
                startAngle(startAngle: (d: T, i: number) => number): Radial<T>;

                endAngle(): number | ((d: T, i: number) => number);
                endAngle(endAngle: number): Radial<T>;
                endAngle(endAngle: (d: T, i: number) => number): Radial<T>;

                interpolate(): string | ((points: Array<[number, number]>) => string);
                interpolate(interpolate: "linear"): Radial<T>;
                interpolate(interpolate: "step"): Radial<T>;
                interpolate(interpolate: "step-before"): Radial<T>;
                interpolate(interpolate: "step-after"): Radial<T>;
                interpolate(interpolate: "basis"): Radial<T>;
                interpolate(interpolate: "basis-open"): Radial<T>;
                interpolate(interpolate: "cardinal"): Radial<T>;
                interpolate(interpolate: "cardinal-open"): Radial<T>;
                interpolate(interpolate: "monotone"): Radial<T>;
                interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Radial<T>;

                tension(): number;
                tension(tension: number): Radial<T>;

                defined(): (d: T, i: number) => boolean;
                defined(defined: (d: T, i: number) => boolean): Radial<T>;
            }
        }

        export function arc(): Arc<arc.Arc>;
        export function arc<T>(): Arc<T>;

        module arc {
            interface Arc {
                innerRadius: number;
                outerRadius: number;
                startAngle: number;
                endAngle: number;
                padAngle: number
            }
        }

        interface Arc<T> {
            (d: T, i?: number): string;

            innerRadius(): (d: T, i: number) => number;
            innerRadius(radius: number): Arc<T>;
            innerRadius(radius: (d: T, i: number) => number): Arc<T>;

            outerRadius(): (d: T, i: number) => number;
            outerRadius(radius: number): Arc<T>;
            outerRadius(radius: (d: T, i: number) => number): Arc<T>;

            cornerRadius(): (d: T, i: number) => number;
            cornerRadius(radius: number): Arc<T>;
            cornerRadius(radius: (d: T, i: number) => number): Arc<T>;

            padRadius(): string | ((d: T, i: number) => number);
            padRadius(radius: "auto"): Arc<T>;
            padRadius(radius: string): Arc<T>;
            padRadius(radius: (d: T, i: number) => number): Arc<T>;

            startAngle(): (d: T, i: number) => number;
            startAngle(angle: number): Arc<T>;
            startAngle(angle: (d: T, i: number) => number): Arc<T>;

            endAngle(): (d: T, i: number) => number;
            endAngle(angle: number): Arc<T>;
            endAngle(angle: (d: T, i: number) => number): Arc<T>;

            padAngle(): (d: T, i: number) => number;
            padAngle(angle: number): Arc<T>;
            padAngle(angle: (d: T, i: number) => number): Arc<T>;

            centroid(d: T, i?: number): [number, number];
        }

        export function symbol(): Symbol<{}>;
        export function symbol<T>(): Symbol<T>;

        interface Symbol<T> {
            (d: T, i?: number): string;

            type(): (d: T, i: number) => string;
            type(type: string): Symbol<T>;
            type(type: (d: T, i: number) => string): Symbol<T>;

            size(): (d: T, i: string) => number;
            size(size: number): Symbol<T>;
            size(size: (d: T, i: number) => number): Symbol<T>;
        }

        export var symbolTypes: string[];

        export function chord(): Chord<chord.Link<chord.Node>, chord.Node>;
        export function chord<Node>(): Chord<chord.Link<Node>, Node>;
        export function chord<Link, Node>(): Chord<Link, Node>;

        module chord {
            interface Link<Node> {
                source: Node;
                target: Node;
            }

            interface Node {
                radius: number;
                startAngle: number;
                endAngle: number
            }
        }

        interface Chord<Link, Node> {
            (d: Link, i: number): string;

            source(): (d: Link, i: number) => Node;
            source(source: Node): Chord<Link, Node>;
            source(source: (d: Link, i: number) => Node): Chord<Link, Node>;

            target(): (d: Link, i: number) => Node;
            target(target: Node): Chord<Link, Node>;
            target(target: (d: Link, i: number) => Node): Chord<Link, Node>;

            radius(): (d: Node, i: number) => number;
            radius(radius: number): Chord<Link, Node>;
            radius(radius: (d: Node, i: number) => number): Chord<Link, Node>;

            startAngle(): (d: Node, i: number) => number;
            startAngle(angle: number): Chord<Link, Node>;
            startAngle(angle: (d: Node, i: number) => number): Chord<Link, Node>;

            endAngle(): (d: Node, i: number) => number;
            endAngle(angle: number): Chord<Link, Node>;
            endAngle(angle: (d: Node, i: number) => number): Chord<Link, Node>;
        }

        export function diagonal(): Diagonal<diagonal.Link<diagonal.Node>, diagonal.Node>;
        export function diagonal<Node>(): Diagonal<diagonal.Link<Node>, Node>;
        export function diagonal<Link, Node>(): Diagonal<Link, Node>;

        module diagonal {
            interface Link<Node> {
                source: Node;
                target: Node;
            }

            interface Node {
                x: number;
                y: number;
            }
        }

        interface Diagonal<Link, Node> {
            (d: Link, i: number): string;

            source(): (d: Link, i: number) => Node;
            source(source: Node): Diagonal<Link, Node>;
            source(source: (d: Link, i: number) => Node): Diagonal<Link, Node>;

            target(): (d: Link, i: number) => Node;
            target(target: Node): Diagonal<Link, Node>;
            target(target: (d: Link, i: number) => Node): Diagonal<Link, Node>;

            projection(): (d: Node, i: number) => [number, number];
            projection(projection: (d: Node, i: number) => [number, number]): Diagonal<Link, Node>;
        }

        module diagonal {
            export function radial(): Radial<Link<Node>, Node>;
            export function radial<Node>(): Radial<Link<Node>, Node>;
            export function radial<Link, Node>(): Radial<Link, Node>;

            interface Radial<Link, Node> {
                (d: Link, i: number): string;

                source(): (d: Link, i: number) => Node;
                source(source: Node): Radial<Link, Node>;
                source(source: (d: Link, i: number) => Node): Radial<Link, Node>;

                target(): (d: Link, i: number) => Node;
                target(target: Node): Radial<Link, Node>;
                target(target: (d: Link, i: number) => Node): Radial<Link, Node>;

                projection(): (d: Node, i: number) => [number, number];
                projection(projection: (d: Node, i: number) => [number, number]): Radial<Link, Node>;
            }
        }

        export function axis(): Axis;

        interface Axis {
            (selection: Selection<any>): void;
            (selection: Transition<any>): void;

            scale(): any;
            scale(scale: any): Axis;

            orient(): string;
            orient(orientation: string): Axis;

            ticks(): any[];
            ticks(...args: any[]): Axis;

            tickValues(): any[];
            tickValues(values: any[]): Axis;

            tickSize(): number;
            tickSize(size: number): Axis;
            tickSize(inner: number, outer: number): Axis;

            innerTickSize(): number;
            innerTickSize(size: number): Axis;

            outerTickSize(): number;
            outerTickSize(size: number): Axis;

            tickPadding(): number;
            tickPadding(padding: number): Axis;

            tickFormat(): (t: any) => string;
            tickFormat(format: (t: any) => string): Axis;
            tickFormat(format:string): Axis;
        }

        export function brush(): Brush<any>;
        export function brush<T>(): Brush<T>;

        module brush {
            interface Scale {
                domain(): number[];
                domain(domain: number[]): Scale;

                range(): number[];
                range(range: number[]): Scale;

                invert?(y: number): number;
            }
        }

        interface Brush<T> {
            (selection: Selection<T>): void;
            (selection: Transition<T>): void;

            event(selection: Selection<T>): void;
            event(selection: Transition<T>): void;

            x(): brush.Scale;
            x(x: brush.Scale): Brush<T>;

            y(): brush.Scale;
            y(y: brush.Scale): Brush<T>;

            extent(): [number, number] | [[number, number], [number, number]];
            extent(extent: [number, number] | [[number, number], [number, number]]): Brush<T>;

            clamp(): boolean | [boolean, boolean];
            clamp(clamp: boolean | [boolean, boolean]): Brush<T>;

            clear(): void;

            empty(): boolean;

            on(type: 'brushstart'): (datum: T, index: number) => void;
            on(type: 'brush'): (datum: T, index: number) => void;
            on(type: 'brushend'): (datum: T, index: number) => void;
            on(type: string): (datum: T, index: number) => void;

            on(type: 'brushstart', listener: (datum: T, index: number) => void): Brush<T>;
            on(type: 'brush', listener: (datum: T, index: number) => void): Brush<T>;
            on(type: 'brushend', listener: (datum: T, index: number) => void): Brush<T>;
            on(type: string, listener: (datum: T, index: number) => void): Brush<T>;
        }
    }

    export function xhr(url: string, mimeType?: string, callback?: (err: any, data: any) => void): Xhr;
    export function xhr(url: string, callback: (err: any, data: any) => void): Xhr;

    interface Xhr {
        header(name: string): string;
        header(name: string, value: string): Xhr;

        mimeType(): string;
        mimeType(type: string): Xhr;

        responseType(): string;
        responseType(type: string): Xhr;

        response(): (request: XMLHttpRequest) => any;
        response(value: (request: XMLHttpRequest) => any): Xhr;

        get(callback?: (err: any, data: any) => void): Xhr;

        post(data?: any, callback?: (err: any, data: any) => void): Xhr;
        post(callback: (err: any, data: any) => void): Xhr;

        send(method: string, data?: any, callback?: (err: any, data: any) => void): Xhr;
        send(method: string, callback: (err: any, data: any) => void): Xhr;

        abort(): Xhr;

        on(type: "beforesend"): (request: XMLHttpRequest) => void;
        on(type: "progress"): (request: XMLHttpRequest) => void;
        on(type: "load"): (response: any) => void;
        on(type: "error"): (err: any) => void;
        on(type: string): (...args: any[]) => void;

        on(type: "beforesend", listener: (request: XMLHttpRequest) => void): Xhr;
        on(type: "progress", listener: (request: XMLHttpRequest) => void): Xhr;
        on(type: "load", listener: (response: any) => void): Xhr;
        on(type: "error", listener: (err: any) => void): Xhr;
        on(type: string, listener: (...args: any[]) => void): Xhr;
    }

    export function text(url: string, mimeType?: string, callback?: (err: any, data: string) => void): Xhr;
    export function text(url: string, callback: (err: any, data: string) => void): Xhr;

    export function json(url: string, callback?: (err: any, data: any) => void): Xhr;

    export function xml(url: string, mimeType?: string, callback?: (err: any, data: any) => void): Xhr;
    export function xml(url: string, callback: (err: any, data: any) => void): Xhr;

    export function html(url: string, callback?: (err: any, data: DocumentFragment) => void): Xhr;

    export var csv: Dsv;
    export var tsv: Dsv;
    export function dsv(delimiter: string, mimeType: string): Dsv;

    interface Dsv {
        (url: string, callback: (rows: { [key: string]: string }[]) => void): DsvXhr<{ [key: string]: string }>;
        (url: string, callback: (error: any, rows: { [key: string]: string }[]) => void): DsvXhr<{ [key: string]: string }>;
        (url: string): DsvXhr<{ [key: string]: string }>;
        <T>(url: string, accessor: (row: { [key: string]: string }) => T, callback: (rows: T[]) => void): DsvXhr<T>;
        <T>(url: string, accessor: (row: { [key: string]: string }) => T, callback: (error: any, rows: T[]) => void): DsvXhr<T>;
        <T>(url: string, accessor: (row: { [key: string]: string }) => T): DsvXhr<T>;

        parse(string: string): { [key: string]: string }[];
        parse<T>(string: string, accessor: (row: { [key: string]: string }, index: number) => T): T[];

        parseRows(string: string): string[][];
        parseRows<T>(string: string, accessor: (row: string[], index: number) => T): T[];

        format(rows: Object[]): string;

        formatRows(rows: string[][]): string;
    }

    interface DsvXhr<T> extends Xhr {
        row(): (row: { [key: string]: string }) => T;
        row<U>(accessor: (row: { [key: string]: string }) => U): DsvXhr<U>;

        header(name: string): string;
        header(name: string, value: string): DsvXhr<T>;

        mimeType(): string;
        mimeType(type: string): DsvXhr<T>;

        responseType(): string;
        responseType(type: string): DsvXhr<T>;

        response(): (request: XMLHttpRequest) => any;
        response(value: (request: XMLHttpRequest) => any): DsvXhr<T>;

        get(callback?: (err: any, data: T) => void): DsvXhr<T>;
        post(data?: any, callback?: (err: any, data: T) => void): DsvXhr<T>;
        post(callback: (err: any, data: T) => void): DsvXhr<T>;

        send(method: string, data?: any, callback?: (err: any, data: T) => void): DsvXhr<T>;
        send(method: string, callback: (err: any, data: T) => void): DsvXhr<T>;

        abort(): DsvXhr<T>;

        on(type: "beforesend"): (request: XMLHttpRequest) => void;
        on(type: "progress"): (request: XMLHttpRequest) => void;
        on(type: "load"): (response: T) => void;
        on(type: "error"): (err: any) => void;
        on(type: string): (...args: any[]) => void;

        on(type: "beforesend", listener: (request: XMLHttpRequest) => void): DsvXhr<T>;
        on(type: "progress", listener: (request: XMLHttpRequest) => void): DsvXhr<T>;
        on(type: "load", listener: (response: T) => void): DsvXhr<T>;
        on(type: "error", listener: (err: any) => void): DsvXhr<T>;
        on(type: string, listener: (...args: any[]) => void): DsvXhr<T>;
    }

    export function locale(definition: LocaleDefinition): Locale;

    interface LocaleDefinition {
        decimal: string;
        thousands: string;
        grouping: number[];
        currency: [string, string];
        dateTime: string;
        date: string;
        time: string;
        periods: [string, string];
        days: [string, string, string, string, string, string, string];
        shortDays: [string, string, string, string, string, string, string];
        months: [string, string, string, string, string, string, string, string, string, string, string, string];
        shortMonths: [string, string, string, string, string, string, string, string, string, string, string, string];
    }

    interface Locale {
        numberFormat(specifier: string): (n: number) => string;
        timeFormat: {
            (specifier: string): time.Format;
            utc(specifier: string): time.Format;
            multi(formats: Array<[string, (d: Date) => boolean|number]>): time.Format;
        }
    }

    module layout {
        export function bundle(): Bundle<bundle.Node>;
        export function bundle<T extends bundle.Node>(): Bundle<T>

        module bundle {
            interface Node {
                parent: Node;
            }

            interface Link<T extends Node> {
                source: T;
                target: T;
            }
        }

        interface Bundle<T extends bundle.Node> {
            (links: bundle.Link<T>[]): T[][];
        }

        export function chord(): Chord;

        module chord {
            interface Link {
                source: Node;
                target: Node;
            }

            interface Node {
                index: number;
                subindex: number;
                startAngle: number;
                endAngle: number;
                value: number;
            }

            interface Group {
                index: number;
                startAngle: number;
                endAngle: number;
                value: number;
            }
        }

        interface Chord {
            matrix(): number[][];
            matrix(matrix: number[][]): Chord;

            padding(): number;
            padding(padding: number): Chord;

            sortGroups(): (a: number, b: number) => number;
            sortGroups(comparator: (a: number, b: number) => number): Chord;

            sortSubgroups(): (a: number, b: number) => number;
            sortSubgroups(comparator: (a: number, b: number) => number): Chord;

            sortChords(): (a: number, b: number) => number;
            sortChords(comparator: (a: number, b: number) => number): Chord;

            chords(): chord.Link[];
            groups(): chord.Group[];
        }

        export function cluster(): Cluster<cluster.Result>;
        export function cluster<T extends cluster.Result>(): Cluster<T>;

        module cluster {
            interface Result {
                parent?: Result;
                children?: Result[];
                depth?: number;
                x?: number;
                y?: number;
            }

            interface Link<T extends Result> {
                source: T;
                target: T;
            }
        }

        interface Cluster<T extends cluster.Result> {
            (root: T): T[];

            nodes(root: T): T[];

            links(nodes: T[]): cluster.Link<T>[];

            children(): (node: T) => T[];
            children(accessor: (node: T) => T[]): Cluster<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Cluster<T>;

            separation(): (a: T, b: T) => number;
            separation(separation: (a: T, b: T) => number): Cluster<T>;

            size(): [number, number];
            size(size: [number, number]): Cluster<T>;

            nodeSize(): [number, number];
            nodeSize(nodeSize: [number, number]): Cluster<T>;

            value(): (a: T) => number;
            value(value: (a: T) => number): Cluster<T>;
        }

        export function force(): Force<force.Link<force.Node>, force.Node>;
        export function force<Node extends force.Node>(): Force<force.Link<Node>, Node>;
        export function force<Link extends force.Link<force.Node>, Node extends force.Node>(): Force<Link, Node>;

        module force {
            interface Link<T extends Node> {
                source: T;
                target: T;
            }

            interface Node {
                index?: number;
                x?: number;
                y?: number;
                px?: number;
                py?: number;
                fixed?: boolean;
                weight?: number;
            }

            interface Event {
                type: string;
                alpha: number;
            }
        }

        interface Force<Link extends force.Link<force.Node>, Node extends force.Node> {
            size(): [number, number];
            size(size: [number, number]): Force<Link, Node>;

            linkDistance(): number | ((link: Link, index: number) => number);
            linkDistance(distance: number): Force<Link, Node>;
            linkDistance(distance: (link: Link, index: number) => number): Force<Link, Node>;

            linkStrength(): number | ((link: Link, index: number) => number);
            linkStrength(strength: number): Force<Link, Node>;
            linkStrength(strength: (link: Link, index: number) => number): Force<Link, Node>;

            friction(): number;
            friction(friction: number): Force<Link, Node>;

            charge(): number | ((node: Node, index: number) => number);
            charge(charge: number): Force<Link, Node>;
            charge(charge: (node: Node, index: number) => number): Force<Link, Node>;

            chargeDistance(): number;
            chargeDistance(distance: number): Force<Link, Node>;

            theta(): number;
            theta(theta: number): Force<Link, Node>;

            gravity(): number;
            gravity(gravity: number): Force<Link, Node>;

            nodes(): Node[];
            nodes(nodes: Node[]): Force<Link, Node>;

            links(): Link[];
            links(links: { source: number; target: number }[]): Force<Link, Node>;
            links(links: Link[]): Force<Link, Node>;

            start(): Force<Link, Node>;

            alpha(): number;
            alpha(value: number): Force<Link, Node>;

            resume(): Force<Link, Node>;

            stop(): Force<Link, Node>;

            on(type: string): (event: force.Event) => void;
            on(type: string, listener: (event: force.Event) => void): Force<Link, Node>;

            drag(): behavior.Drag<Node>;
            drag(selection: Selection<Node>): void;
        }

        export function hierarchy(): Hierarchy<hierarchy.Result>;
        export function hierarchy<T extends hierarchy.Result>(): Hierarchy<T>;

        module hierarchy {
            interface Result {
                parent?: Result;
                children?: Result[];
                value?: number;
                depth?: number;
            }
        }

        interface Hierarchy<T extends hierarchy.Result> {
            (root: T): T[];

            children(): (node: T) => T[];
            children(accessor: (node: T) => T[]): Hierarchy<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Hierarchy<T>;

            value(): (node: T) => number;
            value(accessor: (node: T) => number): Hierarchy<T>;

            revalue(root: T): T[];
        }

        export function histogram(): Histogram<number>;
        export function histogram<T>(): Histogram<T>;

        module histogram {
            interface Bin<T> extends Array<T> {
                x: number;
                dx: number;
                y: number;
            }
        }

        interface Histogram<T> {
            (values: T[], index?: number): histogram.Bin<T>[];

            value(): (datum: T, index: number) => number;
            value(value: (datum: T, index: number) => number): Histogram<T>;

            range(): (values: T[], index: number) => [number, number];
            range(range: (values: T[], index: number) => [number, number]): Histogram<T>;

            bins(): (range: [number, number], values: T[], index: number) => number[];
            bins(count: number): Histogram<T>;
            bins(thresholds: number[]): Histogram<T>;
            bins(func: (range: [number, number], values: T[], index: number) => number[]): Histogram<T>;

            frequency(): boolean;
            frequency(frequency: boolean): Histogram<T>;
        }

        export function pack(): Pack<pack.Node>;
        export function pack<T extends pack.Node>(): Pack<T>;

        module pack {
            interface Node {
                parent?: Node;
                children?: Node[];
                value?: number;
                depth?: number;
                x?: number;
                y?: number;
                r?: number;
            }

            interface Link<T extends Node> {
                source: Node;
                target: Node;
            }
        }

        interface Pack<T extends pack.Node> {
            (root: T): T[];

            nodes(root: T): T[];

            links(nodes: T[]): pack.Link<T>[];

            children(): (node: T, depth: number) => T[];
            children(children: (node: T, depth: number) => T[]): Pack<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Pack<T>;

            value(): (node: T) => number;
            value(value: (node: T) => number): Pack<T>;

            size(): [number, number];
            size(size: [number, number]): Pack<T>;

            radius(): number | ((node: T) => number);
            radius(radius: number): Pack<T>;
            radius(radius: (node: T) => number): Pack<T>;

            padding(): number;
            padding(padding: number): Pack<T>;
        }

        export function pie(): Pie<number>;
        export function pie<T>(): Pie<T>;

        module pie {
            interface Arc<T> {
                value: number;
                startAngle: number;
                endAngle: number;
                padAngle: number;
                data: T;
            }
        }

        interface Pie<T> {
            (data: T[], index?: number): pie.Arc<T>[];

            value(): (datum: T, index: number) => number;
            value(accessor: (datum: T, index: number) => number): Pie<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Pie<T>;

            startAngle(): number | ((data: T[], index: number) => number);
            startAngle(angle: number): Pie<T>;
            startAngle(angle: (data: T[], index: number) => number): Pie<T>;

            endAngle(): number | ((data: T[], index: number) => number);
            endAngle(angle: number): Pie<T>;
            endAngle(angle: (data: T[], index: number) => number): Pie<T>;

            padAngle(): number | ((data: T[], index: number) => number);
            padAngle(angle: number): Pie<T>;
            padAngle(angle: (data: T[], index: number) => number): Pie<T>;
        }

        export function stack(): Stack<stack.Value[], stack.Value>;
        export function stack<Value>(): Stack<Value[], Value>;
        export function stack<Series, Value>(): Stack<Series, Value>;
        module stack {
            interface Value {
                x: number;
                y: number;
                y0?: number;
            }
        }

        interface Stack<Series, Value> {
            (layers: Series[], index?: number): Series[];

            values(): (layer: Series, index: number) => Value[];
            values(accessor: (layer: Series, index: number) => Value[]): Stack<Series, Value>;

            offset(): (data: Array<[number, number]>) => number[];
            offset(offset: "silhouette"): Stack<Series, Value>;
            offset(offset: "wiggle"): Stack<Series, Value>;
            offset(offset: "expand"): Stack<Series, Value>;
            offset(offset: "zero"): Stack<Series, Value>;
            offset(offset: string): Stack<Series, Value>;
            offset(offset: (data: Array<[number, number]>) => number[]): Stack<Series, Value>;

            order(): (data: Array<[number, number]>) => number[];
            order(order: "inside-out"): Stack<Series, Value>;
            order(order: "reverse"): Stack<Series, Value>;
            order(order: "default"): Stack<Series, Value>;
            order(order: string): Stack<Series, Value>;
            order(order: (data: Array<[number, number]>) => number[]): Stack<Series, Value>;

            x(): (value: Value, index: number) => number;
            x(accessor: (value: Value, index: number) => number): Stack<Series, Value>;

            y(): (value: Value, index: number) => number;
            y(accesor: (value: Value, index: number) => number): Stack<Series, Value>;

            out(): (value: Value, y0: number, y: number) => void;
            out(setter: (value: Value, y0: number, y: number) => void): Stack<Series, Value>;
        }

        export function tree(): Tree<tree.Node>;
        export function tree<T extends tree.Node>(): Tree<T>;

        module tree {
            interface Link<T extends Node> {
                source: T;
                target: T;
            }

            interface Node {
                parent?: Node;
                children?: Node[];
                depth?: number;
                x?: number;
                y?: number;
            }
        }

        interface Tree<T> {
            (root: T, index?: number): T[];

            nodes(root: T, index?: number): T[];

            links(nodes: T[]): tree.Link<T>[];

            children(): (datum: T, index: number) => T[];
            children(children: (datum: T, index: number) => T[]): Tree<T>;

            separation(): (a: T, b: T) => number;
            separation(separation: (a: T, b: T) => number): Tree<T>;

            size(): [number, number];
            size(size: [number, number]): Tree<T>;

            nodeSize(): [number, number];
            nodeSize(size: [number, number]): Tree<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Tree<T>;

            value(): (datum: T, index: number) => number;
            value(value: (datum: T, index: number) => number): Tree<T>;
        }

        export function treemap(): Treemap<treemap.Node>;
        export function treemap<T extends treemap.Node>(): Treemap<T>;

        module treemap {
            interface Node {
                parent?: Node;
                children?: Node[];
                value?: number;
                depth?: number;
                x?: number;
                y?: number;
                dx?: number;
                dy?: number;
            }

            interface Link<T extends Node> {
                source: T;
                target: T;
            }

            type Padding = number | [number, number, number, number];
        }

        interface Treemap<T extends treemap.Node> {
            (root: T, index?: number): T[];

            nodes(root: T, index?: number): T[];

            links(nodes: T[]): treemap.Link<T>[];

            children(): (node: T, depth: number) => T[];
            children(children: (node: T, depth: number) => T[]): Treemap<T>;

            sort(): (a: T, b: T) => number;
            sort(comparator: (a: T, b: T) => number): Treemap<T>;

            value(): (node: T, index: number) => number;
            value(value: (node: T, index: number) => number): Treemap<T>;

            size(): [number, number];
            size(size: [number, number]): Treemap<T>;

            padding(): (node: T, depth: number) => treemap.Padding;
            padding(padding: treemap.Padding): Treemap<T>;
            padding(padding: (node: T, depth: number) => treemap.Padding): Treemap<T>;

            round(): boolean;
            round(round: boolean): Treemap<T>;

            sticky(): boolean;
            sticky(sticky: boolean): boolean;

            mode(): string;
            mode(mode: "squarify"): Treemap<T>;
            mode(mode: "slice"): Treemap<T>;
            mode(mode: "dice"): Treemap<T>;
            mode(mode: "slice-dice"): Treemap<T>;
            mode(mode: string): Treemap<T>;

            ratio(): number;
            ratio(ratio: number): Treemap<T>;
        }
    }

    module geom {
        export function voronoi(): Voronoi<[number, number]>;
        export function voronoi<T>(): Voronoi<T>;

        module voronoi {
            interface Link<T> {
                source: T;
                target: T;
            }
        }

        interface Voronoi<T> {
            (data: T[]): Array<[number, number]>;

            x(): (vertex: T) => number;
            x(x: (vertex: T) => number): Voronoi<T>;

            y(): (vertex: T) => number;
            y(y: (vertex: T) => number): Voronoi<T>;

            clipExtent(): [[number, number], [number, number]];
            clipExtent(extent: [[number, number], [number, number]]): Voronoi<T>;

            links(data: T[]): voronoi.Link<T>[];

            triangles(data: T[]): Array<[T, T, T]>;
        }

        /**
         * @deprecated use d3.geom.voronoi().triangles() instead
         */
        export function delaunay(vertices: Array<[number, number]>): Array<[[number, number], [number, number], [number, number]]>;

        export function quadtree(): Quadtree<[number, number]>;
        export function quadtree<T>(nodes: T[], x1?: number, y1?: number, x2?: number, y2?: number): quadtree.Quadtree<T>;

        module quadtree {
            interface Node<T> {
                nodes: [Node<T>, Node<T>, Node<T>, Node<T>];
                leaf: boolean;
                point: T;
                x: number;
                y: number;
            }

            interface Quadtree<T> extends Node<T> {
                add(point: T): void;
                visit(callback: (node: Node<T>, x1: number, y1: number, x2: number, y2: number) => boolean | void): void;
                find(point: [number, number]): T;
            }
        }

        interface Quadtree<T> {
            (points: T[]): quadtree.Quadtree<T>;

            x(): (datum: T, index: number) => number;
            x(x: number): Quadtree<T>;
            x(x: (datum: T, index: number) => number): Quadtree<T>;

            y(): (datum: T, index: number) => number;
            y(y: number): Quadtree<T>;
            y(y: (datum: T, index: number) => number): Quadtree<T>;

            extent(): [[number, number], [number, number]];
            extent(extent: [[number, number], [number, number]]): Quadtree<T>;
        }

        export function hull(vertices: Array<[number, number]>): Array<[number, number]>;
        export function hull(): Hull<[number, number]>;
        export function hull<T>(): Hull<T>;

        interface Hull<T> {
            (vertices: T[]): Array<[number, number]>;

            x(): (datum: T) => number;
            x(x: (datum: T) => number): Hull<T>;

            y(): (datum: T) => number;
            y(y: (datum: T) => number): Hull<T>;
        }

        export function polygon(vertices: Array<[number, number]>): Polygon;

        interface Polygon {
            area(): number;

            centroid(): [number, number];

            clip(subject: Array<[number, number]>): Array<[number, number]>;
        }
    }
}

// we need this to exist
interface TouchList { }

declare module 'd3' {
    export = d3;
}// Type definitions for es6-promises
// Project: https://github.com/jakearchibald/ES6-Promises
// Definitions by: François de Campredon <https://github.com/fdecampredon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface Thenable<R> {
    then<U>(onFulfilled: (value: R) => Thenable<U>,  onRejected: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>;
	
}

declare class Promise<R> implements Thenable<R> {
    /**
     * If you call resolve in the body of the callback passed to the constructor, 
     * your promise is fulfilled with result object passed to resolve.
     * If you call reject your promise is rejected with the object passed to resolve. 
     * For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
     * Any errors thrown in the constructor callback will be implicitly passed to reject().
     */
	constructor(callback: (resolve : (result: R) => void, reject: (error: any) => void) => void);
    /**
     * If you call resolve in the body of the callback passed to the constructor, 
     * your promise will be fulfilled/rejected with the outcome of thenable passed to resolve.
     * If you call reject your promise is rejected with the object passed to resolve. 
     * For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
     * Any errors thrown in the constructor callback will be implicitly passed to reject().
     */
	constructor(callback: (resolve : (thenable: Thenable<R>) => void, reject: (error: any) => void) => void);
	
    /**
     * onFulFill is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param onFulFill called when/if "promise" resolves
     * @param onReject called when/if "promise" rejects
     */
    then<U>(onFulfill: (value: R) => Thenable<U>, onReject?: (error: any) => any): Promise<U>;
    /**
     * onFulFill is called when/if "promise" resolves. onRejected is called when/if "promise" rejects. 
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called. 
     * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve. 
     * If an error is thrown in the callback, the returned promise rejects with that error.
     * 
     * @param onFulFill called when/if "promise" resolves
     * @param onReject called when/if "promise" rejects
     */
    then<U>(onFulfill?: (value: R) => U, onReject?: (error: any) => any): Promise<U>;
    
    
    /**
     * Sugar for promise.then(undefined, onRejected)
     * 
     * @param onReject called when/if "promise" rejects
     */
	catch<U>(onReject?: (error: any) => Thenable<U>): Promise<U>;
    /**
     * Sugar for promise.then(undefined, onRejected)
     * 
     * @param onReject called when/if "promise" rejects
     */
	catch<U>(onReject?: (error: any) => U): Promise<U>;
}

declare module Promise {
	
	/**
	 * Returns promise (only if promise.constructor == Promise)
	 */
	function cast<R>(promise: Promise<R>): Promise<R>;
    /**
	 * Make a promise that fulfills to obj.
	 */
	function cast<R>(object?: R): Promise<R>;
    
	
    /**
     * Make a new promise from the thenable. 
     * A thenable is promise-like in as far as it has a "then" method. 
     * This also creates a new promise if you pass it a genuine JavaScript promise, making it less efficient for casting than Promise.cast.
     */
	function resolve<R>(thenable: Thenable<R>): Promise<R>;
    /**
     * Make a promise that fulfills to obj. Same as Promise.cast(obj) in this situation.
     */
	function resolve<R>(object?: R): Promise<R>;
    
	/**
	 * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
	 */
    function reject(error?: any): Promise<void>;

    /**
	 * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
	 */
    function reject<R>(error?: any): Promise<R>;
	
    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
     * the array passed to all can be a mixture of promise-like objects and other objects. 
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     */
	function all<R>(promises: Promise<R>[]): Promise<R[]>;
	
    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     */
	function race<R>(promises: Promise<R>[]): Promise<R>;
}
declare namespace Vidyano {
    class CultureInfo {
        name: string;
        numberFormat: ICultureInfoNumberFormat;
        dateFormat: ICultureInfoDateFormat;
        static currentCulture: CultureInfo;
        static invariantCulture: CultureInfo;
        static cultures: linqjs.Dictionary<string, CultureInfo>;
        constructor(name: string, numberFormat: ICultureInfoNumberFormat, dateFormat: ICultureInfoDateFormat);
    }
    interface ICultureInfoNumberFormat {
        naNSymbol: string;
        negativeSign: string;
        positiveSign: string;
        negativeInfinityText: string;
        positiveInfinityText: string;
        percentSymbol: string;
        percentGroupSizes: Array<number>;
        percentDecimalDigits: number;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentPositivePattern: string;
        percentNegativePattern: string;
        currencySymbol: string;
        currencyGroupSizes: Array<number>;
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyNegativePattern: string;
        currencyPositivePattern: string;
        numberGroupSizes: Array<number>;
        numberDecimalDigits: number;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
    }
    interface ICultureInfoDateFormat {
        amDesignator: string;
        pmDesignator: string;
        dateSeparator: string;
        timeSeparator: string;
        gmtDateTimePattern: string;
        universalDateTimePattern: string;
        sortableDateTimePattern: string;
        dateTimePattern: string;
        longDatePattern: string;
        shortDatePattern: string;
        longTimePattern: string;
        shortTimePattern: string;
        yearMonthPattern: string;
        firstDayOfWeek: number;
        dayNames: Array<string>;
        shortDayNames: Array<string>;
        minimizedDayNames: Array<string>;
        monthNames: Array<string>;
        shortMonthNames: Array<string>;
    }
}
declare const unescape: any;
interface ISet<T> {
    add(value: T): ISet<T>;
    clear(): void;
    delete(value: T): boolean;
    entries(): Array<[T, T]>;
    forEach(callbackfn: (value: T, index: T, set: ISet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    keys(): Array<T>;
    size: number;
}
interface ISetConstructor {
    new <T>(): ISet<T>;
    prototype: ISet<any>;
}
declare const Set: ISetConstructor;
declare namespace Vidyano {
    let version: string;
    let cookiePrefix: string;
    enum NotificationType {
        Error = 0,
        Notice = 1,
        OK = 2,
        Warning = 3,
    }
    interface ILanguage {
        culture: string;
        name: string;
        isDefault: boolean;
        messages: {
            [key: string]: string;
        };
    }
    interface IProviderParameters {
        label: string;
        description: string;
        requestUri: string;
        signOutUri: string;
        redirectUri: string;
    }
    interface IRoutes {
        programUnits: {
            [name: string]: string;
        };
        persistentObjects: {
            [type: string]: string;
        };
        queries: {
            [type: string]: string;
        };
    }
    interface IReportOptions {
        filter?: string;
        orderBy?: string;
        top?: number;
        skip?: number;
        hideIds?: boolean;
        hideType?: boolean;
    }
    interface IRetryAction {
        title: string;
        message: string;
        options: string[];
        persistentObject?: PersistentObject;
    }
    function noop(): void;
    function extend(target: any, ...sources: any[]): any;
    function splitWithTail(value: string, separator: string | RegExp, limit?: number): string[];
    function cookie(key: string, value?: any, options?: {
        force?: boolean;
        raw?: boolean;
        path?: string;
        domain?: string;
        secure?: boolean;
        expires?: number | Date;
    }): any;
    function _debounce(func: Function, wait: number, immediate?: boolean): Function;
    namespace Common {
        interface IKeyValuePair {
            key: any;
            value: string;
        }
        interface ISubjectNotifier<TSource, TDetail> {
            notify: (source: TSource, detail?: TDetail) => void;
        }
        class PropertyChangedArgs {
            propertyName: string;
            newValue: any;
            oldValue: any;
            constructor(propertyName: string, newValue: any, oldValue: any);
        }
        interface ISubjectDisposer {
            (): void;
        }
        class Subject<TSource, TDetail> {
            private _observers;
            constructor(notifier: ISubjectNotifier<TSource, TDetail>);
            attach(observer: ISubjectObserver<TSource, TDetail>): ISubjectDisposer;
            private _detach(observerId);
        }
        interface ISubjectObserver<TSource, TDetail> {
            (sender: TSource, detail: TDetail): void;
        }
        class Observable<T> {
            private _propertyChangedNotifier;
            propertyChanged: Vidyano.Common.Subject<T, Vidyano.Common.PropertyChangedArgs>;
            constructor();
            protected notifyPropertyChanged(propertyName: string, newValue: any, oldValue?: any): void;
        }
        interface IPropertyChangedObserver<T> extends ISubjectObserver<T, Vidyano.Common.PropertyChangedArgs> {
        }
    }
    namespace ClientOperations {
        interface IClientOperation {
            type: string;
        }
        interface IRefreshOperation extends IClientOperation {
            delay?: number;
            queryId?: string;
            fullTypeName?: string;
            objectId?: string;
        }
        interface IExecuteMethodOperation extends IClientOperation {
            name: string;
            arguments: any[];
        }
        interface IOpenOperation extends IClientOperation {
            persistentObject: any;
            replace?: boolean;
        }
        function navigate(hooks: ServiceHooks, path: string, replaceCurrent?: boolean): void;
        function reloadPage(): void;
        function openUrl(hooks: ServiceHooks, url: string): void;
        function showMessageBox(hooks: ServiceHooks, title: string, message: string, rich?: boolean, delay?: number): void;
    }
    interface IServiceClientData {
        defaultUser: string;
        exception: string;
        languages: {
            [code: string]: {
                name: string;
                isDefault: boolean;
                messages: {
                    [key: string]: string;
                };
            };
        };
        providers: {
            [name: string]: {
                parameters: IProviderParameters;
            };
        };
    }
    interface IServiceRequest {
        when: Date;
        profiler: IServiceRequestProfiler;
        transport: number;
        method: string;
        request: any;
        response: any;
    }
    interface IServiceRequestProfiler {
        taskId: number;
        elapsedMilliseconds: number;
        entries: IServiceRequestProfilerEntry[];
        sql: IServiceRequestProfilerSQL[];
        exceptions: {
            id: string;
            message: string;
        }[];
    }
    interface IServiceRequestProfilerEntry {
        entries: IServiceRequestProfilerEntry[];
        methodName: string;
        sql: string[];
        started: number;
        elapsedMilliseconds: number;
        hasNPlusOne?: boolean;
        exception: string;
        arguments: any[];
    }
    interface IServiceRequestProfilerSQL {
        commandId: string;
        commandText: string;
        elapsedMilliseconds: number;
        recordsAffected: number;
        taskId: number;
        type: string;
        parameters: IServiceRequestProfilerSQLParameter[];
    }
    interface IServiceRequestProfilerSQLParameter {
        name: string;
        type: string;
        value: string;
    }
    class Service extends Vidyano.Common.Observable<Service> {
        serviceUri: string;
        hooks: ServiceHooks;
        private _forceUser;
        private static _getMs;
        private static _base64KeyStr;
        private static _token;
        private _lastAuthTokenUpdate;
        private _isUsingDefaultCredentials;
        private _clientData;
        private _language;
        private _languages;
        private _windowsAuthentication;
        private _providers;
        private _isSignedIn;
        private _application;
        private _profile;
        private _profiledRequests;
        staySignedIn: boolean;
        icons: linqjs.Dictionary<string, string>;
        actionDefinitions: linqjs.Dictionary<string, ActionDefinition>;
        environment: string;
        environmentVersion: string;
        ignoreMobile: boolean;
        constructor(serviceUri: string, hooks?: ServiceHooks, _forceUser?: string);
        static token: string;
        private _createUri(method);
        private _createData(method, data?);
        private _getMs();
        private _postJSON(url, data);
        private _postJSONProcess(data, result, requestMethod, createdRequest, requestStart, elapsedMs);
        private _getJSON(url);
        private static _decodeBase64(input);
        private static _getServiceTimeString;
        _getStream(obj: PersistentObject, action?: string, parent?: PersistentObject, query?: Query, selectedItems?: Array<QueryResultItem>, parameters?: any): void;
        readonly application: Application;
        private _setApplication(application);
        language: ILanguage;
        readonly isSignedIn: boolean;
        private _setIsSignedIn(val);
        readonly languages: ILanguage[];
        readonly windowsAuthentication: boolean;
        readonly providers: {
            [name: string]: IProviderParameters;
        };
        readonly isUsingDefaultCredentials: boolean;
        private _setIsUsingDefaultCredentials(val);
        readonly userName: string;
        private _setUserName(val);
        readonly defaultUserName: string;
        private authToken;
        profile: boolean;
        readonly profiledRequests: IServiceRequest[];
        private _setProfiledRequests(requests);
        getTranslatedMessage(key: string, ...params: string[]): string;
        initialize(skipDefaultCredentialLogin?: boolean): Promise<Application>;
        signInExternal(providerName: string): void;
        signInUsingCredentials(userName: string, password: string, code?: string): Promise<Application>;
        signInUsingDefaultCredentials(): Promise<Application>;
        signOut(skipAcs?: boolean): Promise<boolean>;
        private _getApplication(data?);
        getQuery(id: string, asLookup?: boolean): Promise<Query>;
        getPersistentObject(parent: PersistentObject, id: string, objectId?: string): Promise<PersistentObject>;
        executeQuery(parent: PersistentObject, query: Query, asLookup?: boolean, throwExceptions?: boolean): Promise<any>;
        executeAction(action: string, parent: PersistentObject, query: Query, selectedItems: Array<QueryResultItem>, parameters?: any, skipHooks?: boolean): Promise<PersistentObject>;
        getReport(token: string, {filter, orderBy, top, skip, hideIds, hideType}?: IReportOptions): Promise<any[]>;
        static getDate: (yearString: string, monthString: string, dayString: string, hourString: string, minuteString: string, secondString: string, msString: string) => Date;
        static fromServiceString(value: string, typeName: string): any;
        static toServiceString(value: any, typeName: string): string;
        static numericTypes: string[];
        static isNumericType(type: string): boolean;
        static dateTimeTypes: string[];
        static isDateTimeType(type: string): boolean;
    }
    class ServiceHooks {
        private _service;
        readonly service: Vidyano.Service;
        createData(data: any): void;
        trackEvent(name: string, option: string, owner: ServiceObjectWithActions): void;
        onInitialize(clientData: IServiceClientData): Promise<IServiceClientData>;
        onSessionExpired(): boolean;
        onActionConfirmation(action: Action, option: number): Promise<boolean>;
        onAction(args: ExecuteActionArgs): Promise<PersistentObject>;
        onOpen(obj: ServiceObject, replaceCurrent?: boolean, fromAction?: boolean): void;
        onClose(obj: ServiceObject): void;
        onRedirectToSignIn(keepUrl?: boolean): void;
        onRedirectToSignOut(keepUrl?: boolean): void;
        onConstructPersistentObject(service: Service, po: any): PersistentObject;
        onConstructPersistentObjectAttributeTab(service: Service, groups: linqjs.Enumerable<PersistentObjectAttributeGroup>, key: string, id: string, name: string, layout: any, parent: PersistentObject, columnCount: number, isVisible: boolean): PersistentObjectAttributeTab;
        onConstructPersistentObjectQueryTab(service: Service, query: Query): PersistentObjectQueryTab;
        onConstructPersistentObjectAttributeGroup(service: Service, key: string, attributes: linqjs.Enumerable<PersistentObjectAttribute>, parent: PersistentObject): PersistentObjectAttributeGroup;
        onConstructPersistentObjectAttribute(service: Service, attr: any, parent: PersistentObject): PersistentObjectAttribute;
        onConstructPersistentObjectAttributeWithReference(service: Service, attr: any, parent: PersistentObject): PersistentObjectAttributeWithReference;
        onConstructPersistentObjectAttributeAsDetail(service: Service, attr: any, parent: PersistentObject): PersistentObjectAttributeAsDetail;
        onConstructQuery(service: Service, query: any, parent?: PersistentObject, asLookup?: boolean, maxSelectedItems?: number): Query;
        onConstructQueryResultItem(service: Service, item: any, query: Query, isSelected?: boolean): QueryResultItem;
        onConstructQueryResultItemValue(service: Service, item: QueryResultItem, value: any): QueryResultItemValue;
        onConstructQueryColumn(service: Service, col: any, query: Query): QueryColumn;
        onConstructAction(service: Service, action: Action): Action;
        onSortPersistentObjectTabs(parent: Vidyano.PersistentObject, attributeTabs: Vidyano.PersistentObjectAttributeTab[], queryTabs: Vidyano.PersistentObjectQueryTab[]): Vidyano.PersistentObjectTab[];
        onMessageDialog(title: string, message: string, rich: boolean, ...actions: string[]): Promise<number>;
        onShowNotification(notification: string, type: NotificationType, duration: number): void;
        onSelectReference(query: Vidyano.Query): Promise<QueryResultItem[]>;
        onNavigate(path: string, replaceCurrent?: boolean): void;
        onClientOperation(operation: ClientOperations.IClientOperation): void;
        onSelectedItemsActions(query: Query, selectedItems: QueryResultItem[], action: ISelectedItemsActionArgs): void;
        onRefreshFromResult(po: PersistentObject): void;
        onRetryAction(retry: IRetryAction): Promise<string>;
    }
    interface IServiceClientData {
        defaultUser: string;
        exception: string;
        languages: {
            [code: string]: {
                name: string;
                isDefault: boolean;
                messages: {
                    [key: string]: string;
                };
            };
        };
        providers: {
            [name: string]: {
                parameters: IProviderParameters;
            };
        };
    }
    interface IServiceRequest {
        when: Date;
        profiler: IServiceRequestProfiler;
        transport: number;
        method: string;
        request: any;
        response: any;
    }
    interface IServiceRequestProfiler {
        taskId: number;
        elapsedMilliseconds: number;
        entries: IServiceRequestProfilerEntry[];
        sql: IServiceRequestProfilerSQL[];
        exceptions: {
            id: string;
            message: string;
        }[];
    }
    interface IServiceRequestProfilerEntry {
        entries: IServiceRequestProfilerEntry[];
        methodName: string;
        sql: string[];
        started: number;
        elapsedMilliseconds: number;
        hasNPlusOne?: boolean;
        exception: string;
        arguments: any[];
    }
    interface IServiceRequestProfilerSQL {
        commandId: string;
        commandText: string;
        elapsedMilliseconds: number;
        recordsAffected: number;
        taskId: number;
        type: string;
        parameters: IServiceRequestProfilerSQLParameter[];
    }
    interface IServiceRequestProfilerSQLParameter {
        name: string;
        type: string;
        value: string;
    }
    interface ISelectedItemsActionArgs {
        name: string;
        isVisible: boolean;
        canExecute: boolean;
        options: string[];
    }
    class ExecuteActionArgs {
        private service;
        persistentObject: PersistentObject;
        query: Query;
        selectedItems: Array<QueryResultItem>;
        parameters: any;
        private _action;
        action: string;
        isHandled: boolean;
        result: PersistentObject;
        constructor(service: Service, action: string, persistentObject: PersistentObject, query: Query, selectedItems: Array<QueryResultItem>, parameters: any);
        executeServiceRequest(): Promise<PersistentObject>;
    }
    interface IServiceObjectPropertyChangedObserver extends Common.IPropertyChangedObserver<ServiceObject> {
    }
    class ServiceObject extends Vidyano.Common.Observable<ServiceObject> {
        service: Service;
        constructor(service: Service);
        copyProperties(propertyNames: Array<string>, includeNullValues?: boolean, result?: any): any;
    }
    class ServiceObjectWithActions extends ServiceObject {
        private _actionNames;
        private _queue;
        private _isBusy;
        notification: string;
        notificationType: NotificationType;
        notificationDuration: number;
        actions: Action[];
        constructor(service: Service, _actionNames?: string[]);
        readonly isBusy: boolean;
        private _setIsBusy(val);
        setNotification(notification?: string, type?: NotificationType, duration?: number): void;
        queueWork<T>(work: () => Promise<T>, blockActions?: boolean): Promise<T>;
        protected _initializeActions(): void;
        private _blockActions(block);
    }
    enum PersistentObjectLayoutMode {
        FullPage = 0,
        MasterDetail = 1,
    }
    class PersistentObject extends ServiceObjectWithActions {
        private _isSystem;
        private _lastResult;
        private _lastUpdated;
        private _lastResultBackup;
        private securityToken;
        private _isEditing;
        private _isDirty;
        private _inputs;
        private _id;
        private _type;
        private _breadcrumb;
        private _isDeleted;
        private _tabs;
        private _isFrozen;
        fullTypeName: string;
        label: string;
        objectId: string;
        isHidden: boolean;
        isNew: boolean;
        isReadOnly: boolean;
        queryLayoutMode: PersistentObjectLayoutMode;
        newOptions: string;
        ignoreCheckRules: boolean;
        stateBehavior: string;
        parent: PersistentObject;
        ownerDetailAttribute: PersistentObjectAttributeAsDetail;
        ownerAttributeWithReference: PersistentObjectAttributeWithReference;
        ownerPersistentObject: PersistentObject;
        ownerQuery: Query;
        bulkObjectIds: string[];
        queriesToRefresh: Array<string>;
        attributes: PersistentObjectAttribute[];
        queries: Query[];
        constructor(service: Service, po: any);
        private _createPersistentObjectAttribute(attr);
        readonly id: string;
        readonly isSystem: boolean;
        readonly type: string;
        readonly isBulkEdit: boolean;
        tabs: PersistentObjectTab[];
        readonly isEditing: boolean;
        private setIsEditing(value);
        readonly breadcrumb: string;
        private _setBreadcrumb(breadcrumb);
        readonly isDirty: boolean;
        private _setIsDirty(value, force?);
        isDeleted: boolean;
        readonly isFrozen: boolean;
        freeze(): void;
        unfreeze(): void;
        getAttribute(name: string): PersistentObjectAttribute;
        getAttributeValue(name: string): any;
        setAttributeValue(name: string, value: any, allowRefresh?: boolean): Promise<any>;
        readonly lastUpdated: Date;
        private _setLastUpdated(lastUpdated);
        getQuery(name: string): Query;
        beginEdit(): void;
        cancelEdit(): void;
        save(waitForOwnerQuery?: boolean): Promise<boolean>;
        getRegisteredInputs(): linqjs.Enumerable<linqjs.KeyValuePair<string, HTMLInputElement>>;
        hasRegisteredInput(attributeName: string): boolean;
        registerInput(attributeName: string, input: HTMLInputElement): void;
        clearRegisteredInputs(attributeName?: string): void;
        toServiceObject(skipParent?: boolean): any;
        refreshFromResult(result: PersistentObject, resultWins?: boolean): void;
        triggerDirty(): boolean;
        _triggerAttributeRefresh(attr: PersistentObjectAttribute, immediate?: boolean): Promise<boolean>;
        _prepareAttributesForRefresh(sender: PersistentObjectAttribute): void;
    }
    class PersistentObjectAttribute extends ServiceObject {
        parent: PersistentObject;
        private _isSystem;
        private _lastParsedValue;
        private _cachedValue;
        private _serviceValue;
        private _serviceOptions;
        private _displayValueSource;
        private _displayValue;
        private _validationError;
        private _tab;
        private _tabKey;
        private _group;
        private _groupKey;
        private _isRequired;
        private _isReadOnly;
        private _isValueChanged;
        protected _shouldRefresh: boolean;
        private _refreshValue;
        id: string;
        name: string;
        label: string;
        options: string[] | Common.IKeyValuePair[];
        offset: number;
        type: string;
        toolTip: string;
        rules: string;
        visibility: string;
        typeHints: any;
        editTemplateKey: string;
        templateKey: string;
        disableSort: boolean;
        triggersRefresh: boolean;
        column: number;
        columnSpan: number;
        constructor(service: Service, attr: any, parent: PersistentObject);
        readonly groupKey: string;
        group: PersistentObjectAttributeGroup;
        readonly tabKey: string;
        tab: PersistentObjectAttributeTab;
        readonly isSystem: boolean;
        readonly isVisible: boolean;
        private _setIsVisible(visibility);
        validationError: string;
        readonly isRequired: boolean;
        private _setIsRequired(isRequired);
        readonly isReadOnly: boolean;
        private _setIsReadOnly(isReadOnly);
        readonly displayValue: string;
        readonly shouldRefresh: boolean;
        value: any;
        setValue(val: any, allowRefresh?: boolean): Promise<any>;
        isValueChanged: boolean;
        getTypeHint(name: string, defaultValue?: string, typeHints?: any, ignoreCasing?: boolean): string;
        getRegisteredInput(): HTMLInputElement;
        registerInput(input: HTMLInputElement): void;
        clearRegisteredInput(): void;
        _toServiceObject(): any;
        _refreshFromResult(resultAttr: PersistentObjectAttribute, resultWins: boolean): boolean;
        _triggerAttributeRefresh(immediate?: boolean): Promise<any>;
        protected _setOptions(options: string[]): void;
    }
    class PersistentObjectAttributeWithReference extends PersistentObjectAttribute {
        parent: PersistentObject;
        lookup: Query;
        objectId: string;
        displayAttribute: string;
        canAddNewReference: boolean;
        selectInPlace: boolean;
        constructor(service: Service, attr: any, parent: PersistentObject);
        addNewReference(): Promise<void>;
        changeReference(selectedItems: QueryResultItem[] | string[]): Promise<boolean>;
        getPersistentObject(): Promise<Vidyano.PersistentObject>;
        _refreshFromResult(resultAttr: PersistentObjectAttribute, resultWins: boolean): boolean;
    }
    class PersistentObjectAttributeAsDetail extends PersistentObjectAttribute {
        parent: PersistentObject;
        private _objects;
        details: Query;
        lookupAttribute: string;
        constructor(service: Service, attr: any, parent: PersistentObject);
        readonly objects: Vidyano.PersistentObject[];
        private _setObjects(objects);
        newObject(): Promise<PersistentObject>;
        _refreshFromResult(resultAttr: PersistentObjectAttribute, resultWins: boolean): boolean;
        _toServiceObject(): any;
        onChanged(allowRefresh: boolean): Promise<any>;
    }
    class PersistentObjectTab extends Common.Observable<PersistentObjectTab> {
        service: Service;
        name: string;
        label: string;
        target: ServiceObjectWithActions;
        parent: PersistentObject;
        private _isVisible;
        tabGroupIndex: number;
        constructor(service: Service, name: string, label: string, target: ServiceObjectWithActions, parent?: PersistentObject, _isVisible?: boolean);
        isVisible: boolean;
    }
    class PersistentObjectAttributeTab extends PersistentObjectTab {
        private _groups;
        key: string;
        id: string;
        private _layout;
        columnCount: number;
        private _attributes;
        constructor(service: Service, _groups: PersistentObjectAttributeGroup[], key: string, id: string, name: string, _layout: any, po: PersistentObject, columnCount: number, isVisible: boolean);
        readonly layout: any;
        private _setLayout(layout);
        readonly attributes: PersistentObjectAttribute[];
        groups: PersistentObjectAttributeGroup[];
        saveLayout(layout: any): Promise<any>;
        private _updateAttributes();
    }
    class PersistentObjectQueryTab extends PersistentObjectTab {
        query: Query;
        constructor(service: Service, query: Query);
    }
    class PersistentObjectAttributeGroup extends Vidyano.Common.Observable<PersistentObjectAttributeGroup> {
        service: Service;
        key: string;
        parent: PersistentObject;
        private _attributes;
        label: string;
        index: number;
        constructor(service: Service, key: string, _attributes: PersistentObjectAttribute[], parent: PersistentObject);
        attributes: PersistentObjectAttribute[];
    }
    enum SortDirection {
        None = 0,
        Ascending = 1,
        Descending = 2,
    }
    interface ISortOption {
        column: QueryColumn;
        direction: SortDirection;
    }
    interface IQuerySelectAll {
        isAvailable: boolean;
        allSelected: boolean;
        inverse: boolean;
    }
    class Query extends ServiceObjectWithActions {
        parent: PersistentObject;
        maxSelectedItems: number;
        private _lastResult;
        private _asLookup;
        private _isSelectionModifying;
        private _totalItems;
        private _labelWithTotalItems;
        private _sortOptions;
        private _queriedPages;
        private _filters;
        private _canFilter;
        private _canRead;
        private _canReorder;
        private _charts;
        private _defaultChartName;
        private _currentChart;
        private _lastUpdated;
        private _totalItem;
        private _isSystem;
        private _isFiltering;
        private _columnObservers;
        persistentObject: PersistentObject;
        columns: QueryColumn[];
        id: string;
        name: string;
        autoQuery: boolean;
        isHidden: boolean;
        hasSearched: boolean;
        label: string;
        singularLabel: string;
        offset: number;
        textSearch: string;
        pageSize: number;
        skip: number;
        top: number;
        items: QueryResultItem[];
        groupingInfo: {
            groupedBy: string;
            type: string;
            groups: {
                name: string;
                start: number;
                count: number;
                end: number;
            }[];
        };
        selectAll: IQuerySelectAll;
        constructor(service: Service, query: any, parent?: PersistentObject, asLookup?: boolean, maxSelectedItems?: number);
        readonly isSystem: boolean;
        readonly filters: QueryFilters;
        readonly canFilter: boolean;
        private _setCanFilter(val);
        readonly canRead: boolean;
        readonly canReorder: boolean;
        readonly charts: linqjs.Enumerable<QueryChart>;
        private _setCharts(charts);
        currentChart: QueryChart;
        defaultChartName: string;
        readonly lastUpdated: Date;
        private _setLastUpdated(date?);
        selectedItems: QueryResultItem[];
        private _selectAllPropertyChanged(selectAll, args);
        selectRange(from: number, to: number): boolean;
        readonly asLookup: boolean;
        readonly totalItems: number;
        readonly labelWithTotalItems: string;
        sortOptions: ISortOption[];
        readonly totalItem: QueryResultItem;
        private _setTotalItem(item);
        reorder(before: QueryResultItem, item: QueryResultItem, after: QueryResultItem): Promise<QueryResultItem[]>;
        private _setSortOptionsFromService(options);
        private _setTotalItems(items);
        readonly isFiltering: boolean;
        private _updateIsFiltering();
        _toServiceObject(): any;
        _setResult(result: any): void;
        getColumn(name: string): QueryColumn;
        getItemsInMemory(start: number, length: number): QueryResultItem[];
        getItems(start: number, length?: number, skipQueue?: boolean): Promise<QueryResultItem[]>;
        search(delay?: number): Promise<QueryResultItem[]>;
        search(options: {
            delay?: number;
            throwExceptions?: boolean;
        }): Promise<QueryResultItem[]>;
        clone(asLookup?: boolean): Query;
        private _updateColumns(_columns?);
        private _queryColumnPropertyChanged(sender, args);
        private _updateItems(items, reset?);
        _notifyItemSelectionChanged(item: QueryResultItem): void;
        private _updateSelectAll(item?, selectedItems?);
        static FromJsonData(service: Service, data: IJsonQueryData): Query;
    }
    interface IJsonQueryData {
        id?: string;
        name?: string;
        label?: string;
        singularLabel?: string;
        items: {
            id: string | number;
            breadcrumb?: string;
            typeHints?: {
                [name: string]: string;
            };
            values: {
                key: string;
                value: string;
                typeHints?: {
                    [name: string]: string;
                };
            }[];
        }[];
        columns: {
            name: string;
            label: string;
            type: string;
            width?: string;
            typeHints?: {
                [name: string]: string;
            };
        }[];
    }
    class QueryColumn extends ServiceObject {
        query: Query;
        private displayAttribute;
        private _id;
        private _sortDirection;
        private _canSort;
        private _canFilter;
        private _canListDistincts;
        private _name;
        private _type;
        private _label;
        private _distincts;
        private _selectedDistincts;
        private _selectedDistinctsInversed;
        private _total;
        offset: number;
        isPinned: boolean;
        isHidden: boolean;
        width: string;
        typeHints: any;
        constructor(service: Service, col: any, query: Query);
        readonly id: string;
        readonly name: string;
        readonly type: string;
        readonly label: string;
        readonly canFilter: boolean;
        readonly canSort: boolean;
        readonly canListDistincts: boolean;
        readonly isSorting: boolean;
        readonly sortDirection: SortDirection;
        selectedDistincts: linqjs.Enumerable<string>;
        selectedDistinctsInversed: boolean;
        distincts: IQueryColumnDistincts;
        readonly total: QueryResultItemValue;
        private _setTotal(total);
        private _setSortDirection(direction);
        _toServiceObject(): any;
        getTypeHint(name: string, defaultValue?: string, typeHints?: any, ignoreCasing?: boolean): string;
        refreshDistincts(): Promise<IQueryColumnDistincts>;
        sort(direction: SortDirection, multiSort?: boolean): Promise<QueryResultItem[]>;
        private _queryPropertyChanged(sender, args);
    }
    interface IQueryColumnDistincts {
        matching: string[];
        remaining: string[];
        isDirty: boolean;
        hasMore: boolean;
    }
    class QueryResultItem extends ServiceObject {
        query: Query;
        private _isSelected;
        private _ignoreSelect;
        id: string;
        breadcrumb: string;
        rawValues: linqjs.Enumerable<QueryResultItemValue>;
        typeHints: any;
        private _fullValuesByName;
        private _values;
        constructor(service: Service, item: any, query: Query, _isSelected: boolean);
        readonly values: {
            [key: string]: any;
        };
        isSelected: boolean;
        readonly ignoreSelect: boolean;
        getValue(key: string): any;
        getFullValue(key: string): QueryResultItemValue;
        getTypeHint(name: string, defaultValue?: string, typeHints?: any): string;
        getPersistentObject(): Promise<PersistentObject>;
        _toServiceObject(): any;
    }
    class QueryResultItemValue extends ServiceObject {
        private _item;
        private _value;
        private _valueParsed;
        key: string;
        value: string;
        typeHints: any;
        persistentObjectId: string;
        objectId: string;
        constructor(service: Service, _item: QueryResultItem, value: any);
        getTypeHint(name: string, defaultValue?: string, typeHints?: any): string;
        getValue(): any;
        _toServiceObject(): any;
    }
    class QueryFilters extends Vidyano.Common.Observable<QueryFilters> {
        private _query;
        private _filtersPO;
        private _filters;
        private _currentFilter;
        private _filtersAsDetail;
        private _skipSearch;
        constructor(_query: Query, _filtersPO: Vidyano.PersistentObject);
        readonly filters: QueryFilter[];
        private _setFilters(filters);
        readonly detailsAttribute: PersistentObjectAttributeAsDetail;
        currentFilter: QueryFilter;
        private _computeFilters(setDefaultFilter?);
        private _computeFilterData();
        getFilter(name: string): QueryFilter;
        createNew(): Promise<QueryFilter>;
        save(filter?: QueryFilter): Promise<QueryFilter>;
        delete(name: string | QueryFilter): Promise<any>;
    }
    class QueryFilter extends Vidyano.Common.Observable<QueryFilter> {
        persistentObject: PersistentObject;
        constructor(persistentObject: PersistentObject);
        readonly name: string;
        readonly isLocked: boolean;
        readonly isDefault: boolean;
    }
    class QueryChart extends Vidyano.Common.Observable<QueryChart> {
        private _query;
        private _label;
        private _name;
        private _options;
        private _type;
        constructor(_query: Vidyano.Query, _label: string, _name: string, _options: any, _type: string);
        readonly query: Vidyano.Query;
        readonly label: string;
        readonly name: string;
        readonly options: any;
        readonly type: string;
        execute(parameters?: any): Promise<any>;
    }
    interface IActionExecuteOptions {
        menuOption?: number;
        parameters?: any;
        selectedItems?: QueryResultItem[];
        skipOpen?: boolean;
        noConfirmation?: boolean;
        throwExceptions?: boolean;
    }
    class Action extends ServiceObject {
        service: Service;
        definition: ActionDefinition;
        owner: ServiceObjectWithActions;
        private _targetType;
        private _query;
        private _parent;
        private _isVisible;
        private _canExecute;
        private _block;
        private _parameters;
        private _offset;
        protected _isPinned: boolean;
        private _options;
        selectionRule: (count: number) => boolean;
        displayName: string;
        dependentActions: any[];
        constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
        readonly parent: PersistentObject;
        readonly query: Query;
        offset: number;
        readonly name: string;
        canExecute: boolean;
        block: boolean;
        isVisible: boolean;
        readonly isPinned: boolean;
        readonly options: string[];
        private _setOptions(options);
        execute(options?: IActionExecuteOptions): Promise<PersistentObject>;
        protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        _getParameters(parameters: any, option: any): any;
        _onParentIsEditingChanged(isEditing: boolean): void;
        _onParentIsDirtyChanged(isDirty: boolean): void;
        private _setNotification(notification?, notificationType?, notificationDuration?);
        static get(service: Service, name: string, owner: ServiceObjectWithActions): Action;
        static addActions(service: Service, owner: ServiceObjectWithActions, actions: Action[], actionNames: string[]): void;
    }
    namespace Actions {
        class RefreshQuery extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<any>;
        }
        class Filter extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
        }
        class Edit extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            _onParentIsEditingChanged(isEditing: boolean): void;
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class EndEdit extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            _onParentIsEditingChanged(isEditing: boolean): void;
            _onParentIsDirtyChanged(isDirty: boolean): void;
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class Save extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class CancelSave extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class CancelEdit extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            _onParentIsEditingChanged(isEditing: boolean): void;
            _onParentIsDirtyChanged(isDirty: boolean): void;
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class ExportToExcel extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class ShowHelp extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
            protected _onExecute({menuOption, parameters, selectedItems, skipOpen, noConfirmation, throwExceptions}: IActionExecuteOptions): Promise<PersistentObject>;
        }
        class viSearch extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
        }
        class viConfigurePO extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
        }
        class viConfigureQuery extends Action {
            constructor(service: Service, definition: ActionDefinition, owner: ServiceObjectWithActions);
        }
    }
    class ActionDefinition {
        private _name;
        private _displayName;
        private _isPinned;
        private _refreshQueryOnCompleted;
        private _offset;
        private _iconData;
        private _reverseIconData;
        private _confirmation;
        private _options;
        private _selectionRule;
        private _showedOn;
        constructor(service: Service, item: QueryResultItem);
        readonly name: string;
        readonly displayName: string;
        readonly isPinned: boolean;
        readonly refreshQueryOnCompleted: boolean;
        readonly offset: number;
        readonly iconData: string;
        readonly reverseIconData: string;
        readonly confirmation: string;
        readonly options: Array<string>;
        readonly selectionRule: (count: number) => boolean;
        readonly showedOn: string[];
    }
    class Application extends PersistentObject {
        private _userId;
        private _friendlyUserName;
        private _feedbackId;
        private _userSettingsId;
        private _globalSearchId;
        private _analyticsKey;
        private _userSettings;
        private _canProfile;
        private _hasManagement;
        private _session;
        private _routes;
        private _poRe;
        private _queryRe;
        programUnits: ProgramUnit[];
        constructor(service: Service, po: any);
        readonly userId: string;
        readonly friendlyUserName: string;
        readonly feedbackId: string;
        readonly userSettingsId: string;
        readonly globalSearchId: string;
        readonly analyticsKey: string;
        readonly userSettings: any;
        readonly canProfile: boolean;
        readonly hasManagement: boolean;
        readonly session: Vidyano.PersistentObject;
        readonly routes: IRoutes;
        readonly poRe: RegExp;
        readonly queryRe: RegExp;
        saveUserSettings(): Promise<any>;
        _updateSession(session: any): void;
    }
    class ProgramUnitItem extends ServiceObject {
        path: string;
        id: string;
        title: string;
        name: string;
        constructor(service: Service, unitItem: any, path?: string);
    }
    class ProgramUnit extends ProgramUnitItem {
        private _id;
        offset: number;
        openFirst: boolean;
        items: ProgramUnitItem[];
        constructor(service: Service, routes: IRoutes, unit: any);
        private _createItem(routes, itemData);
    }
    class ProgramUnitItemGroup extends ProgramUnitItem {
        items: ProgramUnitItem[];
        constructor(service: Service, unitItem: any, items: ProgramUnitItem[]);
    }
    class ProgramUnitItemQuery extends ProgramUnitItem {
        queryId: string;
        constructor(service: Service, routes: IRoutes, unitItem: any, parent: ProgramUnit);
        private static _getPath(routes, id);
    }
    class ProgramUnitItemPersistentObject extends ProgramUnitItem {
        persistentObjectId: string;
        persistentObjectObjectId: string;
        constructor(service: Service, routes: IRoutes, unitItem: any, parent: ProgramUnit);
        private static _getPath(routes, id, objectId);
    }
    class ProgramUnitItemUrl extends ProgramUnitItem {
        constructor(service: Service, unitItem: any);
    }
    class NoInternetMessage {
        private language;
        title: string;
        message: string;
        tryAgain: string;
        static messages: linqjs.Dictionary<string, NoInternetMessage>;
        constructor(language: string, title: string, message: string, tryAgain: string);
        private static _getMessages();
    }
}
declare namespace Vidyano.WebComponents {
    class ActionBar extends WebComponent {
        accent: boolean;
        serviceObject: Vidyano.ServiceObjectWithActions;
        pinnedActions: Vidyano.Action[];
        unpinnedActions: Vidyano.Action[];
        canSearch: boolean;
        private _setHasCharts;
        filterActions(actions: Vidyano.Action[], pinned: boolean): Vidyano.Action[];
        private _computeHasCharts(charts, app);
        private _search();
        private _computePinnedActions();
        private _computeUnpinnedActions();
        private _computeCanSearch(serviceObject);
        private _computeNoActions(pinnedActions, unpinnedActions);
    }
}
declare namespace Vidyano.WebComponents {
    class ActionButton extends WebComponent {
        item: Vidyano.QueryResultItem;
        action: Action;
        private _skipObserver;
        options: linqjs.KeyValuePair<number, string>[];
        canExecute: boolean;
        noLabel: boolean;
        openOnHover: boolean;
        forceLabel: boolean;
        private _setCanExecute;
        private _setHidden;
        private _setOptions;
        private _setSiblingIcon;
        constructor(item: Vidyano.QueryResultItem, action: Action);
        private _onExecuteWithoutOptions(e);
        private _onExecuteWithOption(e);
        private _execute(option?);
        private _observeAction(canExecute, isVisible, options);
        private _computeDisabled(canExecute);
        private _computeTitle(action, pinned);
        private _computeIcon(action);
        private _computeHasIcon(icon);
        private _computeIconSpace(icon, siblingIcon, overflow);
        private _computeSiblingIcon(overflow, isAttached);
        private _computeOpenOnHover(overflow, openOnHover);
        private _hiddenChanged();
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class AppConfig extends WebComponent {
        private _nodeObserver;
        private _defaultAttributeConfig;
        private _persistentObjectConfigs;
        private _attributeConfigs;
        private _tabConfigs;
        private _programUnitConfigs;
        private _queryConfigs;
        private _queryChartConfigs;
        attached(): void;
        detached(): void;
        private _nodesChanged(info);
        private _handleNode(node, added);
        getSetting(key: string, defaultValue?: string): string;
        getPersistentObjectConfig(persistentObject: Vidyano.PersistentObject): PersistentObjectConfig;
        getAttributeConfig(attribute: Vidyano.PersistentObjectAttribute): PersistentObjectAttributeConfig;
        getTabConfig(tab: Vidyano.PersistentObjectTab): PersistentObjectTabConfig;
        getProgramUnitConfig(name: string): ProgramUnitConfig;
        getQueryConfig(query: Vidyano.Query): QueryConfig;
        getQueryChartConfig(type: string): QueryChartConfig;
        private _getConfigs<T>(type);
    }
}
declare namespace Vidyano.WebComponents {
    class AppSetting extends WebComponent {
        key: string;
        value: string;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectAttributeConfig extends TemplateConfig<Vidyano.PersistentObjectAttribute> {
        private _calculateHeight;
        private _calculateWidth;
        private height;
        private width;
        type: string;
        name: string;
        noLabel: boolean;
        parentId: string;
        parentObjectId: string;
        calculateHeight(attr: Vidyano.PersistentObjectAttribute): number;
        calculateWidth(attr: Vidyano.PersistentObjectAttribute): number;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectConfig extends TemplateConfig<Vidyano.PersistentObject> {
        id: string;
        type: string;
        objectId: string;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectTabConfig extends TemplateConfig<Vidyano.PersistentObjectTab> {
        id: string;
        name: string;
        type: string;
        objectId: string;
        hideActionBar: boolean;
    }
}
declare namespace Vidyano.WebComponents {
    class ProgramUnitConfig extends TemplateConfig<Vidyano.ProgramUnit> {
        name: string;
    }
}
declare namespace Vidyano.WebComponents {
    class QueryChartConfig extends TemplateConfig<Vidyano.QueryChart> {
        type: string;
    }
}
declare namespace Vidyano.WebComponents {
    class QueryConfig extends TemplateConfig<Vidyano.Query> {
        name: string;
        id: string;
        type: string;
        defaultChart: string;
        fileDropAttribute: string;
        hideHeader: boolean;
    }
}
declare namespace Vidyano.WebComponents {
    abstract class TemplateConfig<T> extends WebComponent {
        private _template;
        hasTemplate: boolean;
        as: string;
        asModel: (model: T) => any;
        private _setHasTemplate;
        attached(): void;
        stamp(obj: T, as?: string, asModel?: (model: T) => any): DocumentFragment;
        static register(info?: IWebComponentRegistrationInfo): (obj: any) => void;
    }
}
declare namespace Vidyano.WebComponents {
    class AppColor {
        private _base;
        private _faint;
        private _semiFaint;
        private _lighter;
        private _light;
        private _dark;
        private _darker;
        constructor(_base: string);
        readonly faint: string;
        readonly semiFaint: string;
        readonly lighter: string;
        readonly light: string;
        readonly base: string;
        readonly dark: string;
        readonly darker: string;
        private _calculateVariant(rgb, a, dark?);
        private _hexToRgb(hex);
        private _rgbToHex(rgb);
    }
}
declare var _gaq: any[];
declare namespace Vidyano {
    function debug(debug?: boolean): void;
}
declare namespace Vidyano.WebComponents {
    class AppCacheEntry {
        id: string;
        constructor(id: string);
        isMatch(entry: AppCacheEntry): boolean;
    }
    class PersistentObjectAppCacheEntry extends AppCacheEntry {
        objectId: string;
        private _persistentObject;
        selectedMasterTab: Vidyano.PersistentObjectTab;
        selectedDetailTab: Vidyano.PersistentObjectTab;
        constructor(idOrPo: string | Vidyano.PersistentObject, objectId?: string);
        persistentObject: Vidyano.PersistentObject;
        isMatch(entry: PersistentObjectAppCacheEntry): boolean;
    }
    class PersistentObjectFromActionAppCacheEntry extends PersistentObjectAppCacheEntry {
        fromActionId: string;
        fromActionIdReturnPath: string;
        constructor(po: Vidyano.PersistentObject, fromActionId?: string, fromActionIdReturnPath?: string);
        isMatch(entry: PersistentObjectFromActionAppCacheEntry): boolean;
    }
    class QueryAppCacheEntry extends AppCacheEntry {
        query: Vidyano.Query;
        constructor(idOrQuery: string | Vidyano.Query);
        isMatch(entry: QueryAppCacheEntry): boolean;
    }
    class App extends WebComponent {
        private _cache;
        private _nodeObserver;
        private _appRoutePresenter;
        private _initializeResolve;
        private _initializeReject;
        private _initialize;
        private _initializationError;
        private _routeMap;
        private _routeUpdater;
        private _keybindingRegistrations;
        private _beforeUnloadEventHandler;
        private _activeDialogs;
        service: Vidyano.Service;
        programUnit: ProgramUnit;
        currentRoute: AppRoute;
        uri: string;
        hooks: string;
        noHistory: boolean;
        path: string;
        cacheSize: number;
        noMenu: boolean;
        barebone: boolean;
        label: string;
        keys: string;
        isTracking: boolean;
        private _setInitializing;
        private _setKeys;
        private _setCurrentRoute;
        private _setBarebone;
        private _setProfilerLoaded;
        attached(): void;
        detached(): void;
        readonly configuration: AppConfig;
        readonly initialize: Promise<Vidyano.Application>;
        readonly initializationError: string;
        changePath(path: string, replaceCurrent?: boolean): void;
        getUrlForPersistentObject(id: string, objectId: string, pu?: ProgramUnit): string;
        getUrlForQuery(id: string, pu?: ProgramUnit): string;
        getUrlForFromAction(id: string, pu?: ProgramUnit): string;
        cache(entry: Vidyano.WebComponents.AppCacheEntry): Vidyano.WebComponents.AppCacheEntry;
        cachePing(entry: Vidyano.WebComponents.AppCacheEntry): Vidyano.WebComponents.AppCacheEntry;
        cacheRemove(key: Vidyano.WebComponents.AppCacheEntry): void;
        readonly cacheEntries: Vidyano.WebComponents.AppCacheEntry[];
        cacheClear(): void;
        createServiceHooks(): ServiceHooks;
        redirectToSignIn(keepUrl?: boolean): void;
        redirectToSignOut(keepUrl?: boolean): void;
        showDialog(dialog: Dialog): Promise<any>;
        showMessageDialog(options: Vidyano.WebComponents.IMessageDialogOptions): Promise<any>;
        showAlert(notification: string, type?: Vidyano.NotificationType, duration?: number): void;
        importComponent(component: string): Promise<any>;
        private _distributeAppRoutes();
        private _nodesChanged(info);
        private _computeIsProfiling(isSignedIn, profile);
        private _cookiePrefixChanged(cookiePrefix);
        private _updateInitialize(...promises);
        private _computeService(uri, user, hooks);
        reinitialize(): void;
        private _anchorClickHandler(e, data);
        private _convertPath(application, path);
        private _updateRoute(path, initializing);
        private _computeProgramUnit(application, path);
        private _computeShowMenu(application, noMenu, barebone);
        private _cleanUpOnSignOut(isSignedIn);
        private _hookWindowBeforeUnload(noHistory, isAttached);
        private _beforeUnload(e);
        private _registerKeybindings(registration);
        private _unregisterKeybindings(registration);
        private _keysPressed(e);
        private _resolveDependencies(hasManagement);
        private _configureContextmenu(e);
        private _computeThemeColorVariants(base, target, isAttached);
        static removeRootPath(path?: string): string;
    }
    class AppServiceHooks extends Vidyano.ServiceHooks {
        app: App;
        constructor(app: App);
        private _initializeGoogleAnalytics();
        trackEvent(action: string, option: string, owner: ServiceObjectWithActions): void;
        trackPageView(path: string): void;
        getPersistentObjectConfig(persistentObject: Vidyano.PersistentObject, persistentObjectConfigs: PersistentObjectConfig[]): PersistentObjectConfig;
        getAttributeConfig(attribute: Vidyano.PersistentObjectAttribute, attributeConfigs: PersistentObjectAttributeConfig[]): PersistentObjectAttributeConfig;
        getTabConfig(tab: Vidyano.PersistentObjectTab, tabConfigs: PersistentObjectTabConfig[]): PersistentObjectTabConfig;
        getProgramUnitConfig(name: string, programUnitConfigs: ProgramUnitConfig[]): ProgramUnitConfig;
        getQueryConfig(query: Vidyano.Query, queryConfigs: QueryConfig[]): QueryConfig;
        getQueryChartConfig(type: string, queryChartConfigs: QueryChartConfig[]): QueryChartConfig;
        onConstructQuery(service: Service, query: any, parent?: Vidyano.PersistentObject, asLookup?: boolean, maxSelectedItems?: number): Vidyano.Query;
        onActionConfirmation(action: Action, option: number): Promise<boolean>;
        onAction(args: ExecuteActionArgs): Promise<Vidyano.PersistentObject>;
        onOpen(obj: ServiceObject, replaceCurrent?: boolean, fromAction?: boolean): Promise<void>;
        onClose(parent: Vidyano.ServiceObject): void;
        onRedirectToSignIn(keepUrl: boolean): void;
        onRedirectToSignOut(keepUrl: boolean): void;
        onMessageDialog(title: string, message: string, rich: boolean, ...actions: string[]): Promise<number>;
        onShowNotification(notification: string, type: NotificationType, duration: number): void;
        onSelectReference(query: Vidyano.Query): Promise<QueryResultItem[]>;
        onSessionExpired(): boolean;
        onNavigate(path: string, replaceCurrent?: boolean): void;
        onClientOperation(operation: ClientOperations.IClientOperation): void;
        onQueryFileDrop(query: Vidyano.Query, name: string, contents: string): Promise<boolean>;
        onRetryAction(retry: IRetryAction): Promise<string>;
    }
}
declare namespace Vidyano.WebComponents {
    class AppRoute extends WebComponent {
        route: string;
        component: string;
        private _constructor;
        private _constructorComponent;
        private _constructorChanged;
        private _hasChildren;
        private _parameters;
        private _documentTitleBackup;
        allowSignedOut: boolean;
        active: boolean;
        path: string;
        deactivator: (result: boolean) => void;
        private _setActive;
        private _setPath;
        constructor(route: string, component: string);
        matchesParameters(parameters?: {
            [key: string]: string;
        }): boolean;
        activate(parameters?: {
            [key: string]: string;
        }): Promise<any>;
        private _constructorFromComponent(component);
        private _distributeNewComponent();
        private _clearChildren();
        deactivate(): Promise<boolean>;
        reset(): void;
        readonly parameters: any;
        private _activeChanged();
        private _titleChanged(e, detail);
    }
}
declare namespace Vidyano.WebComponents {
    class AppRoutePresenter extends WebComponent {
        notFound: boolean;
        attached(): void;
    }
}
declare namespace Vidyano.WebComponents {
    class AttachedNotifier extends WebComponent {
        private _wasAttached;
        oneTime: boolean;
        attached(): void;
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeAsDetail extends WebComponents.Attributes.PersistentObjectAttribute {
        private _inlineAddHeight;
        private _lastComputedWidths;
        private _initialActiveObjectSet;
        attribute: Vidyano.PersistentObjectAttributeAsDetail;
        newAction: Vidyano.Action;
        newActionPinned: boolean;
        private _setInitializing;
        private _setNewAction;
        private _setDeleteAction;
        private _isColumnVisible(column);
        private _computeColumns(columns);
        private _computeCanDelete(editing, deleteAction, objects);
        private _computeNewActionPinned(height, newAction);
        private _updateActions(actions, editing, readOnly);
        private _updateWidths(columns, width, deleteAction, editing, isAttached);
        private _rowAdded(e);
        private _add(e);
        private __add(po);
        private _delete(e);
        private _isActiveObject(activeObject, obj);
        private _setActiveObject(e);
    }
    class PersistentObjectAttributeAsDetailRow extends WebComponents.WebComponent {
        private fullEdit;
        serviceObject: Vidyano.PersistentObject;
        private _isColumnVisible(column);
        private _getDisplayValue(obj, column);
        private _getAttributeForColumn(obj, column);
        private _scrollNewDetailRowIntoView(serviceObject, columns, editing, isAttached);
        private _computeSoftEdit(serviceObject);
        private _isPresenterAvailable(fullEdit, softEdit);
        private _isSoftEditOnly(fullEdit, softEdit);
        private _setFullEdit(e);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeBinaryFile extends WebComponents.Attributes.PersistentObjectAttribute {
        private _inputContainer;
        private _inputAttribute;
        private _change(e);
        private _registerInput(attribute, isAttached);
        private _clear();
        private _computeCanClear(value, readOnly);
        private _computeFileName(value);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeBoolean extends WebComponents.Attributes.PersistentObjectAttribute {
        protected _valueChanged(newValue: any): void;
        private _isDisabled(isReadOnly, isFrozen);
    }
    class PersistentObjectAttributeNullableBoolean extends WebComponents.Attributes.PersistentObjectAttribute {
        private _computeBooleanOptions(attribute);
        protected _valueChanged(newValue: any): void;
        private _notNull(value);
        private _isDisabled(isReadOnly, isFrozen);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeComboBox extends WebComponents.Attributes.PersistentObjectAttribute {
        comboBoxOptions: string[];
        newValue: string;
        private _setComboBoxOptions;
        protected _editingChanged(): void;
        protected _valueChanged(newValue: any): void;
        protected _optionsChanged(): void;
        private _add();
        private _computeCanAdd(newValue, options);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeCommonMark extends PersistentObjectAttribute {
        private _editTextAreaBlur();
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeDateTime extends WebComponents.Attributes.PersistentObjectAttribute {
        private _dateInput;
        private _timeInput;
        private _syncedSelectedDate;
        private _lastRenderedSelectedDate;
        private _isDateFilled;
        private _isTimeFilled;
        private _skipBlurRefreshUpdate;
        hasTimeComponent: boolean;
        hasInvalidTime: boolean;
        hasDateComponent: boolean;
        hasInvalidDate: boolean;
        selectedDate: Date;
        private _setHasInvalidTime;
        private _setHasInvalidDate;
        readonly dateInput: HTMLInputElement;
        readonly timeInput: HTMLInputElement;
        protected _editingChanged(): void;
        protected _valueChanged(newValue: any): void;
        private _selectedDateChanged();
        private _inputBlur();
        private _clear();
        private _renderSelectedDate(forceDate?, forceTime?);
        private _dateFilled(e, detail);
        private _timeChanged(e, detail);
        private _timeFilled(e, detail);
        private _updateSelectedDate(date, time?);
        private _computeHasComponent(target, component);
        private _computeDateFormat();
        private _computeDateSeparator();
        private _computeTimeFormat();
        private _computeTimeSeparator();
        private _computeCanClear(value, required);
        private _computeMonthMode(displayFormat);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeDropDown extends WebComponents.Attributes.PersistentObjectAttribute {
        protected _valueChanged(newValue: any): void;
        private _computeRadio(attribute);
        private _isRadioChecked(option, value);
        private _radioLabel(option);
        private _radioChanged(e);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeFlagsEnum extends WebComponents.Attributes.PersistentObjectAttribute {
        private _disablePopup(readonly, disabled);
    }
    class PersistentObjectAttributeFlagsEnumFlag extends WebComponents.WebComponent {
        private _skipCheckedChanged;
        attribute: Vidyano.PersistentObjectAttribute;
        checked: boolean;
        label: string;
        option: Vidyano.Common.IKeyValuePair;
        private _checkedChanged();
        private _computeLabel(option);
        private _valueChanged(value, label);
        private _values(value);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeImage extends WebComponents.Attributes.PersistentObjectAttribute {
        private _pasteListener;
        _attributeChanged(): void;
        detached(): void;
        private _change(e);
        private _clear();
        private _computeHasValue(value);
        private _computeImage(value);
        private _pasteAuto(e);
        private _pasteCreateImage(source);
        private _showDialog();
    }
    class PersistentObjectAttributeImageDialog extends WebComponents.Dialog {
        label: string;
        src: string;
        private _updated;
        constructor(label: string, src: string);
        private _showImage(headerSize, footerSize);
        private _close();
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeKeyValueList extends WebComponents.Attributes.PersistentObjectAttribute {
        protected _valueChanged(newValue: any): void;
        private _computeRadio(attribute);
        private _isRadioChecked(option, value);
        private _radioLabel(option);
        private _radioChanged(e);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeMultiLineString extends PersistentObjectAttribute {
        maxlength: number;
        protected _attributeChanged(): void;
        private _editTextAreaBlur();
        private _computeCodeMirror(attribute);
        private _computeIsCodeMirrorReadOnly(readOnly, editing);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeMultiStringItems extends Sortable {
        protected _dragEnd(): void;
    }
    class PersistentObjectAttributeMultiStringItem extends WebComponent {
        private _focusQueued;
        value: string;
        isNew: boolean;
        isReadOnly: boolean;
        constructor(value: string, isReadOnly?: boolean);
        attached(): void;
        queueFocus(): void;
        private _valueChanged(value);
        private _onInputBlur();
    }
    class PersistentObjectAttributeMultiString extends PersistentObjectAttribute {
        strings: PersistentObjectAttributeMultiStringItem[];
        private _setNewString;
        private _computeStrings(value, readOnly);
        private _itemValueNew(e, detail);
        private _itemsOrderChanged();
        private _itemValueChanged(e);
        private _getValues();
        private _render(strings, editing, isAttached);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeNumeric extends WebComponents.Attributes.PersistentObjectAttribute {
        private _allowDecimal;
        private _isNullable;
        private _decimalSeparator;
        private _dataType;
        unitBefore: string;
        unitAfter: string;
        private static _decimalTypes;
        private static _unsignedTypes;
        private _setFocused;
        _attributeChanged(): void;
        protected _attributeValueChanged(): void;
        protected _valueChanged(newValue: any): void;
        private _editInputBlur(e);
        private _editInputFocus(e);
        private _canParse(value);
        private _between(value, minValue, maxValue);
        private _setCarretIndex(input, carretIndex);
        private _keypress(e);
        private _computeDisplayValueWithUnit(value, displayValue, unit, unitPosition);
        private _computeBeforeUnit(unit, position, value, hideOnNoValue?);
        private _computeAfterUnit(unit, position);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributePassword extends WebComponents.Attributes.PersistentObjectAttribute {
        private _editInputBlur();
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeReference extends WebComponents.Attributes.PersistentObjectAttribute {
        objectId: string;
        attribute: Vidyano.PersistentObjectAttributeWithReference;
        href: string;
        filter: string;
        canAddNewReference: boolean;
        private _setCanClear;
        private _setCanAddNewReference;
        private _setCanBrowseReference;
        attached(): void;
        protected _attributeChanged(): void;
        protected _valueChanged(newValue: any): void;
        private _objectIdChanged();
        private _filterBlur();
        protected _editingChanged(): void;
        private _browse(e);
        private _browseReference(throwExceptions?, forceSearch?);
        private _addNewReference(e?);
        private _clearReference(e);
        private _update();
        private _openSelect();
        private _open(e);
        private _computeTarget(attribute, href);
        private _computeSelectInPlaceAsRadio(attribute);
        private _isRadioChecked(optionKey, objectId);
        private _radioChanged(e);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeString extends PersistentObjectAttribute {
        private _suggestionsSeparator;
        characterCasing: string;
        editInputStyle: string;
        inputtype: string;
        maxlength: number;
        suggestions: string[];
        private _setEditInputStyle;
        private _setSuggestions;
        protected _attributeChanged(): void;
        private _editInputBlur();
        protected _valueChanged(): void;
        private _addSuggestion(e);
        private _computeFilteredSuggestions(suggestions, value);
        private _computeHasSuggestions(suggestions, readOnly);
        private _characterCasingChanged(casing);
        private _changeCasing(val);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    interface ITranslatedString {
        key: string;
        label: string;
        value: string;
    }
    class PersistentObjectAttributeTranslatedString extends PersistentObjectAttribute {
        private _defaultLanguage;
        strings: ITranslatedString[];
        multiline: boolean;
        private _setStrings;
        protected _optionsChanged(options: string[] | Common.IKeyValuePair[]): void;
        protected _valueChanged(newValue: string): void;
        private _editInputBlur();
        private _computeMultiline(attribute);
        private _computeCanShowDialog(strings, multiline);
        private _showLanguagesDialog();
    }
    class PersistentObjectAttributeTranslatedStringDialog extends Dialog {
        label: string;
        strings: ITranslatedString[];
        multiline: boolean;
        readonly: boolean;
        constructor(label: string, strings: ITranslatedString[], multiline: boolean, readonly: boolean);
        private _ok();
        private _onCaptureTab();
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeUser extends WebComponents.Attributes.PersistentObjectAttribute {
        private _browsing;
        private _browseReference();
        private _clearReference();
        private _setNewUser(id, name);
        private _computeFriendlyName(options);
        private _computeCanClear(isRequired, value);
        private _computeCanBrowseReference(isReadOnly);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttributeEdit extends WebComponent {
        private _setFocus;
        attribute: Vidyano.PersistentObjectAttribute;
        private _focus(e);
        private _blur(e);
        private _showError();
        private _computeHasError(validationError);
    }
}
declare namespace Vidyano.WebComponents.Attributes {
    class PersistentObjectAttribute extends WebComponent {
        static typeSynonyms: {
            [key: string]: string[];
        };
        private _foreground;
        attribute: Vidyano.PersistentObjectAttribute;
        value: any;
        editing: boolean;
        nonEdit: boolean;
        readOnly: boolean;
        disabled: boolean;
        protected _attributeValueChanged(): void;
        protected _optionsChanged(options: string[] | Common.IKeyValuePair[]): void;
        protected _attributeChanged(): void;
        protected _editingChanged(): void;
        protected _valueChanged(newValue: any): void;
        private _computeHasError(validationError);
        private _computeEditing(isEditing, nonEdit);
        private _computeIsReadOnly(isReadOnly, disabled);
        private _computeOptions(options, isRequired, type);
        private _updateForegroundDataTypeHint(attribute, isEditing, isReadOnly);
        protected _onFocus(e: FocusEvent): void;
        static register(info?: IWebComponentRegistrationInfo): any;
    }
}
declare namespace Vidyano.WebComponents {
    class Button extends WebComponents.WebComponent {
        disabled: boolean;
        private _setCustomLayout;
        attached(): void;
        private _tap(e);
    }
}
declare namespace Vidyano.WebComponents {
    abstract class Chart extends WebComponent {
        protected static colors: string[];
        chart: Vidyano.QueryChart;
    }
}
declare namespace Vidyano.WebComponents {
    class ChartSelector extends WebComponent {
        query: Vidyano.Query;
        private _computeTypes(charts);
        private _showGrid(e);
        private _showChart(e);
    }
}
declare namespace Vidyano.WebComponents {
    class Checkbox extends WebComponents.WebComponent {
        checked: boolean;
        label: string;
        disabled: boolean;
        radio: boolean;
        toggle(): void;
        private _keyToggle(e);
        private _computeIsNull(checked);
        private _computeIcon(radio);
        private _isEmpty(label);
    }
}
declare type CM = CodeMirror.EditorFromTextArea;
declare const CMFromTextArea: typeof CodeMirror.fromTextArea;
declare namespace Vidyano.WebComponents {
    class CodeMirror extends WebComponents.WebComponent {
        private _codeMirror;
        private _codeMirrorValueChangedHandler;
        initialized: boolean;
        readOnly: boolean;
        value: string;
        private _initialize(mode, isAttached);
        private _refresh(size, initialized);
        private _codeMirrorValueChanged();
        private _valueChanged(newValue);
        private _modeChanged(mode, initialized);
        private _lineNumbersChanged(lineNumbers, initialized);
        private _smartIndentChanged(smartIndent, initialized);
        private _readOnlyChanged(readOnly, initialized);
    }
}
declare namespace Vidyano.WebComponents {
    interface IDatePickerCell {
        type: string;
        content?: string;
        date?: moment.Moment;
        monthOffset?: number;
    }
    class DatePicker extends WebComponent {
        private _daysBody;
        private _monthsAndYearsBody;
        private _dayCells;
        private _monthsAndYearsCells;
        private _minYears;
        private _scopedClassName;
        zoom: string;
        selectedDate: Date;
        monthMode: boolean;
        currentDate: moment.Moment;
        cells: IDatePickerCell[];
        private _setCells;
        private _setCanFast;
        private _setCurrentDate;
        private _setToday;
        private _setHeader;
        private _setDeferredCellsUpdate;
        attached(): void;
        private _zoomChanged(zoom);
        private _render(cells, currentDate, deferredCellsUpdate);
        private _isSelected(zoom, date, selectedDate);
        private _isToday(zoom, date, today);
        private _isOther(monthOffset);
        private _computeMoment(date);
        private _slow(e);
        private _fast(e);
        private _zoomOut(e);
        private _select(e);
        private _opening();
        private _catchTap(e);
    }
}
declare namespace Vidyano.WebComponents {
    abstract class Dialog extends WebComponent {
        private _sizeTracker;
        private _translatePosition;
        private _resolve;
        private opened;
        noCancelOnOutsideClick: boolean;
        noCancelOnEscKey: boolean;
        noHeader: boolean;
        protected cancel: () => void;
        attached(): void;
        open(): Promise<any>;
        private _esc(e);
        close(result?: any): void;
        private _onClosed();
        private _dialogSizeChanged(e, details);
        private _track(e);
        private _translate(position);
        protected _translateReset(): void;
        static register(info?: IWebComponentRegistrationInfo, prefix?: string): any;
    }
}
declare namespace Vidyano.WebComponents {
    class Error extends WebComponents.WebComponent {
    }
}
declare namespace Vidyano.WebComponents {
    interface IFileDropDetails {
        name: string;
        contents: string;
    }
    class FileDrop extends WebComponent {
        dragOver: boolean;
        private _setDragOver;
        private _dragEnter(e);
        private _dragOver(e);
        private _dragLeave(e);
        private _drop(e);
    }
}
declare namespace Vidyano.WebComponents {
    class Grid extends WebComponent {
    }
}
declare namespace Vidyano.WebComponents {
    class Icon extends Resource {
        constructor(source?: string);
        protected readonly _contentTarget: Node;
        static LoadFragment(source: string): DocumentFragment;
        static Exists(name: string): boolean;
    }
}
declare namespace Vidyano.WebComponents {
    class InputSearch extends WebComponent {
        value: string;
        focused: boolean;
        autofocus: boolean;
        attached(): void;
        private _searchKeypressed(e);
        private _searchClick(e?);
        private _input_focused();
        private _input_blurred();
        private _stop_tap(e);
        focus(): void;
    }
}
declare namespace Vidyano.WebComponents {
    class MaskedInput extends WebComponent {
        private _maskedInput;
        format: string;
        separator: string;
        readonly: boolean;
        private _initialize(format, separator, isAttached);
        private _readonlyChanged();
        resetField(): void;
        setAllowed(a: string): void;
        setFormat(f: string): void;
        setSeparator(s: string): void;
        setTypeon(t: string): void;
        setEnabled(val: boolean): void;
    }
}
declare namespace Vidyano.WebComponents {
    class Menu extends WebComponent {
        private static _minResizeWidth;
        private _resizeWidth;
        filter: string;
        filtering: boolean;
        activeProgramUnit: ProgramUnit;
        collapsed: boolean;
        hasGlobalSearch: boolean;
        hideSearch: boolean;
        private _setIsResizing;
        attached(): void;
        detached(): void;
        private _filterChanged();
        private _search();
        private _computeHasGlobalSearch(globalSearchId);
        private _computeCollapsedWithGlobalSearch(collapsed, hasGlobalSearch);
        private _toggleCollapse();
        private _hasGroupItems(programUnitItems);
        private _countItems(programUnitItems);
        private _focusSearch();
        private _catchInputSearchTap(e);
        private _resetFilter(e);
        private _onResize(e, detail);
        private _computeIsFirstRunProgramUnit(application, programUnit);
        private _add(e);
    }
    class MenuItem extends WebComponent {
        item: Vidyano.ProgramUnitItem;
        programUnit: Vidyano.ProgramUnit;
        expand: boolean;
        collapsed: boolean;
        filter: string;
        filtering: boolean;
        hidden: boolean;
        filterParent: ProgramUnitItem;
        private _setExpand;
        private _updateIndentVariable(level);
        private _computeSubLevel(level);
        private _tap(e);
        private _expandChanged(expand);
        private _filterChanged();
        private _updateOpened(filtering, item, expand);
        private _hasMatch(item, search);
        private _programUnitChanged();
        private _updateItemTitle(item, filter, filtering, collapsed);
        private _computeIcon(item);
        private _computedHasItems(item);
        private _computedHref(item, app);
        private _titleMouseenter();
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    interface IMessageDialogOptions {
        noClose?: boolean;
        title?: string;
        titleIcon?: string;
        actions?: string[];
        actionTypes?: string[];
        message: string;
        extraClasses?: string[];
        rich?: boolean;
    }
    class MessageDialog extends Dialog {
        private _setOptions;
        constructor(options: IMessageDialogOptions);
        private _hasHeaderIcon(options);
        private _getActionType(options, index);
        private _onSelectAction(e);
        private _isFirst(index);
    }
}
declare namespace Vidyano.WebComponents {
    class Notification extends WebComponent {
        serviceObject: Vidyano.ServiceObjectWithActions;
        isOverflowing: boolean;
        type: string;
        text: string;
        private _setIsOverflowing;
        private _close();
        private _moreInfo(e);
        private _trackerSizeChanged(e);
        private _textChanged();
        private _setTextOverflow();
        private _computeText(notification);
        private _computeHidden(text, duration);
        private _getIconType(type);
        private _computeIcon(type);
    }
}
declare namespace Vidyano.WebComponents {
    class Overflow extends WebComponent {
        private _overflownChildren;
        private _visibibleSizeChangedSkip;
        private _previousHeight;
        hasOverflow: boolean;
        private _setHasOverflow;
        private _visibleContainerSizeChanged(e, detail);
        private _childSizechanged();
        private _visibleSizeChanged(e, detail);
        protected _getChildren(): linqjs.Enumerable<HTMLElement>;
        private _popupOpening();
        private _popupClosed();
        private _popup(e);
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObject extends WebComponent {
        private _uniqueId;
        private _parameters;
        private _styleElement;
        private _cacheEntry;
        persistentObject: Vidyano.PersistentObject;
        layout: string;
        masterWidth: string;
        masterTabs: Vidyano.PersistentObjectTab[];
        selectedMasterTab: Vidyano.PersistentObjectTab;
        detailTabs: Vidyano.PersistentObjectTab[];
        selectedDetailTab: Vidyano.PersistentObjectTab;
        attached(): void;
        detached(): void;
        private _persistentObjectChanged(persistentObject, isAttached);
        private _masterWidthChanged();
        private _computeMasterTabs(persistentObject, tabs);
        private _computeDetailTabs(persistentObject, tabs);
        private _detailTabsChanged();
        private _masterTabsChanged();
        private _selectedMasterTabChanged();
        private _selectedDetailTabChanged();
        private _computeLayout(persistentObject, masterTabs?, detailTabs?);
        private _computeLayoutMasterDetail(persistentObject, masterTabs?, detailTabs?);
        private _computeLayoutDetailsOnly(persistentObject, masterTabs?, detailTabs?);
        private _computeLayoutFullPage(persistentObject, detailTabs?);
        private _computeLayoutMasterActions(persistentObject, masterTabs?);
        private _computeLayoutDetailActions(persistentObject, detailTabs?);
        private _computeLayoutMasterTabs(persistentObject, masterTabs?, detailTabs?);
        private _computeLayoutDetailTabs(persistentObject, detailTabs?);
        private _disableTabScrolling(tab);
        private _hasMasterTabs(tabs);
        private _hasDetailTabs(tabs);
        private _tabselect(e, detail);
        private _persistentObjectNotificationChanged(notification);
        private _trackSplitter(e, detail);
        private _hideActionBar(tab);
    }
    class PersistentObjectDetailsContent extends WebComponent {
    }
    class PersistentObjectDetailsHeader extends WebComponent {
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectAttributeLabel extends WebComponent {
        attribute: Vidyano.PersistentObjectAttribute;
        private _computeRequired(attribute, required, value);
        private _computeReadOnly(isReadOnly, disabled);
        private _computeEditing(isEditing, nonEdit);
        private _computeHasError(validationError);
        private _computeHasToolTip(toolTip);
        private _showTooltip(e);
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectAttributePresenter extends WebComponent implements IConfigurable {
        private static _attributeImports;
        private _renderedAttribute;
        private _renderedAttributeElement;
        private _customTemplate;
        private _focusQueued;
        attribute: Vidyano.PersistentObjectAttribute;
        nonEdit: boolean;
        noLabel: boolean;
        height: number;
        loading: boolean;
        disabled: boolean;
        readOnly: boolean;
        private _setLoading;
        attached(): void;
        queueFocus(): void;
        private _attributeChanged(attribute, isAttached);
        private _getAttributeTypeImportInfo(type);
        private _renderAttribute(attribute, attributeType);
        private _computeEditing(isEditing, nonEdit);
        private _nonEditChanged(nonEdit);
        private _disabledChanged(disabled);
        private _computeRequired(attribute, required, value);
        private _computeReadOnly(isReadOnly, isFrozen, disabled);
        private _computeHasError(validationError);
        private _isHidden(isVisible);
        private _onFocus();
        private _loadingChanged(loading);
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    interface IPersistentObjectDialogOptions {
        noHeader?: boolean;
        saveLabel?: string;
        save?: (po: Vidyano.PersistentObject, close: () => void) => void;
        cancel?: (close: () => void) => void;
    }
    class PersistentObjectDialog extends Dialog {
        persistentObject: Vidyano.PersistentObject;
        private _options;
        private _saveHook;
        tab: Vidyano.PersistentObjectAttributeTab;
        constructor(persistentObject: Vidyano.PersistentObject, _options?: IPersistentObjectDialogOptions);
        private _save();
        private _cancel();
        private _computeSaveLabel(app);
        private _computeTab(persistentObject, isAttached);
        private _computeReadOnly(tab);
        private _computeDialogActions(persistentObject);
        private _executeExtraAction(e);
        private _onCaptureTab();
        private _tabInnerSizeChanged(e, detail);
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectGroup extends WebComponent {
        private _items;
        private _itemsChecksum;
        private _presentersLoading;
        private _layout;
        group: Vidyano.PersistentObjectAttributeGroup;
        columns: number;
        loading: boolean;
        private _setLoading;
        private _computeLabel(group, groupIndex, translations);
        private _arrange(attributes, columns, attached);
        private _itemFromAttribute(attribute);
        private _onAttributeLoading(e);
        private _onAttributeLoaded(e);
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectPresenter extends WebComponent implements IConfigurable {
        private _cacheEntry;
        persistentObjectId: string;
        persistentObjectObjectId: string;
        persistentObject: Vidyano.PersistentObject;
        templated: boolean;
        private _setLoading;
        private _setTemplated;
        private _setError;
        private _activate(e);
        private _deactivate(e);
        private _updatePersistentObject(persistentObjectId, persistentObjectObjectId, isAttached);
        private _persistentObjectChanged(persistentObject, oldPersistentObject);
        private _renderPersistentObject(persistentObject);
        private _edit();
        private _save();
        private _cancelSave();
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectTab extends WebComponent implements IConfigurable {
        private _attributePresenters;
        private _autofocusTarget;
        tab: Vidyano.PersistentObjectAttributeTab;
        autofocus: boolean;
        private _computeColumns(size, defaultColumnCount);
        private _autofocus(autofocus, isEditing);
        private _attributeLoaded(e, detail);
        private _innerSizeChanged(size);
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectTabBar extends WebComponent {
        private _observeDisposer;
        tabs: Vidyano.PersistentObjectTab[];
        selectedTab: Vidyano.PersistentObjectTab;
        private _hookObservers();
        private _tabSelected(e, detail);
        private isInline(mode);
        private isDropDown(mode);
        private _isVisible(tab);
    }
    class PersistentObjectTabBarItem extends WebComponent {
        tab: Vidyano.PersistentObjectTab;
        private _select();
        private _computeIsSelected(tab, selectedTab);
        private _computeHasBadge(badge);
        private _computeLabel(tabLabel, query, queryLabel);
        private _computeQuery(tab);
        private _computeQueryLabel(label, currentFilter);
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectTabPresenter extends WebComponent {
        private _renderedTab;
        private _tabAttributes;
        tab: Vidyano.PersistentObjectTab;
        templated: boolean;
        private _setLoading;
        private _setTemplated;
        private _renderTab(tab, isAttached);
        private _attributeLoaded(e, detail);
    }
}
declare namespace Vidyano.WebComponents {
    class PersistentObjectWizardDialog extends Dialog {
        persistentObject: Vidyano.PersistentObject;
        currentTab: Vidyano.PersistentObjectAttributeTab;
        hasPendingAttributes: boolean;
        private _setCurrentTab;
        private _setCanPrevious;
        private _setCanNext;
        private _setCanFinish;
        constructor(persistentObject: Vidyano.PersistentObject);
        attached(): void;
        private _tabInnerSizeChanged(e, detail);
        private _computeCanPrevious(currentTab);
        private _previous(e);
        private _computeCanNext(currentTab, hasPendingAttributes, isBusy);
        private _next(e);
        private _computeCanFinish(currentTab, canNext);
        private _computeHasPendingAttributes(attributes);
        private _finish();
        private _onCaptureTab();
    }
}
declare namespace Vidyano.WebComponents {
    class PopupCore extends WebComponent {
        private static _isBuggyGetBoundingClientRect;
        private static _openPopups;
        private __Vidyano_WebComponents_PopupCore__Instance__;
        private _resolver;
        private _closeOnMoveoutTimer;
        private _currentTarget;
        private _currentContent;
        protected _currentOrientation: string;
        open: boolean;
        orientation: string;
        contentAlign: string;
        disabled: boolean;
        sticky: boolean;
        hover: boolean;
        boundingTarget: HTMLElement;
        closeDelay: number;
        protected _setOpen: (val: boolean) => void;
        private _setHover;
        popup(target: HTMLElement | WebComponent): Promise<any>;
        protected _open(target: HTMLElement | WebComponent, content?: HTMLElement): void;
        protected _getTargetRect(target: HTMLElement): {
            targetRect: ClientRect;
            transformedRect?: ClientRect;
        };
        close(): void;
        protected _findParentPopup(): Popup;
        private _catchContentClick(e?);
        protected _contentMouseEnter(e: MouseEvent): void;
        protected _contentMouseLeave(e: MouseEvent): void;
        private _hoverChanged(hover);
        static closeAll(parent?: HTMLElement | WebComponent): void;
        private static _isDescendant(parent, child);
    }
    class Popup extends PopupCore {
        private _tapHandler;
        private _enterHandler;
        private _leaveHandler;
        private _header;
        autoSizeContent: boolean;
        openOnHover: boolean;
        popup(): Promise<any>;
        protected _open(target: HTMLElement | WebComponent): void;
        private _hookTapAndHoverEvents();
        private _tap(e);
        private _onOpen(e);
        protected _contentMouseLeave(e: MouseEvent): void;
        private _toggleSizeChanged(e, detail);
    }
}
declare namespace Vidyano.WebComponents {
    class PopupMenu extends WebComponent {
        private _openContextEventListener;
        contextMenuOnly: boolean;
        shiftKey: boolean;
        ctrlKey: boolean;
        rightAlign: boolean;
        openOnHover: boolean;
        popup(): Promise<any>;
        private _hookContextMenu(isAttached, contextMenu);
        private _openContext(e);
        private _alignmentChanged();
        private _mouseenter();
        private _mousemove(e);
    }
    class PopupMenuItem extends WebComponent {
        label: string;
        icon: string;
        private _action;
        private _observer;
        checked: boolean;
        private _setHasChildren;
        constructor(label?: string, icon?: string, _action?: () => void);
        attached(): void;
        detached(): void;
        private _onTap(e);
    }
    class PopupMenuItemSplit extends WebComponent {
        label: string;
        icon: string;
        private _action;
        private _observer;
        checked: boolean;
        private _setHasChildren;
        constructor(label?: string, icon?: string, _action?: () => void);
        attached(): void;
        detached(): void;
        private _onTap(e);
        private _splitTap(e);
    }
    class PopupMenuItemSeparator extends WebComponent {
    }
}
declare namespace Vidyano.WebComponents {
    interface IProfilerServiceRequest extends Vidyano.IServiceRequest {
        hasNPlusOne: boolean;
        parameters: {
            key: string;
            value: string;
        }[];
        flattenedEntries: IFlattenedServiceRequestProfilerEntry[];
    }
    interface IFlattenedServiceRequestProfilerEntry {
        entry: IServiceRequestProfilerEntry;
        level: number;
    }
    class Profiler extends WebComponent {
        private _boundMousehweel;
        lastRequest: IProfilerServiceRequest;
        selectedRequest: IProfilerServiceRequest;
        zoom: number;
        timelineSize: ISize;
        profiledRequests: IProfilerServiceRequest[];
        private _setLastRequest;
        private _setSelectedRequest;
        private _setHoveredEntry;
        private _setSelectedEntry;
        private _setZoom;
        attached(): void;
        detached(): void;
        private _computeSQL(request);
        private _computeSharpSQL(request);
        private _isSelected(request, selectedRequest);
        private _hasWarnings(request);
        private _hasNPlusOne(request, entries?);
        private _hasSelectedEntry(selectedEntry);
        private _hasLastRequest(request);
        private _onMousewheel(e);
        private _selectRequest(e);
        private _selectedRequestChanged();
        private _profiledRequestsChanged(profiledRequests?);
        private _renderRequestTimeline(request, size, zoom);
        private _flattenEntries(entries?, level?, flattenedEntries?);
        private _computeEntryClassName(e);
        private _formatRequestParameters(request);
        private _formatMs(ms);
        private _formatDate(date);
        private _selectedEntryChanged(entry);
        private _closeSelectedEntry();
        private _close(e);
    }
}
declare namespace Vidyano.WebComponents {
    class ProgramUnitPresenter extends WebComponent {
        programUnit: Vidyano.ProgramUnit;
        private _setProgramUnit;
        private _setError;
        private _activate(e);
        private _programUnitChanged(programUnit, oldProgramUnit);
    }
}
declare namespace Vidyano.WebComponents {
    class Query extends WebComponent {
        private _cacheEntry;
        query: Vidyano.Query;
        attached(): void;
        private _queryChanged();
        private _computeNoActions(actions);
        private _computeSearchOnHeader(noActions, query);
        private _computeLabel(labelWithTotalItems, currentFilter);
        private _computeHideHeader(query, app);
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridCellTemplate extends Resource {
        static Load(source: string): PolymerTemplate;
        static Exists(name: string): boolean;
    }
    class QueryGridCellImage extends WebComponent {
        private _isHidden;
        private _image;
        private _valueChanged(value);
    }
    class QueryGridCellBoolean extends WebComponent {
        private _isHidden;
        private _icon;
        private _textNode;
        private _valueChanged(value, oldValue);
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridColumnFilterProxyBase extends Vidyano.WebComponents.WebComponent {
        private _label;
        private _labelTextNode;
        protected queryColumn: Vidyano.QueryColumn;
        column: QueryGridColumn;
        inversed: boolean;
        filtered: boolean;
        protected _update(): void;
        protected _getDistinctDisplayValue(value: string): string;
        protected label: string;
    }
    class QueryGridColumnFilterProxy extends Vidyano.WebComponents.QueryGridColumnFilterProxyBase {
        private _upgrade();
    }
    interface IQueryGridColumnFilterDistinct {
        type: string;
        value: string;
        displayValue: string;
    }
    class QueryGridColumnFilter extends Vidyano.WebComponents.QueryGridColumnFilterProxyBase {
        private static _selector;
        private _openOnAttach;
        private _distinctHeight;
        private _resizeStart;
        column: QueryGridColumn;
        searchText: string;
        label: string;
        distincts: IQueryGridColumnFilterDistinct[];
        private _setLoading;
        attached(): void;
        private _popupOpening(e);
        private _distinctClick(e);
        private _updateFilters();
        private _updateDistincts();
        private _renderDistincts();
        private _search();
        private _inverse(e);
        private _clear(e);
        private _onResize(e, detail);
        private _catchClick(e);
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridColumnFooter extends WebComponent {
        private _resizingRAF;
        private _column;
        private _columnObserver;
        private _labelTextNode;
        private _typeHints;
        private _renderedValue;
        column: QueryGridColumn;
        private _columnPropertyChanged(sender, args);
        private _updateTotal(total);
        protected _getTypeHint(name: string, defaultValue?: string): string;
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridColumnHeader extends WebComponent implements IConfigurable {
        private _resizingRAF;
        private _column;
        private _columnObserver;
        private _minimumColumnWidth;
        private _labelTextNode;
        private _filter;
        private _sorting;
        private _setSorting;
        private _setDisableSort;
        attached(): void;
        private _onUpgradeFilterProxy(e);
        column: QueryGridColumn;
        private _sort(e);
        private _columnPropertyChanged(sender, args);
        private _updateLabel(label);
        private _updateSortingIcon(direction);
        private _resizeTrack(e, detail);
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridConfigureDialog extends Dialog {
        grid: QueryGrid;
        private _settings;
        private _columnElements;
        private _set_columnElements;
        constructor(grid: QueryGrid, _settings: QueryGridUserSettings);
        private _distributeColumns(e?);
        private _updateColumns(target, columns);
        private _reorderColumns(e);
        private _save();
        private _reset();
    }
    class QueryGridConfigureDialogColumnList extends Sortable {
        protected _dragEnd(): void;
    }
    class QueryGridConfigureDialogColumn extends WebComponent {
        column: QueryGridColumn;
        offset: number;
        isPinned: boolean;
        isHidden: boolean;
        calculatedWidth: number;
        constructor(column: QueryGridColumn);
        private _togglePin();
        private _toggleVisible();
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridFilters extends Vidyano.WebComponents.WebComponent {
        private _preventColumnFilterChangedListener;
        query: Vidyano.Query;
        queryFilters: Vidyano.QueryFilters;
        currentFilter: Vidyano.QueryFilter;
        private _computeFilters(filters);
        private _computeHidden(filters);
        private _computeDisabled(filters, currentFilter);
        private _computeHasFilters(filters);
        private _computeCanReset(currentFilter);
        private _computeCanSave(currentFilter, canSaveAs);
        private _computeCurrentFilterSaveLabel(currentFilter);
        private _computeCanSaveAs(currentFilter);
        private _computeFilterEditLabel(filter);
        private _reset();
        private _load(e);
        private _saveAs();
        private _save();
        private _edit(e);
        private _delete(e);
        private _userFilters(filters);
        private _lockedFilters(filters);
    }
}
declare namespace Vidyano.WebComponents {
    class QueryGridSelectAll extends WebComponent {
        query: Vidyano.Query;
        private _toggle();
    }
}
declare namespace Vidyano.WebComponents {
    interface IQueryGridItemTapEventArgs {
        item: Vidyano.QueryResultItem;
    }
    class QueryGridColumn implements IQueryGridUserSettingsColumnData {
        private _column;
        private _userSettingsColumnData;
        calculatedWidth: number;
        calculatedOffset: number;
        constructor(_column: Vidyano.QueryColumn, _userSettingsColumnData: IQueryGridUserSettingsColumnData);
        readonly column: Vidyano.QueryColumn;
        readonly query: Vidyano.Query;
        readonly name: string;
        readonly label: string;
        readonly type: string;
        readonly canSort: boolean;
        readonly canFilter: boolean;
        readonly canListDistincts: boolean;
        readonly sortDirection: SortDirection;
        readonly distincts: IQueryColumnDistincts;
        offset: number;
        isPinned: boolean;
        isHidden: boolean;
        width: string;
        reset(): void;
    }
    interface IQueryGridUserSettingsColumnData {
        offset?: number;
        isPinned?: boolean;
        isHidden?: boolean;
        width?: string;
    }
    class QueryGridUserSettings extends Vidyano.Common.Observable<QueryGridUserSettings> {
        private _query;
        private _columnsByName;
        private _columns;
        constructor(_query: Vidyano.Query, data?: {
            [key: string]: IQueryGridUserSettingsColumnData;
        });
        getColumn(name: string): QueryGridColumn;
        readonly columns: QueryGridColumn[];
        save(refreshOnComplete?: boolean): Promise<any>;
        static Load(query: Vidyano.Query): QueryGridUserSettings;
    }
    abstract class QueryGridTable {
        grid: QueryGrid;
        private _host;
        private _section;
        rows: QueryGridTableRow[];
        constructor(is: string, grid: QueryGrid);
        update(rowCount: number, columnCount: number): Promise<any>;
        protected abstract _createSection(): HTMLTableSectionElement;
        protected abstract _addRow(index: number): QueryGridTableRow;
        readonly host: HTMLTableElement;
        readonly section: HTMLTableSectionElement;
    }
    class QueryGridTableHeader extends QueryGridTable {
        constructor(grid: QueryGrid);
        update(columnCount: number): Promise<any>;
        protected _addRow(index: number): QueryGridTableRow;
        protected _createSection(): HTMLTableSectionElement;
    }
    class QueryGridTableFooter extends QueryGridTable {
        constructor(grid: QueryGrid);
        update(columnCount: number): Promise<any>;
        protected _addRow(index: number): QueryGridTableRow;
        protected _createSection(): HTMLTableSectionElement;
    }
    class QueryGridTableData extends QueryGridTable {
        constructor(grid: QueryGrid);
        protected _addRow(): QueryGridTableRow;
        protected _createSection(): HTMLTableSectionElement;
    }
    class QueryGridTableDataBody extends Sortable {
        private _table;
        constructor(_table: QueryGridTableData);
    }
    abstract class QueryGridTableRow {
        private _table;
        private _host;
        private _remainder;
        columns: QueryGridTableColumn[];
        constructor(is: string, _table: QueryGridTable);
        updateColumnCount(columnCount: number): Promise<any>;
        protected abstract _createColumn(): QueryGridTableColumn;
        readonly table: QueryGridTable;
        readonly host: HTMLTableRowElement;
    }
    class QueryGridTableHeaderRow extends QueryGridTableRow {
        private _index;
        constructor(table: QueryGridTableHeader, _index: number);
        setColumns(columns: QueryGridColumn[]): void;
        protected _createColumn(): QueryGridTableColumn;
    }
    class QueryGridTableFooterRow extends QueryGridTableRow {
        private _index;
        constructor(table: QueryGridTableFooter, _index: number);
        setColumns(columns: QueryGridColumn[]): void;
        protected _createColumn(): QueryGridTableColumn;
    }
    class QueryGridTableDataRow extends QueryGridTableRow {
        private _itemPropertyChangedListener;
        private _itemQueryPropertyChangedListener;
        private _selector;
        private _actions;
        private _item;
        private _columnCount;
        private _firstCellWithPendingUpdates;
        private _isSelected;
        private _noData;
        private _columnsInUse;
        private _extraClass;
        columns: QueryGridTableDataColumn[];
        constructor(table: QueryGridTableData);
        readonly selector: QueryGridTableDataColumnSelector;
        readonly actions: QueryGridTableDataColumnActions;
        readonly noData: boolean;
        readonly item: Vidyano.QueryResultItem;
        setItem(item: Vidyano.QueryResultItem, columns: QueryGridColumn[], lastPinnedIndex?: number): boolean;
        updatePendingCellUpdates(): boolean;
        private _tap(e);
        private _itemPropertyChanged(sender, args);
        private _itemQueryPropertyChanged(sender, args);
        private _updateIsSelected();
        protected _createColumn(): QueryGridTableColumn;
    }
    abstract class QueryGridTableColumn {
        cell: HTMLElement;
        private _isPinned;
        private _host;
        private _column;
        private _hasContent;
        private _isLastPinned;
        constructor(is: string, cell?: HTMLElement, _isPinned?: boolean);
        readonly host: HTMLTableColElement;
        readonly column: QueryGridColumn;
        readonly isPinned: boolean;
        setColumn(column: QueryGridColumn, lastPinned?: boolean): void;
        readonly hasContent: boolean;
        protected _setHasContent(hasContent: boolean): void;
        static columnSafeName(name: string): string;
    }
    class QueryGridTableHeaderColumn extends QueryGridTableColumn {
        constructor();
        setColumn(column: QueryGridColumn, isLastPinned: boolean): void;
    }
    class QueryGridTableFooterColumn extends QueryGridTableColumn {
        constructor();
        setColumn(column: QueryGridColumn, isLastPinned: boolean): void;
    }
    class QueryGridTableDataColumn extends QueryGridTableColumn {
        private _row;
        private _item;
        private _hasPendingUpdate;
        private _foreground;
        private _fontWeight;
        private _textAlign;
        private _extraClass;
        private _typeHints;
        private _textNode;
        private _textNodeValue;
        private _customCellTemplate;
        private _customCellTemplateInstance;
        private _customCellTemplateType;
        private _lastColumnType;
        constructor(_row: QueryGridTableDataRow);
        readonly item: Vidyano.QueryResultItem;
        readonly hasPendingUpdate: boolean;
        setItem(item: Vidyano.QueryResultItem, column: QueryGridColumn, isLastPinned: boolean): boolean;
        update(): boolean;
        private _render();
        protected _getTypeHint(name: string, defaultValue?: string): string;
    }
    class QueryGridTableColumnRemainder extends QueryGridTableColumn {
        constructor();
    }
    class QueryGridTableDataColumnSelector extends QueryGridTableColumn {
        private _row;
        private _item;
        constructor(_row: QueryGridTableDataRow);
        item: Vidyano.QueryResultItem;
        private _tap(e);
    }
    class QueryGridTableDataColumnActions extends QueryGridTableColumn {
        private _row;
        private _item;
        constructor(_row: QueryGridTableDataRow);
        item: Vidyano.QueryResultItem;
        private _tap(e);
    }
    class QueryGrid extends WebComponent {
        private static tableCache;
        private static perf;
        static profile: boolean;
        private _tableData;
        private _tableHeader;
        private _tableFooter;
        private _tablesUpdating;
        private _tablesUpdatingTimestamp;
        private _virtualTableOffset;
        private _virtualTableOffsetCurrent;
        private _virtualTableStartIndex;
        private _verticalSpacerCorrection;
        private _verticalScrollOffset;
        private _horizontalScrollOffset;
        private _horizontalScrollOffsetCurrent;
        private _items;
        private _columns;
        private _hasPendingUpdates;
        private _itemOpening;
        private _lastSelectedItemIndex;
        private _minimumColumnWidth;
        private _remainderWidth;
        private _settings;
        private _columnMenuColumn;
        private _lastUpdated;
        private _reorderRow;
        canReorder: boolean;
        rowHeight: number;
        viewportSize: ISize;
        query: Vidyano.Query;
        asLookup: boolean;
        initializing: boolean;
        isReordering: boolean;
        private _setInitializing;
        private _setViewportSize;
        private _setRowHeight;
        private _setColumnWidthsCalculated;
        private _setIsReordering;
        attached(): void;
        detached(): void;
        isColumnInView(column: QueryGridColumn): boolean;
        private readonly _style;
        private readonly _actionMenu;
        private readonly _columnMenu;
        private _initializingChanged();
        private _viewportSizeChanged(viewportSize);
        private _verticalScrollOffsetChanged(verticalScrollOffset);
        private _horizontalScrollOffsetChanged(horizontalScrollOffset);
        private _computeSettings(columns);
        private _computeColumns(columns);
        private _computeItems(items, viewportSize, verticalScrollOffset, rowHeight, lastUpdated);
        private _computeCanSelect(query, noSelection);
        private _computeCanSelectAll(canSelect, isAvailable);
        private _computeHasSelectedItems(selectedItems);
        private _computeInlineActions(query, noInlineActions);
        private _computeHasTotalItem(totalItem, items, columnWidthsUpdated);
        private _updateTables(items, columns, canReorder);
        private _updateVerticalSpacer(totalItems, rowHeight);
        private _updateTableHeadersAndFooters(columns);
        private _updateTableData(items, columns);
        private _updateTableDataPendingUpdatesRAF;
        private _updateTableDataPendingUpdates();
        private _updateColumnWidths();
        private _columnWidthsUpdated(e?, detail?);
        private _requestAnimationFrame(action);
        private _dragStart(e);
        private _dragEnd(e, details);
        private _itemSelect(e, detail);
        private _itemActions(e, detail);
        private _contextmenuData(e);
        private _closeActions();
        private _contextmenuColumn(e);
        private _togglePin();
        private _configureColumns();
        private _upArrow(e);
        private _pageUp(e);
        private _downArrow(e);
        private _pageDown(e);
        private _preventScroll(e);
    }
}
declare namespace Vidyano.WebComponents {
    class QueryItemsPresenter extends WebComponent implements IConfigurable {
        private _renderedQuery;
        query: Vidyano.Query;
        templated: boolean;
        fileDrop: boolean;
        private _setLoading;
        private _setTemplated;
        private _setFileDrop;
        private _renderQuery(query, currentChart, isAttached);
        private _onFileDropped(e, details);
        private _refresh();
        private _new();
        private _delete();
        private _bulkEdit();
        _viConfigure(actions: IConfigurableAction[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class QueryPresenter extends WebComponent {
        private _customTemplate;
        private _cacheEntry;
        queryId: string;
        query: Vidyano.Query;
        private _setLoading;
        private _setError;
        attached(): void;
        private _activate(e);
        private _computeHasError(error);
        private _updateQuery(queryId, app);
        private _queryChanged(query, oldQuery);
        private _renderQuery(query);
        private _updateTitle(title);
    }
}
declare namespace Vidyano.WebComponents {
    abstract class Resource extends WebComponent {
        private _loadedSource;
        name: string;
        source: string;
        model: any;
        hasResource: boolean;
        private _setHasResource;
        attached(): void;
        addAlias(...alias: string[]): void;
        private _nameChanged(name, oldName);
        protected readonly _contentTarget: Node;
        private _load();
        static register(info?: IWebComponentRegistrationInfo): any;
        static LoadFragment(source: string | Resource, tagName: string): DocumentFragment;
        static LoadResource(source: string, tagName: string): Resource;
        static Exists(name: string, tagName: string): boolean;
    }
}
declare namespace Vidyano.WebComponents {
    class RetryActionDialog extends Dialog {
        retry: IRetryAction;
        constructor(retry: IRetryAction);
        private _computeTab(persistentObject, isAttached);
        private _onSelectOption(e);
        private _isFirst(index);
    }
}
declare namespace Vidyano.WebComponents {
    class Scroller extends WebComponent {
        private static _minBarSize;
        private _setHovering;
        private _setScrolling;
        private _verticalScrollHeight;
        private _verticalScrollTop;
        private _verticalScrollSpace;
        private _horizontalScrollWidth;
        private _horizontalScrollLeft;
        private _horizontalScrollSpace;
        private _trackStart;
        private _zenscroll;
        outerWidth: number;
        outerHeight: number;
        innerWidth: number;
        innerHeight: number;
        horizontal: boolean;
        noHorizontal: boolean;
        vertical: boolean;
        noVertical: boolean;
        horizontalScrollOffset: number;
        verticalScrollOffset: number;
        forceScrollbars: boolean;
        noScrollShadow: boolean;
        isWebKit: boolean;
        private _setAtTop;
        private _setOuterWidth;
        private _setOuterHeight;
        private _setInnerWidth;
        private _setInnerHeight;
        private _setHorizontal;
        private _setVertical;
        private _setScrollTopShadow;
        private _setScrollBottomShadow;
        private _setHiddenScrollbars;
        attached(): void;
        readonly scroller: HTMLElement;
        private _initializeZenscroll();
        scrollToTop(offsetTop?: number, animated?: boolean): Promise<void>;
        scrollToBottom(animated?: boolean): Promise<void>;
        private _outerSizeChanged(e, detail);
        private _innerSizeChanged(e, detail);
        private _updateVerticalScrollbar(outerHeight, innerHeight, verticalScrollOffset, noVertical);
        private _updateHorizontalScrollbar(outerWidth, innerWidth, horizontalScrollOffset, noHorizontal);
        private _trackVertical(e, detail);
        private _trackHorizontal(e, detail);
        private _trapEvent(e);
        private _scroll(e);
        private _updateScrollOffsets();
        private _verticalScrollOffsetChanged(newVerticalScrollOffset);
        private _horizontalScrollOffsetChanged(newHorizontalScrollOffset);
        private _mouseenter();
        private _mouseleave();
        private _verticalScrollbarParentTap(e);
        private _horizontalScrollbarParentTap(e);
        private _computeIsWebKit();
    }
}
declare namespace Vidyano.WebComponents {
    class Select extends WebComponent {
        private items;
        private filteredItems;
        private selectedItem;
        private suggestion;
        private filtering;
        private _lastMatchedInputValue;
        private _inputValue;
        private _pendingSelectedOption;
        options: string[] | Common.IKeyValuePair[];
        selectedOption: string;
        keepUnmatched: boolean;
        readonly: boolean;
        private _setSuggestion;
        private _setSelectedItem;
        private _setFiltering;
        open(): void;
        private readonly popup;
        private _keydown(e);
        private _keyup(e);
        private _blur();
        private _openPopup();
        private _popupOpened();
        private _popupClosed();
        private _scrollItemIntoView();
        private _computeItems(options);
        private _computeFilteredItems(items, inputValue, filtering, selectedOption);
        private _computeSuggestionFeedback(inputValue, suggestion, filtering);
        private _setSelectedOption(option, force?);
        private _selectedItemChanged();
        private _selectedOptionChanged();
        private _suggestionChanged();
        private _getItem(key, items?);
        private _select(e, detail);
        private _equals(item1, item2);
        private _isReadonlyInput(readonly, disableFiltering);
        private _disablePopup(readonly, disabled);
    }
    interface ISelectItem {
        displayValue: string;
        option: string | Common.IKeyValuePair;
    }
    class SelectOptionItem extends WebComponent {
        item: ISelectItem;
        private _onTap(e);
    }
}
declare namespace Vidyano.WebComponents {
    class SelectReferenceDialog extends Dialog {
        query: Vidyano.Query;
        canAddNewReference: boolean;
        canSelect: boolean;
        constructor(query: Vidyano.Query, forceSearch?: boolean, canAddNewReference?: boolean);
        private _initializingChanged(value);
        private _selectedItemsChanged();
        private _invalidateCanSelect(selectedItems?);
        private _queryPropertyChanged(sender, detail);
        private _select();
        private _addNew();
        private _search(e, detail);
        private _selectReference(e);
    }
}
declare namespace Vidyano.WebComponents {
    class SessionPresenter extends WebComponent {
        private _customTemplate;
        session: Vidyano.PersistentObject;
        private _computeApplication(app);
        private _computeSession(session);
        private _renderSession(session);
    }
}
declare namespace Vidyano.WebComponents {
    class SignIn extends WebComponent {
        error: string;
        image: string;
        private _setInitializationError;
        private _activate(e);
        private _imageChanged();
    }
    class SignInProvider extends WebComponent {
        private _isOnlyProvider;
        private _returnUrl;
        private _signInButton;
        private _signInButtonWidth;
        private _signingInMessage;
        name: string;
        userName: string;
        password: string;
        staySignedIn: boolean;
        isVidyano: boolean;
        signingIn: boolean;
        signingInCounter: number;
        twoFactorAuthentication: boolean;
        twoFactorCode: string;
        private _setIsVidyano;
        private _setSigningIn;
        private _setTwoFactorAuthentication;
        constructor(isVidyano: boolean, _isOnlyProvider: boolean, _returnUrl: string);
        attached(): void;
        private _vidyanoSignInAttached();
        private _keydown(e);
        private _computeLabel();
        private _computeDescription();
        private _tap();
        private _autoFocus();
        private _signIn();
        private _computeSigninButtonLabel(signingIn, signingInCounter, app);
    }
}
declare namespace Vidyano.WebComponents {
    class SignOut extends WebComponent {
        private _activate(e);
    }
}
declare namespace Vidyano.WebComponents {
    class SizeTracker extends WebComponent {
        private _resizeTimer;
        private _resizeTimerQueuedElements;
        private _resizeLast;
        private _resizeRAF;
        private _scrollListener;
        deferred: boolean;
        triggerZero: boolean;
        bubbles: boolean;
        private _setSize;
        attached(): void;
        detached(): void;
        measure(): void;
        private _onScroll(e);
        private _triggerSizeChanged();
        private _resizeTimerMicroTask();
        private _resetTriggers(element);
    }
}
declare namespace Vidyano.WebComponents {
    interface ISortableDragEndDetails {
        element: HTMLElement;
        newIndex: number;
        oldIndex: number;
    }
    abstract class Sortable extends WebComponent {
        private _sortable;
        group: string;
        filter: string;
        handle: string;
        draggableItems: string;
        enabled: boolean;
        private _setIsDragging;
        private _setIsGroupDragging;
        attached(): void;
        detached(): void;
        groupChanged(): void;
        filterChanged(): void;
        handleChanged(): void;
        draggableItemsChangted(): void;
        protected _dragStart(): void;
        protected _dragEnd(element: HTMLElement, newIndex: number, oldIndex: number): void;
        private _create();
        private _destroy();
        private _enabledChanged(enabled);
        static register(info?: IWebComponentRegistrationInfo): any;
    }
}
declare namespace Vidyano.WebComponents {
    class Spinner extends WebComponent {
        private _updateColor(color, isAttached);
    }
}
declare namespace Vidyano.WebComponents {
    class Style extends Vidyano.WebComponents.WebComponent {
        static profile: boolean;
        private _uniqueId;
        private _styleElement;
        private _styles;
        key: string;
        attached(): void;
        detached(): void;
        getStyle(name: string): string;
        setStyle(name: string, ...css: string[]): void;
    }
}
declare namespace Vidyano.WebComponents {
    class TimePicker extends WebComponent {
        hours: number;
        minutes: number;
        state: string;
        time: Date;
        private _setHours;
        private _setMinutes;
        attached(): void;
        private _timeChanged();
        private _tap(e, detail, sender);
        private _switch(e, detail);
        private _updateTime();
        private _catchTap(e);
        private _zeroPrefix(n);
    }
}
declare namespace Vidyano.WebComponents {
    class User extends WebComponent {
        private service;
        isSignedIn: boolean;
        collapsed: boolean;
        private _setService;
        private _setIsSignedIn;
        private _setCanFeedback;
        private _setCanUserSettings;
        private _setCanProfile;
        private _setUserName;
        attached(): void;
        signIn(): void;
        signOut(): void;
        feedback(): Promise<void>;
        userSettings(): void;
        private _showProfiler();
        private _signedInChanged();
    }
}
declare namespace Vidyano.WebComponents {
    module Keyboard {
        enum KeyCodes {
            backspace = 8,
            tab = 9,
            enter = 13,
            shift = 16,
            control = 17,
            alt = 18,
            pause = 19,
            break = 19,
            capslock = 20,
            escape = 27,
            pageup = 33,
            pagedown = 34,
            end = 35,
            home = 36,
            leftarrow = 37,
            uparrow = 38,
            rightarrow = 39,
            downarrow = 40,
            comma = 44,
            subtract = 45,
            period = 46,
            zero = 48,
            one = 49,
            two = 50,
            three = 51,
            four = 52,
            five = 53,
            six = 54,
            seven = 55,
            eight = 56,
            nine = 57,
        }
        let KeyIdentifiers: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "tab": string;
            "esc": string;
            "space": string;
            "*": string;
            "a": string;
            "b": string;
            "c": string;
            "d": string;
            "e": string;
            "f": string;
            "g": string;
            "h": string;
            "i": string;
            "j": string;
            "k": string;
            "l": string;
            "m": string;
            "n": string;
            "o": string;
            "p": string;
            "q": string;
            "r": string;
            "s": string;
            "t": string;
            "u": string;
            "v": string;
            "w": string;
            "x": string;
            "y": string;
            "z": string;
            "del": string;
        };
        interface IEvent extends KeyboardEvent {
            keyIdentifier: string;
        }
        interface IKeysEvent extends CustomEvent {
            detail: {
                combo: string;
                key: string;
                shiftKey?: boolean;
                ctrlKey?: boolean;
                altKey?: boolean;
                metaKey?: boolean;
                event: string;
                keyboardEvent: IEvent;
            };
        }
        interface IKeybindingRegistration {
            keys: string[];
            element: HTMLElement;
            listener: (e: IKeysEvent) => void;
            nonExclusive: boolean;
            priority?: number;
            scope?: Vidyano.WebComponents.AppRoute | Vidyano.WebComponents.Dialog;
        }
    }
    interface IPosition {
        x: number;
        y: number;
    }
    interface ISize {
        width: number;
        height: number;
    }
    let scrollbarWidth: () => number;
    interface IWebComponentKeybindingInfo {
        [keys: string]: {
            listener: string;
            nonExclusive?: boolean;
            priority?: number;
        } | string;
    }
    interface IWebComponentRegistrationInfo {
        properties?: PolymerProperties;
        hostAttributes?: {
            [name: string]: any;
        };
        listeners?: {
            [eventName: string]: string;
        };
        observers?: string[];
        extends?: string;
        behaviors?: any[];
        keybindings?: IWebComponentKeybindingInfo;
        forwardObservers?: string[];
    }
    interface IObserveChainDisposer {
        (): void;
    }
    class PolymerBase extends HTMLElement {
        /**
         * $ contains all names of elements in the shady DOM with an id attribute.
         */
        $: {
            [id: string]: HTMLElement;
        };
        /**
         * Convenience method to run `querySelector` on this local DOM scope.
         */
        $$: (selector: string) => HTMLElement | WebComponents.WebComponent;
        /**
         * Shady DOM entry point.
         */
        root: HTMLElement | WebComponent;
        /**
         * Invokes a function asynchronously. The context of the callback
         * function is bound to 'this' automatically.
         * @method async
         * @param {Function|String} method
         * @param {any|Array} args
         * @param {number} timeout
         */
        async: {
            (method: string, args?: any, timeout?: number): number;
            (method: Function, args?: any, timeout?: number): number;
        };
        /**
         * Cancels the async function call.
         */
        cancelAsync: (handle: number) => void;
        fire: (type: string, detail: any, options?: {
            onNode?: Node;
            bubbles?: boolean;
            cancelable?: boolean;
        }) => CustomEvent;
        /**
         * Call debounce to collapse multiple requests for a named task into one invocation, which is made after the wait time has elapsed with no new request. If no wait time is given, the callback is called at microtask timing (guaranteed to be before paint).
         */
        debounce: (jobName: string, callback: Function, wait?: number) => void;
        /**
         * Cancels an active debouncer without calling the callback.
         */
        cancelDebouncer: (jobName: string) => void;
        /**
         * Calls the debounced callback immediately and cancels the debouncer.
         */
        flushDebouncer: (jobName: string) => void;
        /**
         * Returns true if the named debounce task is waiting to run.
         */
        isDebouncerActive: (jobName: string) => void;
        push: (path: string, ...items: any[]) => number;
        pop: (path: string) => any;
        unshift: (path: string, items: any[]) => number;
        shift: (path: string) => any;
        splice: (path: string, index: number, removeCount?: number, items?: any[]) => any[];
        /**
         * Dynamically imports an HTML document.
         */
        importHref: (href: string, onLoad?: (e: CustomEvent) => void, onFail?: (e: CustomEvent) => void) => void;
        /**
         * Takes a URL relative to the <dom-module> of an imported Polymer element, and returns a path relative to the current document.
         * This method can be used, for example, to refer to an asset delivered alongside an HTML import.
         */
        resolveUrl: (href: string) => string;
        /**
         * Gets a path's value.
         */
        get: (path: string, root?: WebComponent) => any;
        /**
         * Sets a path's value and notifies Polymer for a change for that path.
         */
        set: (path: string, value: any, root?: WebComponent) => void;
        /**
         * Notifies Polymer for a change in the given path.
         */
        notifyPath: (path: string, value: any, fromAbove?: boolean) => void;
        /**
         *  Applies a CSS transform to the specified node, or host element if no node is specified.
         */
        transform: (transform: string, node?: Node | WebComponent) => void;
        /**
         * Transforms the specified node, or host element if no node is specified.
         */
        translate3d: (x: string, y: string, z: string, node?: Node | WebComponent) => void;
        /**
         * Toggles the named boolean class on the host element, adding the class if bool is truthy and removing it if bool is falsey.
         * If node is specified, sets the class on node instead of the host element.
         */
        toggleClass: (name: string, bool: boolean, node?: Node | WebComponent) => void;
        toggleAttribute: (name: string, bool: boolean, node?: Node | WebComponent) => void;
        /**
         * Key-value pairs for the custom styles on the element.
         */
        customStyle: {
            [key: string]: string;
        };
        /**
         * Returns the computed style value for the given property.
         */
        getComputedStyleValue: (property: string) => string;
        /**
         * Revaluates custom property values.
         */
        updateStyles: () => void;
        /**
         * Force immediate content distribution.
         */
        distributeContent: () => void;
        /**
         * Returns a list of effective child nodes for this element.
         */
        getEffectiveChildNodes: () => Node[];
        /**
         * Returns a list of effective child elements for this element.
         */
        getEffectiveChildren: () => HTMLElement[];
        /**
         * Returns the first effective child that matches selector.
         */
        queryEffectiveChildren: (selector: string) => HTMLElement;
        /**
         * Returns a list of effective children that match selector.
         */
        queryAllEffectiveChildren: (selector: string) => HTMLElement[];
    }
    interface IConfigurable extends PolymerBase {
        /**
         * Will be called when the context menu is openend on the element.
         */
        _viConfigure(actions: IConfigurableAction[]): any;
    }
    interface IConfigurableAction {
        icon: string;
        label: string;
        action: () => void;
        subActions?: IConfigurableAction[];
    }
    abstract class WebComponent extends PolymerBase {
        private _app;
        className: string;
        classList: DOMTokenList;
        tagName: string;
        style: CSSStyleDeclaration;
        isAttached: boolean;
        app: Vidyano.WebComponents.App;
        translations: any;
        private _setTranslations;
        protected attached(): void;
        protected detached(): void;
        computePath(relativePath: string): string;
        empty(parent?: Node, condition?: (e: Node) => boolean): void;
        findParent<T>(condition: (element: Node) => boolean, parent?: Node): T;
        translateMessage(key: string, ...params: string[]): string;
        protected _getFocusableElement(source?: Node): HTMLElement;
        protected _escapeHTML(val: string): string;
        protected _forwardObservable(source: Vidyano.Common.Observable<any> | Array<any>, path: string, pathPrefix: string, callback?: (path: string) => void): IObserveChainDisposer;
        private _computeApp(isAttached);
        private _forwardComputed(value);
        private _forwardNegate(value);
        static getName(fnc: Function): string;
        private static _register(obj, info?, prefix?, ns?);
        static register(obj: Function, info: IWebComponentRegistrationInfo, prefix?: string, ns?: any): Function;
        static register(info?: IWebComponentRegistrationInfo, prefix?: string): any;
    }
}
declare namespace Vidyano.WebComponents {
    class Website extends WebComponent {
        serviceUri: string;
        serviceHooks: string;
        cookiePrefix: string;
        attached(): void;
        private _cookiePrefixChanged(cookiePrefix);
    }
    class WebsiteAppServiceHooks extends AppServiceHooks {
        createData(data: any): void;
    }
    class WebsitePageModel {
        private _name;
        private _label;
        private _content;
        constructor(page: Vidyano.QueryResultItem);
        readonly name: string;
        readonly label: string;
        readonly content: string;
    }
}
