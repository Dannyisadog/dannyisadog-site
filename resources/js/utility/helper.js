export const lockScrollBody = (lock) => {
  const body = document.querySelector('body');

  if (lock) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}