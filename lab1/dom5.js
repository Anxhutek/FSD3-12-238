import { EventEmitter } from 'events';

class DomClass extends EventEmitter {

    addEventListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeEventListener(eventName, callback) {
        this.off(eventName, callback);
    }

    dispatchEvent(eventName, eventData = {}) {
        const event = {
            type: eventName,
            timespam: new Date(),
            ...eventData
        };

        this.emit(eventName, event);
    }
}

const button = new DomClass();

const clickHandler = (event) => {
    console.log(`Button was clicked at ${event.timespam}`);
};

button.addEventListener('click', clickHandler);

button.dispatchEvent('click', {
    target: 'submitButton'
});

button.dispatchEvent('click', {
    target: 'resetButton'
});
