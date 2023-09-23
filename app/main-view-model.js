import { Observable } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'Have a great day!';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 2;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };

  return viewModel;
}
