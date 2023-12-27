# vanilla-js-todo-app

## How to disable element from receiving bubble/capture events

Javascript

Set the css property of the element:

```css
my-element {
    pointer-events: none;
}
```

I was having trouble using `addEventListener` to detect a mouse click on an element. I had an `icon` inside a `button`. I wanted the `button` to detect the click (as the target), but the `icon` was the target. So, i used the above snippet to disable the `icon` from receiving the bubble/capture event.

## font-awesome

We can use the entire [font-awesome](https://fontawesome.com/) catalogue by using the [font-awesome cdn](https://cdnjs.com/libraries/font-awesome).

