'use strict';

function handleUpload() {
  const form = document.querySelector('#form');
  const input = document.querySelector('#file');
  const name = document.querySelector('#name');
  const results = document.querySelector('#results');

  input.addEventListener('change', (e) => {
    const file = e.target.value;

    if (file) {
      const filename = file.match(/[^\\]+$/)[0];
      name.textContent = filename;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('api/filedata', {
      method: 'POST',
      body: new FormData(form),
    })
      .then(res => res.json())
      .then((res) => {
        results.textContent = JSON.stringify(res, null, 2);
      })
      .catch((err) => {
        results.textContent = JSON.stringify(err, null, 2);
      });
  });
}

document.addEventListener('DOMContentLoaded', handleUpload);
