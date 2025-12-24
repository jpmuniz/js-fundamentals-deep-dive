Microtasks are primarily used by Promises:
- then
- catch
- finally
- queueMicrotask

Microtasks have priority over Tasks.

All pending microtasks are executed as soon as the Call Stack is empty,
before the next task is processed.